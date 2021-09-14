import React, { useContext, useEffect, useState } from "react"
import { FriesContext } from "./FriesProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./Fries.css"

export const FriesDetail = () => {
    const history = useHistory()
    const { fry, getFryById } = useContext(FriesContext)
    // const { events, getEvents } = useContext(EventContext)
    const { friesId } = useParams()

    // const { Fries, setFries } = useState({})
    

    useEffect(() => {
        getFryById(parseInt(friesId))
        // .then(data => setFries(data))
        // getEvents()
    }, [])

    return (
        <>
        <article className="friess">
        <header className="events__header">
                <h1>{fry.name}</h1>
            </header>
                        <div className="fries__pic">Pic placeholder</div>
                        <div className="fries__description">{fry.description}</div>
                        <div className="fries__price">${fry.price}</div>
                        <div className="fries__edit">
                        <button className="btn btn-3">Add to Cart</button>
                        </div>
                
            
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Friess/new")
        }}
        >Register New Fries</button> */}
</>
    )
}