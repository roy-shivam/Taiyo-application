import Charts from "../components/chartsAndMaps/charts";
import Maps from "../components/chartsAndMaps/maps";

function ChartsAndMaps() {
  return (
    <div>
      <div className="h-screen flex">
        <div className="bg-white m-3 flex flex-col justify-center items-center flex-1 rounded-xl shadow-xl">
          <div className="h-16 w-full pl-5 flex items-center text-left">
            <h1 className="text-2xl font-bold text-black-500">
              Charts & Maps
            </h1>
          </div>
          <div className="flex-1 px-3 pb-3 w-full grid grid-rows-2 gap-2">
            <Charts />
            <Maps />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartsAndMaps;
