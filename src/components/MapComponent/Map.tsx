import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import style from "./index.module.scss";

export default function Map() {
  const center = { lat: 25.204849, lng: 55.270782 };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCaN9WCzGWybb5bwyLvuxuFExq3GmNEhOs",
  });
  if (!isLoaded) return "loading ...";

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={style.container}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
