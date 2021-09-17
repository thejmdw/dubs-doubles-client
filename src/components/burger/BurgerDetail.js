import React, { useContext, useEffect, useState } from "react"
import { BurgerContext } from "./BurgerProvider.js"
import { LineItemContext } from "../lineitem/LineItemProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory, useParams } from "react-router-dom"
import { Input, Select, MenuItem, InputLabel } from "@material-ui/core"
import { FormControlLabel, Checkbox } from "@mui/material"
import "./Burger.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { css, cx } from '@emotion/react'
import { flexbox } from "@mui/system"

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
            <Card className="burgersCard" >
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                      alt="burger photo"
                    />
                    <CardContent>
                      {/* <Typography gutterBottom variant="h5" component="div">
                        {burger.name}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        ${burger.price}
                      </Typography> */}
                      {toppingTypes.map(type => {
                        return <div><h3>{type.name}</h3><div className="BYOB">
                        {toppings.filter(topping => topping.topping_type_id === type.id)
                            .map(top => {
                                return <FormControlLabel
                                control={<Checkbox value={top.id} onChange={handleControlledCheckChange} name="topping" />}
                                label={`${top.name} $${top.price}`}
                            />
                            }
                            )}</div></div>
                        })}
                    </CardContent>
                    <CardActions >
                    {/* <Box sx={{
                        rowGap: 2
                    }}> */}
                        {/* <div className="BYOB__action"> */}
                        <Box className="burger__price" sx={{ flexGrow: 1 }}><h3>${burger.price + buildPrice}</h3></Box>
                      <Button variant="contained" size="large" onClick={() => {handleAddClick(burger.id)}}>Add To Cart</Button>
                      {/* </div> */}
                    {/* </Box> */}
                    </CardActions>
                  </Card>
            
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Burgers/new")
        }}
    >Register New Burger</button> */}
</>
    )
}

    // <div className="burger__pic">Pic placeholder</div>
    // <div className="burger__description">{burger.description}</div>
    // {burger.name === "The BYOBurger" ? <div className="burger__toppings">
    //     {toppingTypes.map(type => {
    //         return <ul><h4>{type.name}</h4>
    //         {toppings.filter(topping => topping.topping_type_id === type.id)
    //             .map(top => {
    //                 return <FormControlLabel
    //                 control={<Checkbox value={top.id} onChange={handleControlledCheckChange} name="topping" />}
    //                 label={`${top.name} $${top.price}`}
    //               />
    //             }
    //             )}</ul>
    //         })}</div> : ""}
    // <div className="burger__price">${burger.price + buildPrice}</div>
    // <div className="burger__edit">
    // <button className="btn btn-3" onClick={() => {handleAddClick(burger.id)}}>Add to Cart</button>
    // </div>