import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.round((Math.random()*100)).toString()
        }
        props.onAddNewExpense(expenseData)
        setIsEditing(false)
    }
    const editStartHandler = () => setIsEditing(true)
    const editStoptHandler = () => setIsEditing(false)

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={editStartHandler}>Add Expense Data</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={editStoptHandler}/>}
        </div>
    )
}

export default NewExpense