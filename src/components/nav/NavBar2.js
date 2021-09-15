import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar2 = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/salesreports">Sales Reports</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/products">Products</Link>
            </li>
            {
                (localStorage.getItem("dd_token") !== null) ?
                    
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("dd_token")
                                localStorage.removeItem("is_staff")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
