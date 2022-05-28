import { Dispatch, SetStateAction } from "react";
import { Card } from "../../../Card/Card";
import { Hits } from "../../../../model/NewsDataType";
import "../../../Style/grid.css";

export const AllNewsTab = ({ data, saveData, saveNews }: AllNewsTabProps) => {

  return (
    <div className="row">
      <div>
        {data.map((newsData: Hits) => (
          <div className="column">
            <Card
              keyValue={newsData.objectID}
              title={newsData.author}
              createdAt={newsData.created_at}
              content={newsData.story_title}
              url={newsData.story_url}
              setAction={() => saveNews(newsData)}
              action={saveData.some((s) => s.objectID === newsData.objectID)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface AllNewsTabProps {
  data: Hits[];
  saveData: Hits[];
  saveNews: Dispatch<SetStateAction<any>>;
}
