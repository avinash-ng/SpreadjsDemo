import React, { useEffect, useState } from "react";
import { SpreadSheets, Worksheet } from "@grapecity/spread-sheets-react";
import * as GC from "@grapecity/spread-sheets-react";
const Spread = ({ data }) => {
  const [spread, setSpread] = useState();
  useEffect(() => {
    let sheet = spread?.getActiveSheet();
    console.log("data is ", data);
    sheet?.setDataSource(data);
  }, [data]);

  const initWorkBook = (spread) => {
    spread?.refresh();
    setSpread(spread);
  };

  const cellDoubleClickHandler = () => {
    console.log("data in cell double click handler ", data);
  }
  return (
    <SpreadSheets
      hostStyle={{ width: 600, height: 600 }}
      workbookInitialized={(spread) => initWorkBook(spread)}
      cellDoubleClick={() => cellDoubleClickHandler()}
    >
      <Worksheet dataSource={data}></Worksheet>
    </SpreadSheets>
  );
};
export default Spread;
