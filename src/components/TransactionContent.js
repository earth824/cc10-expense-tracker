import { useState } from 'react';
import FilterBar from './FilterBar';
import Pagination from './Pagination';
import Report from './Report';
import TransactionList from './TransactionList';

function TransactionContent(props) {
  const { transactions, deleteTransaction, selectTransaction } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMonth, setSearchMonth] = useState('');
  const [searchYear, setSearchYear] = useState('');
  const [pageLimit, setPageLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeSearchTerm = value => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const onChangeSearchMonth = value => {
    setSearchMonth(value);
    setCurrentPage(1);
  };

  const onChangeSearchYear = value => {
    setSearchYear(value);
    setCurrentPage(1);
  };

  const onChangePageLimit = value => {
    setPageLimit(value);
  };

  const onChangeCurrentPage = value => {
    setCurrentPage(value);
  };

  const filteredTransactions =
    searchTerm === '' && searchMonth === '' && searchYear === ''
      ? transactions
      : transactions.filter(
          item =>
            (item.payee.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.category.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              item.category.type
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) &&
            (new Date(item.date).getMonth() === searchMonth ||
              searchMonth === '') &&
            (new Date(item.date).getFullYear() === searchYear ||
              searchYear === '')
        );

  // ['a', 'v', 'c', 'f', 'g', 'k'] // currentPage: 1 ,show 1 => 5 (0 => 5); curretnPage: 2, show 6 => (5, 10)
  const shownTransactions = filteredTransactions.slice(
    (currentPage - 1) * pageLimit,
    currentPage * pageLimit
  );

  return (
    <>
      <Report transactions={filteredTransactions} />
      <FilterBar
        searchTerm={searchTerm}
        searchMonth={searchMonth}
        searchYear={searchYear}
        onChangeSearchTerm={onChangeSearchTerm}
        onChangeSearchMonth={onChangeSearchMonth}
        onChangeSearchYear={onChangeSearchYear}
      />
      <Pagination
        numTransaction={filteredTransactions.length}
        pageLimit={pageLimit}
        currentPage={currentPage}
        onChangePageLimit={onChangePageLimit}
        onChangeCurrentPage={onChangeCurrentPage}
      />
      <TransactionList
        transactions={shownTransactions}
        deleteTransaction={deleteTransaction}
        selectTransaction={selectTransaction}
      />
    </>
  );
}

export default TransactionContent;
