import React, { Dispatch, SetStateAction } from "react";
import { Card } from "../../../Card/Card";
import { Hits } from "../../../../model/NewsDataType";

export const FavNewsTab = ({ data, removeSaveNews }: FavNewsTabProps) => {
  console.log('@@@@@@@@@@@@@@@@2', data)

  return (
    <div>
      {data?.map((newsData: Hits) => (
        <Card
          key={newsData.objectID}
          title={newsData.author}
          content={newsData.story_title}
          setAction={() => removeSaveNews(newsData)}
        />
      ))}
    </div>
  );
};

interface FavNewsTabProps {
  data: Hits[];
  removeSaveNews: Dispatch<SetStateAction<any>>;
}
