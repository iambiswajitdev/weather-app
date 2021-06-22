import { useEffect, useState } from "react";
import React from "react";

const Wather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("kolkata");

  useEffect(() => {
    const featchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q= ${search}&units=metric&appid=72cc30d7f473b8a78263bf6d7a22a91f `;
      const responce = await fetch(url);
      const resJson = await responce.json();
      //console.log(responce);
      setCity(resJson.main);
    };
    featchApi();
  }, [search]);

  return (
    <>
      <div className="wather">
        <div className="wather_box">
          <div className="inputData">
            <input
              type="search"
              value={search}
              className="inputFildData"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          {!city ? (
            <p className="notFound"> data not found</p>
          ) : (
            <div className="information">
              <h2 className="contry">{search}</h2>
              <h3 className="stateData">{city.temp}°C</h3>
              <p className="minMax">
                min : {city.temp_min}°C | max: {city.temp_max}°C
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Wather;
