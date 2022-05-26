import axios from "axios";
import { NewsAPIProps } from "../../../../../model/NewsDataType";

const getNews = ({ frameworkName, pageNumber }: NewsAPIProps) => {
  const requesURL = `https://hn.algolia.com/api/v1/search_by_date?query=${frameworkName}&page=${pageNumber}`;
  return axios.get(requesURL);
};

export const NewsAPI = {
  getNews,
};
