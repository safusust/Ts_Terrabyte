import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
function MapContainer() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidHVyeWEwNyIsImEiOiJjbTM4aTYxbzEwcGhlMmxzZm56eDQ0aTZqIn0.q5s2yIt2n_wR57a3PzkGVQ";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
    });

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [90.4219536, 23.7723667],
      zoom: 12,
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return <div id="map-container" ref={mapContainerRef}></div>;
}

export default MapContainer;
