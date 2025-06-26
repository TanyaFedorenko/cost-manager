import "./Costs.css";
import { CostItem } from "./CostItem";
import {Card} from '../UI/Card';
type Cost = {
  id: string;
  date: Date;
  description: string;
  amount: number;
};
type CostListProps = {
  costs: Cost[];
};

export const Cost = ({ costs }: CostListProps) => {
  return (
    <Card className="costs">
      {costs.map((item: Cost) => (
        <CostItem
          key={item.id}
          date={item.date}
          description={item.description}
          amount={item.amount}
        />
      ))}
    </Card>
  );
};
