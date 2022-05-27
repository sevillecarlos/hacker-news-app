import { Hits } from "../model/NewsDataType";

class Store {
  add(key: string, value: Hits | undefined) {
    return localStorage.setItem(key, JSON.stringify([value]));
  }

  get(key: string) {
    return localStorage.getItem(key);
  }
}

export default Store;
