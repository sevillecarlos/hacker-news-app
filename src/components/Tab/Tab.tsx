import React, { Dispatch, SetStateAction } from "react";
import { DropDown } from "../../components/DropDown/DropDown";
import { AllNewsTab } from "./components/AllNewsTab";
import { FavNewsTab } from "./components/FavNewsTab";
import { frameworksData } from "../../data";
import "./Tab.style.css";

export const Tab = ({
  framework,
  onFrameworkChange,
}: TabsProps): JSX.Element => {
  return (
    <div className="tabs">
      <ul className="nav">
        <li>All News</li>
        <li>My faves</li>
      </ul>
      <DropDown
        options={frameworksData}
        select={framework}
        setSelect={onFrameworkChange}
      />
      <div className="outlet">{/* content will be shown here */}</div>
    </div>
  );
};

interface TabsProps {
  framework: string;
  onFrameworkChange: Dispatch<SetStateAction<string>>;
}
