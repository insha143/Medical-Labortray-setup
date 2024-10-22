import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddXrayRec = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [number, setNumber] = useState('');
    const [refby, setRefby] = useState('');
    const [gender, setGender] = useState('');
    const [report, setReport] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { name, age, number, refby, gender, report };

        await fetch('http://localhost:8088/xray', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Reset form fields after submission
        setName('');
        setAge('');
        setNumber('');
        setRefby('');
        setGender('');
        setReport('');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add X-Ray Record</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type='text' 
                        className="form-control" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input 
                        type='number' 
                        className="form-control" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <input 
                        type='text' 
                        className="form-control" 
                        value={gender} 
                        onChange={(e) => setGender(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Number:</label>
                    <input 
                        type='text' 
                        className="form-control" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Referred by:</label>
                    <input 
                        type='text' 
                        className="form-control" 
                        value={refby} 
                        onChange={(e) => setRefby(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Report:</label>
                    <input 
                        type='text' 
                        className="form-control" 
                        value={report} 
                        onChange={(e) => setReport(e.target.value)} 
                    />
                </div>
                <button type='submit' className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    );
};

export default AddXrayRec;
