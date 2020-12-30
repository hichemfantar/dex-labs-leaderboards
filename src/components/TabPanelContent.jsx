import React, { Fragment } from "react";
import { TabPanel } from "react-tabs";

function TabPanelContent({ data }) {
  const listTabPanel = data.map((number, i) => {
    let currentScore = Object.keys(number)[0];
    console.log(currentScore);
    return <TabPanel key={i}>{currentScore}</TabPanel>;
  });

  return <Fragment>{listTabPanel}</Fragment>;
}

export default TabPanelContent;
