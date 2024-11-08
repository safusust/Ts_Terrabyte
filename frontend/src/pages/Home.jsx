import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (ele) => {
        console.log(ele.coords);
      },
      null,
      {
        enableHighAccuracy: true,
      }
    );
  }, []);
  return <div>This is homePage</div>;
};

export default Home;
