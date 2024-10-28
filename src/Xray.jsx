import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { Link } from 'react-router-dom'; // No need to import useNavigate if not using
import 'bootstrap-icons/font/bootstrap-icons.css';

function Xray() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        // Change this API endpoint for production
        const response = await fetch('http://localhost:8088/xray');
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  const filteredRecords = records.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.id.toString().includes(searchTerm) 
  );

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await fetch(`http://localhost:8088/xray/${id}`, {
          method: 'DELETE',
        });
        setRecords(records.filter(record => record.id !== id)); 
      } catch (error) {
        console.error('Error deleting record:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/addxrayrec" className='btn btn-success'>Add+</Link>
      <h1 className="text-center mb-4">Xray Records</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name or ID"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Referred By</th>
            <th>Gender</th>
            <th>Number</th>
            <th>Report</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.length > 0 ? (
            filteredRecords.map(record => (
              <tr key={record.id} className="align-middle">
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>{record.refby}</td>
                <td>{record.gender}</td>
                <td>{record.number}</td>
                <td>{record.report}</td>
                <td>
                  <Link 
                    to={`/updatexrayrec/${record.id}`} // Ensure this route exists
                    className='btn btn-success bi bi-pencil me-3'
                  >
                    Update
                  </Link>
                  <button 
                    className='btn btn-danger bi bi-trash' 
                    onClick={() => handleDelete(record.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Xray;
