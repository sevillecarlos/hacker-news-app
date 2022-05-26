import { DropDownOptions } from "../../model/DropDown.model";
import AngularLogoImage from "../assets/img/dropdown-images/angular-logo.png";
import ReactLogoImage from "../assets/img/dropdown-images/react-logo.png";
import VueLogoImage from "../assets/img/dropdown-images/vue-logo.png";

export const frameworksData: DropDownOptions[] = [
  { id: 1, name: "Angular", keyValue: "angular", image: AngularLogoImage },
  { id: 2, name: "Reacts", keyValue: "reactjs", image: ReactLogoImage },
  { id: 3, name: "Vuejs", keyValue: "vuejs", image: VueLogoImage },
];
