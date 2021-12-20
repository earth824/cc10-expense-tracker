import TransactionCard from './TransactionCard';

function TransactionList() {
  return (
    <ul className="list-group">
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
    </ul>
  );
}

export default TransactionList;
