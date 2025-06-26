import "./CostDate.css";

function CostDate(props: { date: Date }){
    const date = props.date;
    const month = date.toLocaleDateString('ru-RU', { month: "long" });
    const year = date.getFullYear();
    const day = date.toLocaleDateString('ru-RU', { day: "2-digit" });
    return (
        <div className="cost-date">
            <div className="cost-date__month">{month}</div>
            <div className="cost-date__year">{year}</div>
            <div className="cost-date__day">{day}</div>
        </div>
    )
}
export default CostDate;
