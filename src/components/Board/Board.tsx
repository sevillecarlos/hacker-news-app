import React, { Dispatch, SetStateAction } from "react";
import { Hits } from "../../model/NewsDataType";
import { Tab } from "../Tab/Tab";
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
      <Tab framework={framework} onFrameworkChange={onFrameworkChange} />
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
