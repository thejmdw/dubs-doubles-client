import React, { useContext, useEffect } from "react"
import { FriesContext } from "./FriesProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"
import "./Fries.css"

export const FriesList = () => {
    const history = useHistory()
    const { fries, getFries, getFryById } = useContext(FriesContext)
    // const { events, getEvents } = useContext(EventContext)

    

    useEffect(() => {
        getFries()
        // getEvents()
    }, [])

    const handleFriesClick = (id) => {
        getFryById(id)
        .then(() => history.push(`/fries/detail/${id}`))
      }

    return (
        <>
        <article className="fries">
        <header className="events__header">
                <h1>Fries</h1>
            </header>
            {
                fries.map(fry => {
                    return <section key={`fries--${fry.id}`} className="friesCard" onClick={() => {handleFriesClick(fry.id)}}>
                        <div className="fries__name">{fry.name}</div>
                        <div className="fries__pic">Pic placeholder</div>
                        <div className="fries__description">{fry.description}</div>
                        <div className="fries__price">${fry.price}</div>
                        {/* <div className="Frie__edit">
                        <button className="btn btn-3"
                                    onClick={() => history.push(`Fries/edit/${Frie.id}`)}
                                    >Edit Frie</button>
                        </div> */}
                    </section>
                })
            }
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Fries/new")
        }}
        >Register New Frie</button> */}
</>
    )
}
