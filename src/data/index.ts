import { DropDownOptions } from "../../model/DropDown.model";
import AngularIcon from "../assets/img/dropdown-images/angular-logo.png";
import ReactIcon from "../assets/img/dropdown-images/react-logo.png";
import VueIcon from "../assets/img/dropdown-images/vue-logo.png";

export const frameworksData: DropDownOptions[] = [
  { id: 1, name: "Angular", keyValue: "angular", icon: AngularIcon },
  { id: 2, name: "Reacts", keyValue: "reactjs", icon: ReactIcon },
  { id: 3, name: "Vuejs", keyValue: "vuejs", icon: VueIcon },
];
