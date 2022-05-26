import React, { memo } from "react";
import { DropDownOptions } from "../../../model/DropDown.model";
import "./DropDown.style.css";

const DropDown = memo<DropDownOptionsProps>(({ options }) => {
  return (
    <select className="dropdown">
      {options.map(({ id, name, keyValue, image }) => (
        <option key={id} value={keyValue}>
          <img src={image} width="100" height="50" /> <span>{name}</span>
        </option>
      ))}
    </select>
  );
});

interface DropDownOptionsProps {
  options: DropDownOptions[];
}
export default DropDown;
