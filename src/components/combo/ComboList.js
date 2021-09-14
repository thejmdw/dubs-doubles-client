import React, { useContext, useEffect } from "react"
import { ComboContext } from "./ComboProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"
import "./Combo.css"

export const ComboList = () => {
    const history = useHistory()
    const { combos, getCombos, getComboById } = useContext(ComboContext)
    // const { events, getEvents } = useContext(EventContext)

    

    useEffect(() => {
        getCombos()
        // getEvents()
    }, [])

    const handleComboClick = (id) => {
        getComboById(id)
        .then(() => history.push(`/combos/detail/${id}`))
      }

    return (
        <>
        <article className="combo">
        <header className="events__header">
                <h1>Combos</h1>
            </header>
            {
                combos.map(combo => {
                    return <section key={`combo--${combo.id}`} className="comboCard" onClick={() => {handleComboClick(combo.id)}}>
                        <div className="combo__name">{combo.name}</div>
                        <div className="combo__pic">Pic placeholder</div>
                        <div className="combo__description">{combo.description}</div>
                        <div className="combo__price">${combo.price}</div>
                        {/* <div className="Frie__edit">
                        <button className="btn btn-3"
                                    onClick={() => history.push(`Combo/edit/${Frie.id}`)}
                                    >Edit Frie</button>
                        </div> */}
                    </section>
                })
            }
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Combo/new")
        }}
        >Register New Frie</button> */}
</>
    )
}
