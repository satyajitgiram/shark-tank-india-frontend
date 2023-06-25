const SharkCompaniesTable = ({ sharksDeal }) => {
    return (
      <table className="table table-striped table-bordered w-auto" >
        <thead className="thead-dark">
          <tr>
            <th>No.</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
        {sharksDeal.map((company, index)=>(
            <tr> 
                <td>{index + 1}</td>
                <td>{company}</td>
            </tr>
        ))}
        </tbody>
      </table>
    );
  };
  
  export default SharkCompaniesTable;