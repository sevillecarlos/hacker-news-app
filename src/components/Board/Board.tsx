import React, { Dispatch, SetStateAction } from "react";
import { Hits } from "../../model/NewsDataType";
import { Tab } from "../Tab/Tab";
export const Board = ({
  framework,
  onFrameworkChange,
  pageNumber,
  onPageNumberChange,
  loading = false,
  saveNews,
  removeSaveNews,
  newsData,
  savedNewsData,
}: BoardProps) => {
  return (
    <div>
      <Tab
        framework={framework}
        onFrameworkChange={onFrameworkChange}
        saveNews={saveNews}
        removeSaveNews={removeSaveNews}
        newsData={newsData}
        savedNewsData={savedNewsData}
      />
    </div>
  );
};

interface BoardProps {
  framework: string;
  onFrameworkChange: Dispatch<SetStateAction<any>>;
  pageNumber: number;
  onPageNumberChange: Dispatch<SetStateAction<number>>;
  loading: boolean;
  saveNews: Dispatch<SetStateAction<any>>;
  removeSaveNews: Dispatch<SetStateAction<any>>;
  newsData: Hits[];
  savedNewsData: Hits[];
}
