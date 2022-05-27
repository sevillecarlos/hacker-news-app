import React, { memo, Dispatch, SetStateAction } from "react";
import { DropDownOptions } from "../../../model/DropDown.model";
import "./DropDown.style.css";

export const DropDown = memo<DropDownOptionsProps>(
  ({ options, select, setSelect }) => {
    return (
      <select
        className="dropdown"
        onChange={(e) => setSelect(e.target.value)}
        value={select}
      >
        {" "}
        {options.map(({ id, name, keyValue }) => (
          <option key={id} value={keyValue}>
            {optionName(name, null)}
          </option>
        ))}
      </select>
    );
  }
);

const optionName = (name: string, icon: any) => (
  <span>
   <img src={AngularIcon} height={100} width={100} />
  </span>
);
interface DropDownOptionsProps {
  options: DropDownOptions[];
  select: string;
  setSelect: Dispatch<SetStateAction<string>>;
}
