import React, { useState } from "react";
import "./styles.css";

function App(props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          console.log(value);
        }}
      >
        <option value="Aple">Aple</option>
        <option value="Orange">Orange</option>
        <option value="Coconut">Coconut</option>
      </select>
      {value}
    </div>
  );
}

export default App;
