import TransactionForm from './TransactionFrom';

function TransactionAction() {
  return (
    <>
      <div className="d-grid mt-3">
        <button className="btn btn-outline-warning">Create Transaction</button>
      </div>
      <TransactionForm />
    </>
  );
}

export default TransactionAction;
