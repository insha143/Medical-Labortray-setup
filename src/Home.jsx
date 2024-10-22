import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'; // AOS
import './App.css'; // Custom CSS
import { Link } from 'react-router-dom';

const Home = () => {
    React.useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (
        
        <div className="container-fluid">
            {/* <Header /> */}
            <div className="content">
                <h1 className="mt-4 text-center "><strong>Admin Dashboard</strong></h1>
                <div className="row">
                    {/* Lab Records Card */}
                    <div className="col-md-3 mb-4" data-aos="fade-up">
                        <div className="card text-center  text-white" style={{ backgroundColor: 'rgba(40, 167, 69, 0.3)' }}>
                            <div className="card-body">
                                <i className="bi bi-file-earmark-text card-icon"></i>
                                <h5 className="card-title">Lab Records</h5>
                                <Link to="/Labrec" className="btn btn-light w-100">Go</Link>
                            </div>
                        </div>
                    </div>

                    {/* X-ray Card */}
                    <div className="col-md-3 mb-4" data-aos="fade-up">
                        <div className="card text-center  text-white" style={{ backgroundColor: 'rgba(40, 16, 69, 0.3)' }}>
                            <div className="card-body">
                                <i className="bi bi-file-earmark-medical card-icon"></i>
                                <h5 className="card-title">X-ray</h5>
                                <Link to="/xray" className="btn btn-light w-100">Go</Link>
                            </div>
                        </div>
                    </div>

                    {/* Ultrasound Card */}
                    <div className="col-md-3 mb-4" data-aos="fade-up">
                        <div className="card text-center  text-white" style={{ backgroundColor: 'rgba(20, 60, 69, 0.3)' }}>
                            <div className="card-body">
                                <i className="bi bi-file-earmark-medical card-icon"></i>
                                <h5 className="card-title">Ultrasound</h5>
                                <a href="/ultraso" className="btn btn-light w-100">Go</a>
                            </div>
                        </div>
                    </div>

                    {/* Invoicing Card */}
                    <div className="col-md-3 mb-4" data-aos="fade-up">
                        <div className="card text-center  text-white" style={{ backgroundColor: 'rgba(255, 0, 0, 0.3)' }}>
                            <div className="card-body">
                                <i className="bi bi-file-earmark-spreadsheet card-icon"></i>
                                <h5 className="card-title">Invoicing</h5>
                                <a href="/invoicing" className="btn btn-light w-100">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4" data-aos="fade-up">
                        <div className="card text-center  text-white" style={{ backgroundColor: 'rgba(0, 0, 255, 0.3)' }}>
                            <div className="card-body">
                                <i className="bi bi-file-earmark-spreadsheet card-icon"></i>
                                <h5 className="card-title">Dr Kamran Patients</h5>
                                <a href="/kami" className="btn btn-light w-100">Go</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

// const Header = () => (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <a className="navbar-brand" href="#">Admin Panel</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Logout</a>
//                 </li>
//             </ul>
//         </div>
//     </nav>
    
// );

export default Home;
