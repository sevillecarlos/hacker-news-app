import React, { Dispatch, SetStateAction, useState } from "react";
import { DropDown } from "../../components/DropDown/DropDown";
import { AllNewsTab } from "./components/AllNewsTab";
import { FavNewsTab } from "./components/FavNewsTab";
import { TabsType } from "./Tab.model";
import { DropDownOptions } from "../../../model/DropDown.model";
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

  const ACTIVE = "active";
  const [activeTab, setActiveTab] = useState(TabsType.allNews);

  const checkActiveTabAll = () => activeTab === TabsType.allNews;
  const checkActiveTabFaves = () => activeTab === TabsType.myFaves;

  const onActiveTabChange = (key: TabsType) => setActiveTab(key);


  return (
    <div className="tabs">
      <ul className="nav">
        <li
          key={TabsType.allNews}
          onClick={() => onActiveTabChange(TabsType.allNews)}
          className={checkActiveTabAll() ? ACTIVE : ""}
        >
          {convertKeyTabToName(TabsType.allNews)}
        </li>

        <li
          key={TabsType.myFaves}
          onClick={() => onActiveTabChange(TabsType.myFaves)}
          className={checkActiveTabFaves() ? ACTIVE : ""}
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
        {checkActiveTabAll() ? (
          <AllNewsTab data={newsData} saveNews={saveNews} />
        ) : (
          <FavNewsTab data={savedNewsData} removeSaveNews={removeSaveNews} />
        )}
      </div>
    </div>
  );
};

interface TabsProps {
  framework: DropDownOptions;
  onFrameworkChange: Dispatch<SetStateAction<DropDownOptions>>;
  saveNews: Dispatch<SetStateAction<any>>;
  removeSaveNews: Dispatch<SetStateAction<any>>;
  newsData: Hits[];
  savedNewsData: Hits[];
}
