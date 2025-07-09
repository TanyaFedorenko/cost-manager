import "./CostItem.css";
import CostDate from "../CostDate/CostDate";
import { Card } from "../UI/Card";
import React, { useState } from "react";

type CostItemProps = {
  date: Date;
  description: string;
  amount: number;
};

export const CostItem = ({ date, description, amount }: CostItemProps) => {
  const [desc, setDesc] = useState<string>(description);

  const ChangeDescriptionHandler = () => {
    setDesc("new");
  };
  return (
    <Card className="cost-item">
      <CostDate date={date}></CostDate>
      <div className="cost-item__description">
        <h2>{desc}</h2>
        <div className="cost-item__price">${amount}</div>
      </div>
      <button onClick={ChangeDescriptionHandler}>Изменить</button>
    </Card>
  );
};
