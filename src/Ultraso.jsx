import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Ultraso() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch('http://localhost:8088/ultra');
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
        await fetch(`http://localhost:8088/ultra/${id}`, {
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
      <Link to="/addultraso" className='btn btn-success'>Add+</Link>
      <h1 className="text-center mb-4">Ultra-Sound Records</h1>
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
            {/* <th>Test Type</th> */}
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
                {/* <td>{record.testtype}</td> */}
                <td>{record.number}</td>
                <td>{record.report}</td>
                <td>
                <Link 
                    to={`/updateultraso/${record.id}`} // Use ID in the URL
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
              <td colSpan="8" className="text-center">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Ultraso;
