import React, { useContext, useEffect } from "react"
import { BurgerContext } from "./BurgerProvider.js"
import { LineItemContext } from "../lineitem/LineItemProvider.js"
import { useHistory } from "react-router-dom"
import "./Burger.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const BurgerList = () => {
    const history = useHistory()
    const { burgers, getBurgers, getBurgerById } = useContext(BurgerContext)
    const { createLineItem } = useContext(LineItemContext)

    

    useEffect(() => {
        getBurgers()
        // getEvents()
    }, [])

    const handleBurgerClick = (id) => {
        getBurgerById(id)
        .then(() => history.push(`/burgers/detail/${id}`))
      }

      const handleAddClick = (id) => {
        const product = {
            product_id: id
        }
        createLineItem(product)
        // .then(() => history.push(`/burgers/detail/${id}`))
      }

    return (
        <>
        <article className="burgerCard__container">
        <header className="events__header">
                <h1>Burgers</h1>
            </header>
            {
                burgers.map(burger => {
                    return <Card className="burgersCard" >
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                      alt="burger photo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {burger.name}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        ${burger.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="large">{burger.price}</Button> */}
                      { burger.name === "The BYOBurger" ? <Button variant="contained" size="large" onClick={() => {handleBurgerClick(burger.id)}}>Build Burger</Button> : <Button variant="contained" size="large" onClick={() => {handleAddClick(burger.id)}}>Add to Cart</Button>}
                    </CardActions>
                  </Card>
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
