import "./CostForm.css";
import React, { useState } from "react";
import type { UserInput } from "../UserInput";

type CostFormProps = {
  onSaveCostData: (inputData: UserInput) => void;
};

export const CostForm = ({ onSaveCostData }: CostFormProps) => {
  // const [name, setName] = useState<string>("");
  // const [amount, setAmount] = useState<string>("");
  // const [date, setDate] = useState<string>("");

  const [userInput, setUserInput] = useState<UserInput>({
    description: "",
    amount: "",
    date: new Date(),
    id: "",
  });

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: event.target.value,
    // });
    setUserInput((previousState: UserInput) => {
      return {
        ...previousState,
        description: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((previousState: UserInput) => {
      return {
        ...previousState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((previousValue) => {
      return {
        ...previousValue,
        date: new Date(event.target.value),
      };
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { date } = userInput;
    const costDate: UserInput = {
      ...userInput,
      date: new Date(date),
      id: Math.random().toString(),
    };
    onSaveCostData(costDate);

    setUserInput(() => {
      return {
        description: "",
        amount: "",
        date: new Date(),
        id: "",
      };
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} action="" className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="">Name</label>
          <input
            value={userInput.description}
            type="text"
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="">Sum</label>
          <input
            value={userInput.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="">Date</label>
          <input
            value={userInput.date.toISOString().split("T")[0]}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
