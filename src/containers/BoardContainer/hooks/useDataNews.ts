import { useState, useEffect } from "react";
import { DropDownOptions } from "../../../../model/DropDown.model";
import { NewsDataType, Hits } from "../../../model/NewsDataType";
import { NewsAPI } from "../../../libs/api/src/lib/news";
import { frameworksData } from "../../../data";
export const useDataNews = () => {

    const [framework, setFramework] = useState<string>(
    getFirstOption(frameworksData)
  );
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [newsData, setNewsData] = useState<Hits[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    NewsAPI.getNews({
      frameworkName: framework,
      pageNumber: pageNumber,
    })
      .then((x) => getNewsData(x.data))
      .then(setNewsData)
      .finally(() => setIsLoading(false));
  }, [framework, pageNumber]);

  return {
    framework,
    setFramework,
    pageNumber,
    setPageNumber,
    isLoading,
    newsData,
  };
};

const getNewsData = (data: NewsDataType): Hits[] =>
  data.hits.map((hit) => ({
    author: hit.author,
    story_title: hit.story_title,
    story_url: hit.story_url,
    created_at: hit.created_at,
    objectID: hit.objectID,
  }));

const getFirstOption = (option: DropDownOptions[]) => {
  const [firstOption] = option;
  return firstOption.keyValue;
};
