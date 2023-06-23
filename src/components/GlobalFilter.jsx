
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
    return (
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        />
      </div>
    );
  };
export default GlobalFilter;
