import React from 'react';

const PrintRecord = ({ records }) => {
   
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='body'>
    <div className="container mt-5" >
      <div className="text-center mb-4" >
        <h2>Swat Labortay</h2>
        <p> Gerosha, Batkhela, malakand</p>
        <p>Phone: (+92) 309-7890</p>
        <p>Email: kami@laboratory.com</p>
      </div>

      <h1 className="text-center mb-4">Lab Records</h1>
      
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Referred By</th>
            <th>Gender</th>
            <th>Test Type</th>
            <th>Number</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          {records && records.length > 0 ? (
            records.map(record => (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>{record.refby}</td>
                <td>{record.gender}</td>
                <td>{record.testtype}</td>
                <td>{record.number}</td>
                <td>{record.report}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No records found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handlePrint}>Print</button>
      </div>
    </div>
    </div>
  );
};

export default PrintRecord;
