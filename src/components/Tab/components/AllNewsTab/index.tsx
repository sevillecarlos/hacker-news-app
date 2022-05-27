import React from "react";
import { Card } from "../../../Card/Card";
import { Hits } from "../../../../model/NewsDataType";

export const AllNewsTab = ({ data }: AllNewsTabProps) => {
  return (
    <div>
      {data.map(({ author, story_title }) => (
        <Card title={author} content={story_title} />
      ))}
    </div>
  );
};

interface AllNewsTabProps {
  data: Hits[];
}
