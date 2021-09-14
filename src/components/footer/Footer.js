import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = (props) => {
    return (
        <button className="nav-link fakeLink"
                            onClick={() => {
                                // localStorage.removeItem("dd_token")
                                props.history.goBack()
                            }}
                        >Go Back</button>
    )
}