import { Dispatch, SetStateAction } from "react";
import LikeIcon from "../../assets/img/save-news-icons/like-news.png";
import DislikeIcon from "../../assets/img/save-news-icons/dislike-news.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { dateToHourConverter } from "../../helpers/DateToHourConverter";
import "../Style/grid.css";
import "./Card.style.css";

export const Card = ({
  key,
  title,
  createdAt,
  content,
  url,
  setAction,
  action,
}: CardProps): JSX.Element => {
  return (
    <div className="card" key={key}>
      <div className="row">
        <a href={url} target="_blank" className="link-card">
          <CardHeader header={title} createdTime={createdAt} />
          <CardBody body={content} />
        </a>
      </div>

      <CardIcon setAction={setAction} action={action} />
    </div>
  );
};

const CardHeader = ({ header, createdTime }: CardHeaderProps): JSX.Element => (
  <h6 className="card-header">
    <AiOutlineClockCircle /> {dateToHourConverter(createdTime)} hours ago by{" "}
    {header}
  </h6>
);

const CardBody = ({ body }: CardBodyProps): JSX.Element => (
  <span className="card-body">{body}</span>
);

const CardIcon = ({ action, setAction }: CardIconProps): JSX.Element => (
  <div onClick={setAction} className='icon-container'>
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
  createdAt: string;
  content: string;
  url: string;
  action: boolean;
  setAction: Dispatch<SetStateAction<any>>;
}
interface CardHeaderProps {
  header: string;
  createdTime: string;
}

interface CardBodyProps {
  body: string;
}

interface CardIconProps {
  action: any;
  setAction: any;
}
