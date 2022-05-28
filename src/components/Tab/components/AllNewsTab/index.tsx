import { Dispatch, SetStateAction } from "react";
import { Card } from "../../../Card/Card";
import { Hits } from "../../../../model/NewsDataType";

export const AllNewsTab = ({ data, saveData, saveNews }: AllNewsTabProps) => {
  return (
    <div>
      {data.map((newsData: Hits) => (
        <Card
          key={newsData.objectID}
          title={newsData.author}
          content={newsData.story_title}
          setAction={() => saveNews(newsData)}
          action={saveData.some((s) => s.objectID === newsData.objectID)}
        />
      ))}
    </div>
  );
};

interface AllNewsTabProps {
  data: Hits[];
  saveData: Hits[];
  saveNews: Dispatch<SetStateAction<any>>;
}
