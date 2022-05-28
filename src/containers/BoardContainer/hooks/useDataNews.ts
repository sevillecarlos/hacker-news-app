import { useState, useEffect } from "react";
import { DropDownOptions } from "../../../../model/DropDown.model";
import { NewsDataType, Hits } from "../../../model/NewsDataType";
import { NewsAPI } from "../../../libs/api/src/lib/news";
import { frameworksData } from "../../../data";
import { dispatch } from "../../../store/actions";
import { actionType } from "../../../model/Store.model";
import { keyValuesType } from "../../../model/Store.model";

export const useDataNews = () => {
  const [framework, setFramework] = useState<DropDownOptions>(
    getFirstOption(frameworksData)
  );
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [newsData, setNewsData] = useState<Hits[]>([]);
  const [savedNewsData, setSavedNewsData] = useState<Hits[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const saveNews = (newsToSave: Hits) => {
    dispatch({
      action: actionType.add,
      key: keyValuesType.savedNews,
      values: newsToSave,
    });

    getDataFromStore();
  };

  const onFrameWorkChange = (frameworkSelect: DropDownOptions) => {
    setFramework(frameworkSelect);
    dispatch({
      action: actionType.add,
      key: keyValuesType.savedQuery,
      values: frameworkSelect,
    });
  };

  const removeSaveNews = (objectID: string) => {};

  const getDataFromStore = () => {
    const savedData = dispatch({
      action: actionType.get,
      key: keyValuesType.savedNews,
    });
    if (savedData) {
      setSavedNewsData(savedData);
    }
  };

  const getQueryFromStore = () => {
    const savedQuery = dispatch({
      action: actionType.get,
      key: keyValuesType.savedQuery,
    });
    if (savedQuery) {
      setFramework(savedQuery);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    NewsAPI.getNews({
      frameworkName: framework.keyValue,
      pageNumber: pageNumber,
    })
      .then((x) => getNewsData(x.data))
      .then(setNewsData)
      .finally(() => setIsLoading(false));
  }, [framework, pageNumber]);

  useEffect(() => {
    getDataFromStore();
    getQueryFromStore();
  }, []);

  return {
    framework,
    onFrameWorkChange,
    pageNumber,
    setPageNumber,
    isLoading,
    newsData,
    saveNews,
    removeSaveNews,
    savedNewsData,
  };
};

const getNewsData = (data: NewsDataType): Hits[] =>
  data.hits
    .map((hit) => ({
      author: hit.author,
      story_title: hit.story_title,
      story_url: hit.story_url,
      created_at: hit.created_at,
      objectID: hit.objectID,
    }))
    .filter(
      (d: Hits) => d.author && d.story_title && d.story_url && d.created_at
    );

const getFirstOption = (option: DropDownOptions[]) => {
  const [firstOption] = option;
  return firstOption;
};
