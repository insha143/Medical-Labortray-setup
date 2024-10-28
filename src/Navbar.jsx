import React from 'react';

const Navbr = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Admin Panel</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Logout</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">X-ray</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Lab</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbr;
