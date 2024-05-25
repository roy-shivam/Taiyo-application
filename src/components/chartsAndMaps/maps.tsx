import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { useQuery } from "@tanstack/react-query";
import { countryCovidData } from "../../services/fetch";
import Skeleton from "../ui/skeleton/Skeleton";
import { skeletonVariants } from "../ui/skeleton/skeleton-variants";

function Maps() {
  const { data, isLoading } = useQuery({
    queryKey: ["countryCovidData"],
    queryFn: async () => await countryCovidData,
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

  const marker = data;

  const position: LatLngTuple = [20.5937, 78.9629];

  return (
    <div className="border rounded-lg overflow-hidden">
      <MapContainer center={position} zoom={5}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {marker?.map((marker, id) => (
          <Marker
            key={id}
            position={[marker.countryInfo.lat, marker.countryInfo.long]}
          >
            <Popup>
              <div>
                <h1>{marker.country}</h1>
                <h2>Active: {marker.active}</h2>
                <h2>Recovered: {marker.recovered}</h2>
                <h2>Deaths: {marker.deaths}</h2>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Maps;
