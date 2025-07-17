import "./Costs.css";
import { CostItem } from "../CostItem/CostItem";
import { Card } from "../UI/Card";
import type { CostType } from "../NewCost/UserInput";

type CostListProps = {
  costs: CostType[];
};

export const Cost = (props: CostListProps) => {
  return (
    <Card className="costs">
      {props.costs.map((item: CostType) => (
        <CostItem
          key={item.id}
          id={item.id}
          date={item.date}
          description={item.description}
          amount={item.amount}
        />
      ))}
    </Card>
  );
};
