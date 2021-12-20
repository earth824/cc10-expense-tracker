import { useState } from 'react';
import TransactionForm from './TransactionFrom';

function TransactionAction(props) {
  const { addTransaction } = props;
  const [isShowForm, setIsShowForm] = useState(false);

  const closeForm = () => {
    setIsShowForm(false);
  };

  return (
    <>
      <div className="d-grid mt-3">
        <button
          className="btn btn-outline-warning"
          onClick={() => setIsShowForm(prev => !prev)}
        >
          {isShowForm ? 'Cancel' : 'Create Transaction'}
        </button>
      </div>
      {isShowForm && (
        <TransactionForm
          addTransaction={addTransaction}
          closeForm={closeForm}
        />
      )}
    </>
  );
}

export default TransactionAction;
