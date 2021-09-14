import React, { useContext, useEffect } from "react"
import { BurgerContext } from "./BurgerProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"

export const BurgerList = () => {
    const history = useHistory()
    const { burgers, getBurgers } = useContext(BurgerContext)
    // const { events, getEvents } = useContext(EventContext)

    

    useEffect(() => {
        getBurgers()
        // getEvents()
    }, [])

    return (
        <>
        <article className="burgers">
        <header className="events__header">
                <h1>Burgers</h1>
            </header>
            {
                burgers.map(burger => {
                    return <section key={`burger--${burger.id}`} className="burger">
                        <div className="burger__name">{burger.name}</div>
                        <div className="burger__pic">Pic placeholder</div>
                        <div className="burger__description">{burger.description}</div>
                        <div className="burger__price">${burger.price}</div>
                        {/* <div className="burger__edit">
                        <button className="btn btn-3"
                                    onClick={() => history.push(`Burgers/edit/${Burger.id}`)}
                                    >Edit Burger</button>
                        </div> */}
                    </section>
                })
            }
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Burgers/new")
        }}
        >Register New Burger</button> */}
</>
    )
}
