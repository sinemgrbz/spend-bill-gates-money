import './budget.css'

export default function Budget ({myBudget}) {
    return (
        <>
        <div className="budget">
        ${myBudget.toLocaleString('en-US')}
        </div>
        </>
    )
};