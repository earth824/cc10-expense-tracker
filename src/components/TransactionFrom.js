import axios from 'axios';
import validator from 'validator';
import { useState, useEffect } from 'react';

function TransactionForm(props) {
  const { addTransaction, editingTransaction, updateTransaction } = props;
  const [input, setInput] = useState({
    type: 'EXPENSE',
    payee: '',
    categoryId: '',
    amount: '',
    date: '',
    comment: ''
  });

  const [error, setError] = useState({});
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/categories').then(res => {
      const newExpenses = res.data.categories.filter(
        item => item.type === 'EXPENSE'
      );
      setExpenses(newExpenses);
      setIncomes(res.data.categories.filter(item => item.type === 'INCOME'));
      if (!editingTransaction) {
        setInput(prev => ({ ...prev, categoryId: newExpenses[0].id }));
      }
    });
  }, []);

  useEffect(() => {
    if (editingTransaction) {
      setInput({
        type: editingTransaction.category.type,
        payee: editingTransaction.payee,
        categoryId: editingTransaction.category.id,
        amount: editingTransaction.amount,
        date: editingTransaction.date.slice(0, 10),
        comment: editingTransaction.comment
      });
    }
  }, [editingTransaction]);

  const options =
    input.type === 'EXPENSE'
      ? expenses.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))
      : incomes.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ));

  const handleChangeInput = e => {
    const value = e.target.name === 'amount' ? +e.target.value : e.target.value;
    setInput(prev => ({ ...prev, [e.target.name]: value }));

    if (e.target.name === 'type') {
      setInput(prev => ({
        ...prev,
        categoryId:
          e.target.value === 'EXPENSE' ? expenses[0].id : incomes[0].id
      }));
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (validator.isEmpty(input.payee)) {
      setError(prev => ({ ...prev, payee: 'Payee is required.' }));
    } else {
      setError(prev => ({ ...prev, payee: '' }));
    }

    if (validator.isEmpty(input.amount + '')) {
      setError(prev => ({ ...prev, amount: 'Amount is required.' }));
    } else if (!validator.isDecimal(input.amount + '') || input.amount <= 0) {
      setError(prev => ({
        ...prev,
        amount: 'Amount must be numeric and greater than zero.'
      }));
    } else {
      setError(prev => ({
        ...prev,
        amount: ''
      }));
    }

    if (validator.isEmpty(input.date)) {
      setError(prev => ({ ...prev, date: 'Date is required.' }));
    } else {
      setError(prev => ({ ...prev, date: '' }));
    }

    if (editingTransaction) {
      updateTransaction(editingTransaction.id, input);
    } else {
      addTransaction(input);
    }
  };

  return (
    <div className="border bg-white rounded-2 p-3 mt-3">
      <form className="row g-3" onSubmit={handleSubmitForm}>
        <div className="col-12">
          <input
            type="radio"
            className="btn-check"
            id="cbx-expense"
            name="type"
            checked={input.type === 'EXPENSE'}
            value="EXPENSE"
            onChange={handleChangeInput}
          />
          <label
            className="btn btn-outline-danger rounded-0 rounded-start"
            htmlFor="cbx-expense"
          >
            Expense
          </label>
          <input
            type="radio"
            className="btn-check"
            id="cbx-income"
            name="type"
            checked={input.type === 'INCOME'}
            value="INCOME"
            onChange={handleChangeInput}
          />
          <label
            className="btn btn-outline-success rounded-0 rounded-end"
            htmlFor="cbx-income"
          >
            Income
          </label>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Payee</label>
          <input
            type="text"
            className={`form-control ${error.payee ? 'is-invalid' : ''}`}
            name="payee"
            value={input.payee}
            onChange={handleChangeInput}
          />
          <div className="invalid-feedback">{error.payee}</div>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            name="categoryId"
            value={input.categoryId}
            onChange={handleChangeInput}
          >
            {options}
          </select>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Amount</label>
          <input
            type="text"
            className={`form-control ${error.amount ? 'is-invalid' : ''}`}
            name="amount"
            value={input.amount}
            onChange={handleChangeInput}
          />
          <div className="invalid-feedback">{error.amount}</div>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            className={`form-control ${error.amount ? 'is-invalid' : ''}`}
            name="date"
            value={input.date}
            onChange={handleChangeInput}
          />
          <div className="invalid-feedback">{error.date}</div>
        </div>
        <div className="col-12">
          <label className="form-label">Comment</label>
          <textarea
            className="form-control"
            rows="3"
            name="comment"
            value={input.comment}
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <div className="col-12">
          <div className="d-grid mt-3">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
