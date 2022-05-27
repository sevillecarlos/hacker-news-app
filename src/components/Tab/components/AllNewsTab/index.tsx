import { Dispatch, SetStateAction } from "react";
import { Card } from "../../../Card/Card";
import { Hits } from "../../../../model/NewsDataType";

export const AllNewsTab = ({ data, saveNews }: AllNewsTabProps) => {
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
  saveNews: Dispatch<SetStateAction<any>>;
}
