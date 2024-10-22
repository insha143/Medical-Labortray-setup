import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Addrec = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [testType, setTestType] = useState('');
  const [refby, setRefby] = useState('');
  const [number, setNumber] = useState('');
  const [report, setReport] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { name, age, testType, refby, number, report };

    await fetch('http://localhost:8088/lab', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    setName('');
    setAge('');
    setRefby('');
    setNumber('');
    setTestType('');
    setReport('');

  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Lab Record</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Referred by:</label>
          <input
            type="text"
            className="form-control"
            value={refby}
            onChange={(event) => setRefby(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number:</label>
          <input
            type="number"
            className="form-control"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Test Type:</label>
          <input
            type="text"
            className="form-control"
            value={testType}
            onChange={(event) => setTestType(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Report:</label>
          <input
            type="text"
            className="form-control"
            value={report}
            onChange={(event) => setReport(event.target.value)}
        
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addrec;
