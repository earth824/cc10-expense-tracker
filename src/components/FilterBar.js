function FilterBar() {
  return (
    <div className="mt-4">
      <div className="row g-3">
        <div className="col-sm-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter to search"
            />
            <button className="btn btn-sm btn-outline-light">x</button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input-group">
            <select className="form-select form-select-sm">
              <option value="">Month</option>
              <option value="">Jan</option>
              <option value="">Feb</option>
              <option value="">Mar</option>
              <option value="">Apr</option>
              <option value="">May</option>
              <option value="">Jun</option>
              <option value="">Jul</option>
              <option value="">Aug</option>
              <option value="">Sep</option>
              <option value="">Oct</option>
              <option value="">Nov</option>
              <option value="">Dec</option>
            </select>
            <button className="btn btn-sm btn-outline-light">x</button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input-group">
            <select className="form-select form-select-sm">
              <option value="">Year</option>
              <option value="">2021</option>
              <option value="">2020</option>
            </select>
            <button className="btn btn-sm btn-outline-light">x</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
