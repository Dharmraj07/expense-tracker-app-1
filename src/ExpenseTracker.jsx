import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expense, setExpense] = useState({ name: '', price: '', date: '' });
  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (expense.name && expense.price && expense.date) {
      setExpenses([...expenses, expense]);
      setExpense({ name: '', price: '', date: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleSetTo100 = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].price = '100';
    setExpenses(updatedExpenses);
  };

  const calculateTotal = () => {
    const total = expenses.reduce((acc, exp) => acc + parseFloat(exp.price), 0);
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type='name' name='name' value={expense.name} onChange={handleChange} />

        </div>
        <br/>
        <div>
          <label>Price:</label>
          <input type='number' name='price' value={expense.price} onChange={handleChange} />

        </div>
        <br/>
        <div>
          <label>Name:</label>
          <input type='date' name='date' value={expense.date} onChange={handleChange} />
        </div>
        <br/>
        <button type='submit'>Add Expense</button>
      </form>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.name} - ${exp.price} - {exp.date}
            <button onClick={() => deleteExpense(index)}>Delete</button>
            <button onClick={() => handleSetTo100(index)}>Set to $100</button>
          </li>
        ))}
      </ul>
      <p>Total Expenses: ${calculateTotal()}</p>
    </div>
  );
};

export default ExpenseTracker;
