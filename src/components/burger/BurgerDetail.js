import React, { useContext, useEffect, useState } from "react"
import { BurgerContext } from "./BurgerProvider.js"
import { LineItemContext } from "../lineitem/LineItemProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory, useParams } from "react-router-dom"
import { Button, Input, Select, MenuItem, InputLabel } from "@material-ui/core"
import { FormControlLabel, Checkbox } from "@material-ui/core"
import "./Burger.css"

export const BurgerDetail = () => {
    const history = useHistory()
    const { burger, getBurgerById, toppings, toppingTypes, getToppings, getToppingTypes } = useContext(BurgerContext)
    const { createLineItem } = useContext(LineItemContext)
    // const { events, getEvents } = useContext(EventContext)
    const { burgerId } = useParams()

    const [ buildPrice, setBuildPrice ] = useState(0)
    const [ lineItem, setLineItem ] = useState({
        product_id: 0,
        toppings: []
    })

    useEffect(() => {
        getBurgerById(parseInt(burgerId))
        getToppingTypes()
        getToppings()
        
    }, [])

    const handleAddClick = (id) => {
        let addLineItem = {
            product_id: id,
            toppings: lineItem.toppings
        }
        createLineItem(addLineItem)
        .then(() => history.push(`/burgers`))
      }
    const handleControlledCheckChange = e => {
        const newLineItem = { ...lineItem }

        const lineItemIndex = newLineItem.toppings.indexOf(parseInt(e.target.value))
        if (lineItemIndex > -1) {
            newLineItem.toppings.splice(lineItemIndex, 1)
        } else {
        newLineItem.toppings.push(parseInt(e.target.value))
        }
        setLineItem(newLineItem)
    }

    useEffect(() => {
        let amount = 0
        lineItem.toppings.forEach(topping => {
            const filtered = toppings.find(top => top.id === topping)
            amount += filtered.price
        })
        setBuildPrice(amount)
    }, [lineItem])

    return (
        <>
        <article className="burgers">
        <header className="events__header">
                <h1>{burger?.name}</h1>
            </header>
                        <div className="burger__pic">Pic placeholder</div>
                        <div className="burger__description">{burger.description}</div>
                        {burger.name === "The BYOBurger" ? <div className="burger__toppings">
                            {toppingTypes.map(type => {
                                return <ul><h4>{type.name}</h4>
                                {toppings.filter(topping => topping.topping_type_id === type.id)
                                    .map(top => {
                                        return <FormControlLabel
                                        control={<Checkbox value={top.id} onChange={handleControlledCheckChange} name="topping" />}
                                        label={`${top.name} $${top.price}`}
                                      />
                                    }
                                    )}</ul>
                                })}</div> : ""}
                        <div className="burger__price">${burger.price + buildPrice}</div>
                        <div className="burger__edit">
                        <button className="btn btn-3" onClick={() => {handleAddClick(burger.id)}}>Add to Cart</button>
                        </div>
                
            
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Burgers/new")
        }}
        >Register New Burger</button> */}
</>
    )
}
