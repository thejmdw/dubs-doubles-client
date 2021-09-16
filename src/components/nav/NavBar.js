import React, { useContext, useEffect} from "react"
import { Link, useHistory } from "react-router-dom"
import { CartContext } from "../cart/CartProvider"
import "./NavBar.css"
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const NavBar = (props) => {
    const { cart, getCart } = useContext(CartContext)

    useEffect(() => {
        getCart()
    }, [])

    const history = useHistory()
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
                                history.push("/")
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
