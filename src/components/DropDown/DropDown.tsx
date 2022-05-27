import React, { memo, Dispatch, SetStateAction } from "react";
import { DropDownOptions } from "../../../model/DropDown.model";
import { actionDropDown } from "./DropDownAction";
import { RiArrowDownSLine } from "react-icons/ri";
import "./DropDown.style.css";

export const DropDown = memo<DropDownOptionsProps>(
  ({ options, select, setSelect }) => {

    return (
      <div
        className="dropdown"
        onChange={(e: any) => setSelect(e.target.value)}
      >
        <button onClick={actionDropDown} className="drop-button">
          {optionName(select.name, select.icon)}
          <div className="down-arrow">
            <RiArrowDownSLine />
          </div>
        </button>{" "}
        {options.map((option) => (
          <div
            onClick={() => setSelect(option)}
            id="drop-content-select"
            className="dropdown-content"
            key={option.id}
          >
            {optionName(option.name, option.icon)}
          </div>
        ))}
      </div>
    );
  }
);

const optionName = (name: string, icon: any) => (
  <span>
    <img src={icon} alt={name} className="icon-image" /> {name}
  </span>
);

interface DropDownOptionsProps {
  options: DropDownOptions[];
  select: DropDownOptions;
  setSelect: Dispatch<SetStateAction<DropDownOptions>>;
}
