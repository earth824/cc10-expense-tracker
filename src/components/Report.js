import ReportCard from './ReportCard';

function Report(props) {
  const { transactions } = props;
  const [income, expense] = transactions.reduce(
    (prev, item) => {
      if (item.category.type === 'EXPENSE') {
        prev[1] += item.amount;
      } else {
        prev[0] += item.amount;
      }
      return prev;
    },
    [0, 0]
  );
  return (
    <div className="row g-3 mt-2">
      <ReportCard bg="info" title="Net Worth" value={income - expense} />
      <ReportCard bg="success" title="Income" value={income} />
      <ReportCard bg="danger" title="Expense" value={expense} />
    </div>
  );
}

export default Report;
