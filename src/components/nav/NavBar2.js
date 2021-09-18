import React, { useContext, useEffect} from "react"
import { Link, useHistory } from "react-router-dom"
import { CartContext } from "../cart/CartProvider"
import "./NavBar.css"
import { AppMenu } from "./AppMenu"
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar2 = (props) => {
    const { cart, getCart } = useContext(CartContext)

    useEffect(() => {
        getCart()
    }, [])

    const history = useHistory()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    
                </Typography>
                { cart.lineitems?.length > 0 ? <Link className="navbar__link" to="/cart">
                    <IconButton className="navbarButtons navbar_end">
                        <Badge badgeContent={cart.lineitems?.length} color="secondary">
                            <ShoppingBagIcon fontSize="large" />
                        </Badge>
                    </IconButton>
                 </Link> : ""}
                {/* <Button color="inherit" onClick={() => {
                                localStorage.removeItem("dd_token")
                                history.push("/")
                            }}>Logout</Button> */}
                <AppMenu />
                </Toolbar>
            </AppBar>
        </Box>
        )
    }
        // <ul className="navbar">
        //     <li className="navbar__item">
        //         <Link className="nav-link" to="/">Home</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="nav-link" to="/burgers">Burgers</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="nav-link" to="/fries">Fries</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="nav-link" to="/combos">Combos</Link>
        //     </li>
        //     {/* <li className="navbar__item">
        //         <Link className="navbar__item" to="/cart">Cart</Link>
        //     </li> */}
        //     <Link className="navbar__link" to="/cart">
        //         <IconButton className="navbarButtons navbar_end">
        //             <Badge badgeContent={cart.lineitems?.length} color="secondary">
        //                 <ShoppingBagIcon fontSize="large" />
        //             </Badge>
        //         </IconButton>
        //     </Link>
        //     {
        //         (localStorage.getItem("dd_token") !== null) ?
                    
        //                 <button className="nav-link fakeLink"
        //                     onClick={() => {
        //                         localStorage.removeItem("dd_token")
        //                         history.push("/")
        //                     }}
        //                 >Logout</button>
        //             :
        //             <>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/login">Login</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/register">Register</Link>
        //                 </li>
        //             </>
        //     }        </ul>
