import Store from ".";
import { Hits } from "../model/NewsDataType";
import { actionType } from "../model/Store.model";

export const dispatch = ({
  action,
  key,
  values = undefined,
}: dispatchProps) => {
    console.log('################## FUNCIONA')
  const store = new Store();
  return action === actionType.add ? store.add(key, values) : store.get(key);
};

interface dispatchProps {
  action: string;
  key: string;
  values: Hits | undefined;
}
