import "./NewCost.css";
import { CostForm } from "./CostForm/CostForm";
import type { UserInput } from "./UserInput";
type NewCostProps = {
  onAddCost: (post: UserInput) => void;
};
export const NewCost = ({ onAddCost}: NewCostProps) => {
  const saveCostDateHandler = (inputConstDate: UserInput) => {

    const costDate = {
      ...inputConstDate,

    };

     onAddCost(costDate);

  };

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDateHandler}></CostForm>;
    </div>
  );
};
