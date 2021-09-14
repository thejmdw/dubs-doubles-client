import React, { useContext, useEffect, useState } from "react"
import { ComboContext } from "./ComboProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./Combo.css"

export const ComboDetail = () => {
    const history = useHistory()
    const { combo, getComboById } = useContext(ComboContext)
    // const { events, getEvents } = useContext(EventContext)
    const { comboId } = useParams()

    // const { Combo, setCombo } = useState({})
    

    useEffect(() => {
        getComboById(parseInt(comboId))
        // .then(data => setCombo(data))
        // getEvents()
    }, [])

    return (
        <>
        <article className="combos">
        <header className="events__header">
                <h1>{combo.name}</h1>
            </header>
                        <div className="combo__pic">Pic placeholder</div>
                        <div className="combo__description">{combo.description}</div>
                        <div className="combo__price">${combo.price}</div>
                        <div className="combo__edit">
                        <button className="btn btn-3">Add to Cart</button>
                        </div>
                
            
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Combos/new")
        }}
        >Register New Combo</button> */}
</>
    )
}