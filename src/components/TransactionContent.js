import FilterBar from './FilterBar';
import Pagination from './Pagination';
import Report from './Report';
import TransactionList from './TransactionList';

function TransactionContent(props) {
  const { transactions, deleteTransaction, selectTransaction } = props;
  return (
    <>
      <Report transactions={transactions} />
      <FilterBar />
      <Pagination />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        selectTransaction={selectTransaction}
      />
    </>
  );
}

export default TransactionContent;
