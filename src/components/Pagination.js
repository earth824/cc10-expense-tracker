function Pagination() {
  return (
    <div className="mt-3 d-flex justify-content-between">
      <div className="d-flex align-items-center mb-3">
        <div>
          <select type="text" className="form-select form-select-sm">
            <option value="">10</option>
            <option value="">25</option>
            <option value="">50</option>
            <option value="">100</option>
          </select>
        </div>
        <span className="text-white-50 mx-2 fs-7">
          Showing 1 to 10 of 20 transactions
        </span>
      </div>
      <nav>
        <ul className="pagination pagination-sm">
          <li className="page-item disabled">
            <a href="/" className="page-link">
              <span>&laquo;</span>
            </a>
          </li>
          <li className="page-item active">
            <a href="/" className="page-link">
              <span>1</span>
            </a>
          </li>
          <li className="page-item">
            <a href="/" className="page-link">
              <span>2</span>
            </a>
          </li>
          <li className="page-item">
            <a href="/" className="page-link">
              <span>3</span>
            </a>
          </li>
          <li className="page-item">
            <a href="/" className="page-link">
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
