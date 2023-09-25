import React, { useState } from "react";

function AmazonFieldset() {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className="w-full">
      <fieldset className="border border-solid border-black w-[90%] my-3 mx-5 p-2">
        <legend className="items-center flex justify-center mx-6  md:mx-4 text-base">
          Regions
        </legend>
        <label className="m-3 ">
          <input
            type="radio"
            name="regions"
            value="all"
            checked={selectedRegion === "all"}
            onChange={handleRegionChange}
          />
          All
        </label>
        <label className="m-3 ">
          <input
            type="radio"
            name="regions"
            value="japan"
            checked={selectedRegion === "japan"}
            onChange={handleRegionChange}
          />
          Japan
        </label>
        <label className="m-3 ">
          <input
            type="radio"
            name="regions"
            value="china"
            checked={selectedRegion === "china"}
            onChange={handleRegionChange}
          />
          China
        </label>
      </fieldset>
    </div>
  );
}

export default AmazonFieldset;
