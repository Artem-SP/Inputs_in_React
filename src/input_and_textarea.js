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
