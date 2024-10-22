import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Updatexrayrec() {
  const { id } = useParams();
  const [record, setRecord] = useState({
    name: '',
    age: '',
    refby: '',
    gender: '',
    // testtype: '',
    number: '',
    report: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await fetch(`http://localhost:8088/lab/${id}`);
        const data = await response.json();
        setRecord(data);
      } catch (error) {
        console.error('Error fetching record:', error);
      }
    };

    fetchRecord();
  }, [id]);

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8088/xray/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      });
      navigate('/xray'); 
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Update Lab Record</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(record).map((key) => (
          <div className="mb-3" key={key}>
            <label htmlFor={key} className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type="text"
              className="form-control"
              id={key}
              name={key}
              value={record[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Update Record</button>
      </form>
    </div>
  );
}

export default Updatexrayrec;
