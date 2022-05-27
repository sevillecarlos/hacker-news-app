import { Hits } from "../model/NewsDataType";
import { keyValuesType } from "../model/Store.model";

class Store {
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  add(key: string, value: Hits | string | undefined) {
    const storageData = this.get(key);
    if (key === keyValuesType.savedNews) {
      if (storageData) {
        const parseData: Hits[] = JSON.parse(storageData);
        parseData.push(value as Hits);
        localStorage.setItem(key, JSON.stringify(parseData));
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
