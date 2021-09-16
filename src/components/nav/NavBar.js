import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../cart/CartProvider.js"
import "./NavBar.css"
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const NavBar = (props) => {
    const { cart, getCart } = useContext(CartContext)

    useEffect(() => {
        getCart()
    }, [])

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
            {/* <li className="navbar__item">
                <Link className="navbar__item" to="/cart">Cart</Link>
            </li> */}
            <Link className="navbar__link" to="/cart">
                <IconButton className="navbarButtons navbar_end">
                    <Badge badgeContent={cart.lineitems?.length} color="secondary">
                        <ShoppingBagIcon fontSize="large" />
                    </Badge>
                </IconButton>
            </Link>
            {
                (localStorage.getItem("dd_token") !== null) ?
                    
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("dd_token")
                                props.history?.push({ pathname: "/" })
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
