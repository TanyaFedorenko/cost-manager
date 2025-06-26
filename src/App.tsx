
import {Cost} from "./components/Cost/Cost";

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
      <Cost costs = {COSTS}></Cost>

    </>
  );
}

export default App;
