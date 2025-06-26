import "./CostItem.css";
import CostDate from "./CostDate";
import { Card } from "../UI/Card";

type CostItemProps = {
  date: Date;
  description: string;
  amount: number;
};

export const CostItem = ({ date, description, amount }: CostItemProps) => {
  return (
    <Card className="cost-item">
      <CostDate date={date}></CostDate>
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${amount}</div>
      </div>
    </Card>
  );
};
