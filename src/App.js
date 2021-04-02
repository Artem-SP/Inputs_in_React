import React, { useState } from "react";
import "./styles.css";

function App(props) {
  const [value, setValue] = useState("");
  console.log("render");
  console.log(value);
  return (
    <div>
      <input
        //  <textarea
           type="text"
        // type="number"
        // type="color"
        // type="date"
        // type="range"
        // type="checkbox"
        // type="radio"
        // type="password"
        // type="email"
        // type="time"
        // type="search"
        // type="tel"
        // type="url"
        // type="month"
        // type="week"
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
          console.log("render");
        }}
      />
      <br />
      {value}
    </div>
  );
}

export default App;
