

import "./CostItem.css";

type CostItemProps = {
  date: Date;
  description: string;
  amount: number;
};


export const CostItem = ({ date, description, amount }: CostItemProps) => {
    const month = date.toLocaleDateString('ru-RU', {month: "long"} );
    const year = date.getFullYear();
    const day = date.toLocaleDateString('ru-RU', {day: "2-digit"} );
  return (
    <div className="cost-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${amount}</div>
      </div>
    </div>
  );
};
