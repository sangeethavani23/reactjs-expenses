import React, {useState} from 'react';
import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from './ExpensesList';
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseChart from './ExpenseChart';

function Expenses(props) {

    const [filteredYear,setYear] = useState('2022')
    const selectFilter = (year) => {
        setYear(year)
    }
    const filteredExpense = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onSelectFilter={selectFilter}/>
            <ExpenseChart items={filteredExpense}/>
            <ExpensesList items={filteredExpense} />
        </Card>
    )
}

export default Expenses