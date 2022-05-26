import React, { useState, useEffect } from "react";
import { DropDownOptions } from "../../../../model/DropDown.model";

import { NewsAPI } from "../../../libs/api/src/lib/news";
import { frameworksData } from "../../../data";
export const useDataNews = () => {
  const [framework, setFramework] = useState<string>(
    getFirstOption(frameworksData)
  );
  const [pageNumber, setPageNumber] = useState<number>(0);

  const [newsData, setNewsData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    NewsAPI.getNews({
      frameworkName: framework,
      pageNumber: pageNumber,
    })
      .then((x) => getNewsData(x))
      .then(setNewsData)
      .finally(() => setIsLoading(false));
  }, [framework]);

  return {
    framework,
    setFramework,
    pageNumber,
    setPageNumber,
    isLoading,
    newsData,
  };
};

const getNewsData = (data: any) => {
  return data;
};

const getFirstOption = (option: DropDownOptions[]) => {
  const [firstOption] = option;
  return firstOption.keyValue;
};
