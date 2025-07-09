import "./CostForm.css";
import React, {useState} from "react";

export const CostForm = () => {

  const [name, setName] = useState<string>('');
    const getInputValue = (event:React.ChangeEvent<HTMLInputElement>)=>{
         setName(event.target.value)
    }
    const [sum, setSum] = useState<string>('');
    const getInputValueSum = (event:React.ChangeEvent<HTMLInputElement>)=>{
         setSum(event.target.value)
    }
    const [date, setDate] = useState<string>('');
    const getInputValueDate = (event:React.ChangeEvent<HTMLInputElement>)=>{
         setDate(event.target.value)
    }


  return (
    <div>
      <form action="" className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="">Name</label>
          <input type="text"  onChange={getInputValue}/>
        </div>
        <div className="new-cost__control">
          <label htmlFor="">Sum</label>
          <input type="number" min="0.01" step="0.01" onChange={getInputValueSum}/>
        </div>
        <div className="new-cost__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31" onChange={getInputValue} />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
