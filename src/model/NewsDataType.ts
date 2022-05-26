export interface NewsAPIProps {
  frameworkName: string;
  pageNumber: number;
}
export interface Hits {
  author: string;
  comment_text: string;
  created_at: string;
  created_at_i?: number;
  num_comments?: string | null;
  objectID: string;
  parent_id?: number;
  points?: number | null;
  story_id?: number;
  story_text?: string | null;
  story_title?: string;
  story_url?: string;
  title?: string | null;
  url?: string | null;
}
export interface NewsDataType {
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Hits[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  query: string;
}
