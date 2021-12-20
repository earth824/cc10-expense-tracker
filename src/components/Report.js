import ReportCard from './ReportCard';

function Report() {
  return (
    <div className="row g-3 mt-2">
      <ReportCard bg="info" title="Net Worth" value="10000" />
      <ReportCard bg="success" title="Income" value="15000" />
      <ReportCard bg="danger" title="Expense" value="5000" />
    </div>
  );
}

export default Report;
