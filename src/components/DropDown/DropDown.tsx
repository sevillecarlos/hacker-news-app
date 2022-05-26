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
        {options.map(({ id, name, keyValue, image }) => (
          <option key={id} value={keyValue}>
            <img src={image} width="100" height="50" /> <span>{name}</span>
          </option>
        ))}
      </select>
    );
  }
);

interface DropDownOptionsProps {
  options: DropDownOptions[];
  select: string;
  setSelect: Dispatch<SetStateAction<string>>;
}
