import React, { useEffect } from "react";
import banner from "/assets/home-banner.png";
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
  return (
    <div className="px-4 py-10">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold">
          Aquaflow BD is the ultimate solution to fix problem of water
          pollutions in Bangladesh.
        </h1>
        <img
          className="aspect-video rounded-md"
          src={banner}
          width={1600}
          height={900}
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          iste maiores vel quas, sed ipsum dicta placeat inventore illum! Cum
          provident facere sint unde aut fugiat, rerum reprehenderit quidem
          nostrum!
        </p>
      </header>
    </div>
  );
};

export default Home;
