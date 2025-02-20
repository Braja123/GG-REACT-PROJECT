import React, { useState } from "react";

const CheckSelectDropdown = () => {
  const [selectColor, setSelectColor] = useState("");
  console.log("selectColor", selectColor);
  let options = [
    { label: "red", value: "1" },
    { label: "green", value: "2" },
    { label: "blue", value: "3" },
  ];

  return (
    <div>
      <h3>CheckSelectDropdown</h3>
      {/* <select
        value={selectColor}
        onChange={(e) => setSelectColor(e.target.value)}
      >
        <option>Select Color</option>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </select>
      <h3
        className={
          selectColor === "Red"
            ? "redColor"
            : selectColor === "Green"
            ? "greenColor"
            : selectColor === "Blue"
            ? "blueColor"
            : ""
        }
      >
        Fill the color you want
      </h3> */}
      <div>
        <select onChange={(e) => setSelectColor(e.target.value)}>
          {options?.map((color) => (
            <option value={color.value}>{color.label}</option>
          ))}
        </select>
        <h3>{selectColor}</h3>
      </div>
    </div>
  );
};

export default CheckSelectDropdown;
