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

  const onActiveTabChange = (key: TabsType) => setActiveTab(key);

  return (
    <div className="tabs">
      <ul className="nav">
        <li
          key={TabsType.allNews}
          onClick={() => onActiveTabChange(TabsType.allNews)}
          className={activeTab === TabsType.allNews ? "active" : ""}
        >
          {convertKeyTabToName(TabsType.allNews)}
        </li>

        <li
          key={TabsType.myFaves}
          onClick={() => onActiveTabChange(TabsType.myFaves)}
          className={activeTab === TabsType.myFaves ? "active" : ""}
        >
          {convertKeyTabToName(TabsType.myFaves)}
        </li>
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
