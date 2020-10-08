import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  debugger;
  const [adData, setAdData] = useState({});
  const getAdData = async () => {
    const response = await axios.get("./data/Advdata.json");
    setAdData(response.data);
  };

  useEffect(() => {
    getAdData();
  }, []);

  return (
    <>
      <img
        src="/data/images/maner.png"
        id="maner"
        alt="Maner"
        data-cy="image"
      />
      <div id="layout">{adData.layout}</div>
      <img
        src="/data/images/blabar.png"
        id="blabar"
        alt="Blåbär"
        data-cy="image"
      />
      <div id="priceTag">
        <img
          src="/data/images/splash.svg"
          id="splash"
          alt="Splash"
          data-cy="image"
        />
        <div id="promotionUnit">{adData.promotion_unit}</div>
        <div id="subUnit">{adData.promotion_sub_unit}</div>
        <div id="unitMesurement">/{adData.article_unit_of_measurement}</div>
      </div>
      <div id="articleName">{adData.article_name}</div>
      <div id="companyInfo">
        <p>
          {adData.article_brand_name} {adData.article_origin_country}{" "}
          {adData.article_package_info}
        </p>
      </div>
    </>
  );
}

export default App;
