import TransactionForm from './TransactionFrom';

function TransactionAction(props) {
  const {
    addTransaction,
    isShowForm,
    toggleForm,
    editingTransaction,
    updateTransaction
  } = props;

  return (
    <>
      <div className="d-grid mt-3">
        <button className="btn btn-outline-warning" onClick={toggleForm}>
          {isShowForm ? 'Cancel' : 'Create Transaction'}
        </button>
      </div>
      {isShowForm && (
        <TransactionForm
          addTransaction={addTransaction}
          editingTransaction={editingTransaction}
          updateTransaction={updateTransaction}
        />
      )}
    </>
  );
}

export default TransactionAction;
