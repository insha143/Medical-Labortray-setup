import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Kami = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8088/kami');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">WELCOME TO DOCTOR KAMRAN</h1>
            <table className="table table-bordered table-striped table-responsive">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Number</th>
                        <th>Referred By</th>
                        <th>Test Type</th>
                        <th>Report</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.number}</td>
                            <td>{item.refby}</td>
                            <td>{item.testtype}</td>
                            <td>{item.report}</td>
                            <td>{item.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Kami;
