function TransactionForm() {
  return (
    <div className="border bg-white rounded-2 p-3 mt-3">
      <form className="row g-3">
        <div className="col-12">
          <input
            type="radio"
            className="btn-check"
            id="cbx-expense"
            name="type"
            defaultChecked
          />
          <label
            className="btn btn-outline-danger rounded-0 rounded-start"
            htmlFor="cbx-expense"
          >
            Expense
          </label>
          <input
            type="radio"
            className="btn-check"
            id="cbx-income"
            name="type"
          />
          <label
            className="btn btn-outline-success rounded-0 rounded-end"
            htmlFor="cbx-income"
          >
            Income
          </label>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Payee</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-sm-6">
          <label className="form-label">Category</label>
          <select className="form-select">
            <option>Food</option>
            <option>Shopping</option>
            <option>Transport</option>
            <option>Utilities</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Amount</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-sm-6">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-12">
          <label className="form-label">Comment</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <div className="col-12">
          <div className="d-grid mt-3">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
