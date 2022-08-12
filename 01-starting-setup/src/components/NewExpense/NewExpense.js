import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [addButton, setAddButton] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setAddButton(false);
    };

    const addButtonHandler = () => {
        setAddButton((prev) => !prev)
    }

    return (
        <div className="new-expense">
            {addButton ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClick={addButtonHandler} />
            ) : (
                <button onClick={addButtonHandler}>Add Expense Button</button>
            )}

        </div>
    )
};

export default NewExpense;