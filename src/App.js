import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";

import Spread from './Spread'
import React, { useState } from "react";
export default function App() {
  const [data, setData] = useState([{ customer: 1 }]);

  return (
    <> 
      <Spread data={data}></Spread>
      <button onClick={() => setData([{ name: "avinash" }])}>{"Hello"}</button>
    </>
  );
}
