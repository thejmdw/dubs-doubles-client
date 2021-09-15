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
                <Link className="nav-link" to="/burgers">Burgers</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/fries">Fries</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/combos">Combos</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__item" to="/cart">Cart</Link>
            </li>
            {
                (localStorage.getItem("dd_token") !== null) ?
                    
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("dd_token")
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
