import "./Card.style.css";

export const Card = ({ title, content }: CardProps): JSX.Element => {
  return (
    <div className="card">
      <CardHeader header={title} />
      <CardBody body={content} />
    </div>
  );
};

const CardHeader = ({ header }: CardHeaderProps): JSX.Element => (
  <span>{header}</span>
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
