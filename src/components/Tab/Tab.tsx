import React, { Dispatch, SetStateAction, useState } from "react";
import { DropDown } from "../../components/DropDown/DropDown";
import { AllNewsTab } from "./components/AllNewsTab";
import { FavNewsTab } from "./components/FavNewsTab";
import { TabsType } from "./Tab.model";
import { Hits } from "../../model/NewsDataType";
import { convertKeyTabToName } from "../../helpers/TabsHelper";
import { frameworksData } from "../../data";
import "./Tab.style.css";

export const Tab = ({
  framework,
  onFrameworkChange,
  saveNews,
  removeSaveNews,
  newsData,
  savedNewsData,
}: TabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(TabsType.allNews);

  const checkActiveTab = () => activeTab === TabsType.allNews;

  const onActiveTabChange = () =>
    checkActiveTab()
      ? setActiveTab(TabsType.myFaves)
      : setActiveTab(TabsType.allNews);

  return (
    <div className="tabs">
      <ul className="nav">
        {Object.values(TabsType).map((tabType: string) => (
          <li
            key={tabType}
            onClick={onActiveTabChange}
            //need to fix
            className={tabType === TabsType.allNews ? "active" : ""}
          >
            {convertKeyTabToName(tabType)}
          </li>
        ))}
      </ul>
      <DropDown
        options={frameworksData}
        select={framework}
        setSelect={onFrameworkChange}
      />
      <div className="outlet">
        {checkActiveTab() ? (
          <AllNewsTab data={newsData} saveNews={saveNews} />
        ) : (
          <FavNewsTab data={savedNewsData} removeSaveNews={removeSaveNews} />
        )}
      </div>
    </div>
  );
};

interface TabsProps {
  framework: string;
  onFrameworkChange: Dispatch<SetStateAction<string>>;
  saveNews: Dispatch<SetStateAction<any>>;
  removeSaveNews: Dispatch<SetStateAction<any>>;
  newsData: Hits[];
  savedNewsData: Hits[];
}
