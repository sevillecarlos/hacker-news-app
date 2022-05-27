import { Dispatch, SetStateAction } from "react";
import LikeIcon from "../../assets/img/save-news-icons/like-news.png";
import DislikeIcon from "../../assets/img/save-news-icons/dislike-news.png";
import "./Card.style.css";
import { Hits } from "../../model/NewsDataType";

export const Card = ({
  key,
  title,
  content,
  setAction,
}: CardProps): JSX.Element => {
  return (
    <div className="card" key={key}>
      <CardHeader header={title} />
      <CardBody body={content} />
      <div onClick={setAction}>
        <img src={LikeIcon} alt="save icon" className="save-icon" />
      </div>
    </div>
  );
};

const CardHeader = ({ header }: CardHeaderProps): JSX.Element => (
  <h6>{header}</h6>
);

const CardBody = ({ body }: CardBodyProps): JSX.Element => <span>{body}</span>;

export interface CardProps {
  key: string;
  title: string;
  content: string;
  setAction: Dispatch<SetStateAction<any>>;
}
interface CardHeaderProps {
  header: string;
}

interface CardBodyProps {
  body: string;
}
