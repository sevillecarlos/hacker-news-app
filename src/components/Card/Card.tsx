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
  action,
}: CardProps): JSX.Element => {
  return (
    <div className="card" key={key}>
      <CardHeader header={title} />
      <CardBody body={content} />
      <CardIcon setAction={setAction} action={action} />
    </div>
  );
};

const CardHeader = ({ header }: CardHeaderProps): JSX.Element => (
  <h6>{header}</h6>
);

const CardBody = ({ body }: CardBodyProps): JSX.Element => <span>{body}</span>;

const CardIcon = ({ action, setAction }: CardIconProps): JSX.Element => (
  <div onClick={setAction}>
    <img
      src={action ? LikeIcon : DislikeIcon}
      alt="save icon"
      className="save-icon"
    />
  </div>
);

export interface CardProps {
  key: string;
  title: string;
  content: string;
  action: boolean;
  setAction: Dispatch<SetStateAction<any>>;
}
interface CardHeaderProps {
  header: string;
}

interface CardBodyProps {
  body: string;
}

interface CardIconProps {
  action: any;
  setAction: any;
}
