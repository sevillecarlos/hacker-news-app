import React, { memo, Dispatch, SetStateAction, useState } from "react";
import { DropDownOptions } from "../../../model/DropDown.model";
import { RiArrowDownSLine } from "react-icons/ri";
import "./DropDown.style.css";

export const DropDown = memo<DropDownOptionsProps>(
  ({ options, select, setSelect }) => {
    const [showItems, setShowItems] = useState<boolean>(false);

    const toggleShowOptions = () => {
      setShowItems((prevState: boolean) => !prevState);
    };

    const onSelectChange = (selection: DropDownOptions) => {
      setSelect(selection);
      setShowItems(false);
    };

    return (
      <div className="dropdown-box">
        <div className="dropdown-container">
          <div className="dropdown-selected-item">
            {optionName(select.name, select.icon)}
          </div>
          <RiArrowDownSLine
            className="dropdown-arrow"
            onClick={toggleShowOptions}
          />
          <div
            style={{ display: showItems ? "block" : "none" }}
            className="dropdown-items"
          >
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => onSelectChange(option)}
              >
                {optionName(option.name, option.icon)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

const optionName = (name: string, icon: any) => (
  <a>
    <img src={icon} alt={name} className="icon-image" /> {name}
  </a>
);

interface DropDownOptionsProps {
  options: DropDownOptions[];
  select: DropDownOptions;
  setSelect: Dispatch<SetStateAction<DropDownOptions>>;
}
