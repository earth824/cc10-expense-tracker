import axios from 'axios';
import { useEffect, useState } from 'react';
import TransactionAction from './components/TransactionAction';
import TransactionContent from './components/TransactionContent';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/transactions').then(res => {
      console.log(res.data);
      setTransactions(res.data.transactions);
    });
  }, []);

  const addTransaction = obj => {
    axios.post('http://localhost:8080/transactions', obj).then(res => {
      const newTransactions = [...transactions];
      newTransactions.unshift(res.data.transaction);
      newTransactions.sort((a, b) => (a.date < b.date ? 1 : -1));
      setTransactions(newTransactions);
    });
  };

  const deleteTransaction = id => {
    axios.delete('http://localhost:8080/transactions/' + id).then(() => {
      const idx = transactions.findIndex(item => item.id === id);
      if (idx !== -1) {
        const newTransactions = [...transactions];
        newTransactions.splice(idx, 1);
        setTransactions(newTransactions);
      }
    });
  };

  const selectTransaction = transaction => {
    setEditingTransaction(transaction);
  };

  return (
    <div className="container mw-md">
      <TransactionAction
        addTransaction={addTransaction}
        editingTransaction={editingTransaction}
      />
      <TransactionContent
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        selectTransaction={selectTransaction}
      />
      <footer className="text-white-50 text-center py-3 fs-7">
        Copyright © 2021 Flyinggiraffe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
