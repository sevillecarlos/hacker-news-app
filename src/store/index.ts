import { Hits } from "../model/NewsDataType";
import { DropDownOptions } from "../../model/DropDown.model";
import { keyValuesType } from "../model/Store.model";

class Store {
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  add(key: string, value?: Hits | DropDownOptions | string) {
    const storageData = this.get(key);
    if (key === keyValuesType.savedNews) {
      if (storageData) {
        storageData.push(value as Hits);
        localStorage.setItem(key, JSON.stringify(storageData));
      } else {
        localStorage.setItem(key, JSON.stringify([value]));
      }
    }

    if (key === keyValuesType.savedQuery) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}

export default Store;
