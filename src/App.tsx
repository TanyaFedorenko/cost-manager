import { Cost } from "./components/Cost/Cost";
import { NewCost } from "./components/NewCost/NewCost";
import type { UserInput } from "./components/NewCost/UserInput";
import { useState } from "react";

function App() {
  // type Cost = {
  //   id: string;
  //   date: Date;
  //   description: string;
  //   amount: string|number;
  // };
  const COSTS = [
    {
      id: "c1",
      date: new Date(2020, 2, 12),
      description: "Холодильник",
      amount: "999.9",
    },
    {
      id: "c2",
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: "1254.72",
    },
    {
      id: "c3",
      date: new Date(2021, 3, 1),
      description: "Джинсы",
      amount: "49.9",
    },
  ];
  const [costs, setCosts] = useState<UserInput[]>(COSTS);
  const addCostHandler = (cost: UserInput) => {

    const newCost: UserInput = {
      ...cost,
   
    };
  
    setCosts((prevCosts) => [newCost, ...prevCosts]);
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler}></NewCost>

      <Cost costs={costs}></Cost>
    </div>
  );
}

export default App;
