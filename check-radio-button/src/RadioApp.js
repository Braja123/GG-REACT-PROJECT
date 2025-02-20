import React, { useState } from "react";

const RadioApp = () => {
  const [colorSelected, setColorSelected] = useState("red");

  const handleColor = (e) => {
    setColorSelected(e.target.value);
  };

  console.log("colorSelected", colorSelected);

  return (
    <div>
      <h3>RadioApp</h3>
      <input
        type="radio"
        name="color"
        id="redColor"
        value="red"
        defaultChecked
        onChange={handleColor}
      />
      <label htmlFor="redColor">Red</label>
      <input
        type="radio"
        name="color"
        id="greenColor"
        value="green"
        onChange={handleColor}
      />
      <label htmlFor="greenColor">Green</label>
      <div>
        <h3 className={colorSelected === "red" ? "redColor" : "greenColor"}>
          Fill me which color you want
        </h3>
      </div>
    </div>
  );
};

export default RadioApp;
