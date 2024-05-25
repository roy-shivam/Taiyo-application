import { useQuery } from "@tanstack/react-query";
import { graphCovidData } from "../../services/fetch";
import { XAxis, ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";
import { splitKeyValue } from "../../utils/splitKeyValuePairs";
import Skeleton from "../ui/skeleton/Skeleton";
import { skeletonVariants } from "../ui/skeleton/skeleton-variants";

function Charts() {
  const { data, isLoading } = useQuery({
    queryKey: ["graphCovidData"],
    queryFn: async () => await graphCovidData,
  });

  if (isLoading) {
    return (
      <div className="h-full w-full">
        <Skeleton
          className={skeletonVariants({ variant: "default" })}
          variant={"default"}
          size={"default"}
        />
      </div>
    );
  }

  const chartData = splitKeyValue(data.cases);

  return (
    <div className="border relative rounded-lg overflow-x-hidden">
      <div className="absolute top-5 left-5 font-poppins text-lg">
        Global Covid Cases
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="overflow-hidden"
      >
        <AreaChart
          width={500}
          height={200}
          margin={{ top: 50, right: 20, left: 20, bottom: 0 }}
          data={chartData}
          className="border"
        >
          <Area
            type="monotone"
            dataKey="cases"
            stroke="#700e07"
            fillOpacity={0.5}
            fill="#cf0823"
            strokeWidth={1.5}
          />
          <XAxis dataKey="date" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
