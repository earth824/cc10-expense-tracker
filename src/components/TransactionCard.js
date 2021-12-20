import { formatShortMonthShortYear } from '../services/dateService';
import { formatThaiCurrency } from '../services/currencyService';

function TransactionCard(props) {
  const {
    transaction: {
      amount,
      category: { name, type },
      payee,
      id,
      comment,
      date
    },
    deleteTransaction,
    selectTransaction
  } = props;
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-${
        type === 'EXPENSE' ? 'danger' : 'success'
      }`}
    >
      <div
        className="transaction-detail d-flex flex-fill me-4"
        onClick={() => selectTransaction(props.transaction)}
      >
        <div className="transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center">
          <p className="p-0 m-0 fs-7 text-black-50">
            {formatShortMonthShortYear(new Date(date))}
          </p>
          <p className="p-0 m-0">{new Date(date).getDate()}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-fill ps-4">
          <div>
            <p className="mb-1 f-5 fw-bold">{payee}</p>
            <p className="mb-0 text-black-50 fs-7">{name}</p>
          </div>
          <span
            className={`badge bg-${type === 'EXPENSE' ? 'danger' : 'success'}`}
          >
            {formatThaiCurrency(amount)}
          </span>
        </div>
      </div>
      <button
        className="btn btn-link text-secondary p-0 border-0"
        onClick={() => deleteTransaction(id)}
      >
        <i className="bi-x-circle" />
      </button>
    </li>
  );
}

export default TransactionCard;
