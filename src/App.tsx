import { CostItem } from "./components/CostItem";

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
  return (
    <>
      <h1>Start learning React</h1>
      <CostItem date = {COSTS[0].date} description ={COSTS[0].description} amount ={COSTS[0].amount} />
      <CostItem date = {COSTS[1].date} description ={COSTS[1].description} amount ={COSTS[1].amount} />
      <CostItem date = {COSTS[2].date} description ={COSTS[2].description} amount ={COSTS[2].amount} />
    </>
  );
}

export default App;
