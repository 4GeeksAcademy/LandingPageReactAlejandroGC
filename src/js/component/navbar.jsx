import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fw-bold">
            <div className="container">
                <a className="navbar-brand col-8 text-white" href="#">Start Bootstrap</a>
                <button className="navbar-toggler text-warning text-opacity-25 border border-white border-opacity-25" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-4">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar;