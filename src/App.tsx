import { Cost } from "./components/Cost/Cost";
import { NewCost } from "./components/NewCost/NewCost";
import type { UserInput } from "./components/NewCost/UserInput";

function App() {
  const COSTS = [
    {
      id: "c1",
      date: new Date(2020, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      id: "c2",
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.72,
    },
    {
      id: "c3",
      date: new Date(2021, 3, 1),
      description: "Джинсы",
      amount: 49.99,
    },
  ];
  const addCostHandler = (post: UserInput) => {
    console.log(post);
 
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler}></NewCost>

      <Cost costs={COSTS}></Cost>
    </div>
  );
}

export default App;
