import React from "react";
import { TabList, Tab, Tabs, TabPanel } from "react-tabs";
// import TabPanelContent from "./TabPanelContent";

function ScoreTabs({ data }) {
  console.log(data);
  const listTabs = data.map((currentArray, i) => {
    // let currentScore = number[Object.keys(number)[i]];
    let currentScore = Object.keys(currentArray)[0];
    // console.log(currentScore);
    // console.log(number[Object.keys(number)[0]]);
    return <Tab key={i}>{currentScore}</Tab>;
  });

  const listTabPanel = data.map((currentArray, i) => {
    let currentScore = Object.keys(currentArray)[0];
    console.log(currentArray[currentScore]);
    console.log(currentArray);
    let final = currentArray[currentScore].map((currentRow) => {
      return (
        <TabPanel key={i}>
          <h2>
            PCUID:
            {currentArray[currentScore][i].PCUID
              ? currentArray[currentScore][i].PCUID
              : "no pcuid"}
          </h2>
        </TabPanel>
      );
    });
    return final;
  });

  return (
    <div>
      <Tabs>
        <TabList>{listTabs}</TabList>
        {listTabPanel}
        {/* <TabPanelContent data={data} /> */}
      </Tabs>
    </div>
  );
}

export default ScoreTabs;
