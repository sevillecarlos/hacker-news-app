import React, { Dispatch, SetStateAction } from "react";
import { Hits } from "../../model/NewsDataType";
import { DropDown } from "../../components/DropDown/DropDown";
import { Card } from "../Card/Card";
import { frameworksData } from "../../data";
export const Board = ({
  framework,
  onFrameworkChange,
  pageNumber,
  onPageNumberChange,
  loading = false,
  newsData,
}: BoardProps) => {
  return (
    <div>
      <DropDown
        options={frameworksData}
        select={framework}
        setSelect={onFrameworkChange}
      />
      {newsData.map(({ author, story_title }) => (
        <Card title={author} content={story_title} />
      ))}
    </div>
  );
};

interface BoardProps {
  framework: string;
  onFrameworkChange: Dispatch<SetStateAction<string>>;
  pageNumber: number;
  onPageNumberChange: Dispatch<SetStateAction<number>>;
  loading: boolean;
  newsData: Hits[];
}
