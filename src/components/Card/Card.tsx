import "./Card.style.css";
import LikeIcon from '../../assets/img/save-news-icons/like-news.png'
import DislikeIcon from '../../assets/img/save-news-icons/dislike-news.png'

export const Card = ({ title, content }: CardProps): JSX.Element => {
  return (
    <div className="card">
      <CardHeader header={title} />
      <CardBody body={content} />
      <img src={LikeIcon} alt="save icon" className="save-icon"/>
    </div>
  );
};

const CardHeader = ({ header }: CardHeaderProps): JSX.Element => (
  <h6>{header}</h6>
);

const CardBody = ({ body }: CardBodyProps): JSX.Element => <span>{body}</span>;

export interface CardProps {
  title: string;
  content: string;
}
interface CardHeaderProps {
  header: string;
}

interface CardBodyProps {
  body: string;
}
