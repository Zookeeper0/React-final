import React, { useState } from "react";

import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, // +로 숫자로 변경
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        //저장 후 비우기
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onClick}>Cloase</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;