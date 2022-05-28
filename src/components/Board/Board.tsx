import React, { Dispatch, SetStateAction } from "react";
import { Hits } from "../../model/NewsDataType";
import { Tab } from "../Tab/Tab";
import { Pagination } from "../Pagination/Pagination";
import { DropDownOptions } from "../../../model/DropDown.model";

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
      <Pagination onPageNumberChange={onPageNumberChange} pageNumber={pageNumber}/>
    </div>
  );
};

interface BoardProps {
  framework: DropDownOptions;
  onFrameworkChange: Dispatch<SetStateAction<any>>;
  pageNumber: number;
  onPageNumberChange: Dispatch<SetStateAction<number>>;
  loading: boolean;
  saveNews: Dispatch<SetStateAction<any>>;
  removeSaveNews: Dispatch<SetStateAction<any>>;
  newsData: Hits[];
  savedNewsData: Hits[];
}
