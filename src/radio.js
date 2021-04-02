import React, { useState } from "react";
import "./styles.css";

export default function App(props) {
  const items = ["Apple", "Orange", "Coconut"];
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {items.map((item) => (
        <li>
          <label key={item}>
            <input
              type="radio"
              checked={checked === item}
              onChange={() => setChecked(item)}
            />
            {item}
          </label>
        </li>
      ))}
    </div>
  );
}
