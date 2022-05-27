import { Card } from "../../../Card/Card";
import { Hits } from "../../../../model/NewsDataType";
import { dispatch } from "../../../../store/actions";
import { keyValuesType } from "../../../../model/Store.model";
import { actionType } from "../../../../model/Store.model";

export const AllNewsTab = ({ data }: AllNewsTabProps) => {
  const saveNews = (newsToSave: Hits) => {
    dispatch({
      action: actionType.add,
      key: keyValuesType.savedNews,
      values: newsToSave,
    });
  };
  return (
    <div>
      {data.map((newsData: Hits) => (
        <Card
          key={newsData.objectID}
          title={newsData.author}
          content={newsData.story_title}
          setAction={() => saveNews(newsData)}
        />
      ))}
    </div>
  );
};

interface AllNewsTabProps {
  data: Hits[];
}
