import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'TV',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Speaker',
    amount: 450,
    date: new Date(2022, 5, 12),
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => [expense, ...prevExpenses])
  }

  return (
    <div>
      <NewExpense items={expenses} onAddNewExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;