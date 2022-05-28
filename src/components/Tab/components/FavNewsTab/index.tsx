import { Dispatch, SetStateAction } from "react";
import { Card } from "../../../Card/Card";
import { Hits } from "../../../../model/NewsDataType";

export const FavNewsTab = ({ data, news, removeSaveNews }: FavNewsTabProps) => {
  return (
    <div>
      {data?.map((newsData: Hits) => (
        <Card
          key={newsData.objectID}
          title={newsData.author}
          content={newsData.story_title}
          url={newsData.story_url}
          setAction={() => removeSaveNews(newsData)}
          action={news.some((s) => s.objectID === newsData.objectID)}
        />
      ))}
    </div>
  );
};

interface FavNewsTabProps {
  data: Hits[];
  news: Hits[];
  removeSaveNews: Dispatch<SetStateAction<any>>;
}
