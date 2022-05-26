import "./Card.style.css";

export const Card = ({ title, content }: CardProps): JSX.Element => {
  return (
    <div className="card">
      <CardHeader header={title} />
      <CardBody body={content} />
      <div className="like-container"></div>
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
