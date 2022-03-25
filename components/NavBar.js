import React from 'react'
import { NavLink } from 'react-router-dom'

export default function () {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/canditates">Canditates</NavLink>
                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>

                    </div>
                </div>
            </div>
        </nav>
    )
}
