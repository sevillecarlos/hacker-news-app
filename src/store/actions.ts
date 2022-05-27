import Store from ".";
import { Hits } from "../model/NewsDataType";
import { actionType } from "../model/Store.model";

export const dispatch = ({
  action,
  key,
  values = undefined,
}: dispatchProps) => {
  const store = new Store();
  if (action === actionType.add) {
    store.add(key, values);
  }

  if (action === actionType.get) {
    return store.get(key);
  }
};

interface dispatchProps {
  action: string;
  key: string;
  values?: Hits|string;
}
