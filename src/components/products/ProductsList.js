import React, { useContext, useEffect } from "react"
import { FriesContext } from "../fries/FriesProvider.js"
import { BurgerContext } from "../burger/BurgerProvider.js"
import { LineItemContext } from "../lineitem/LineItemProvider.js"
import { useHistory } from "react-router-dom"
import "../fries/Fries.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ProductsList = () => {
    const history = useHistory()
    const { fries, getFries, getFryById } = useContext(FriesContext)
    const { burgers, getBurgers, getBurgerById } = useContext(BurgerContext)
    // const { fries, getFries, getFryById } = useContext(FriesContext)
    const { createLineItem } = useContext(LineItemContext)

    useEffect(() => {
        getFries()
        getBurgers()
    }, [])

    const handleFriesClick = (id) => {
        getFryById(id)
        .then(() => history.push(`/fries/detail/${id}`))
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
            <article className="friesCard__container">
            <header className="events__header">
                    <h1>Fries</h1>
                </header>
                {
                    fries.map(fry => {
                        return <Card className="fryCard" >
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                          alt="fry photo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {fry.name}
                          </Typography>
                          <Typography variant="h6" color="text.secondary">
                            ${fry.price}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {/* <Button size="large">{fry.price}</Button> */}
                          {/* <Button variant="contained" size="small" onClick={() => {handleAddClick(fry.id)}}>Add to Cart</Button> */}
                        </CardActions>
                      </Card>
                  
                    })
                }
                {
                    burgers.map(burger => {
                        return <Card className="fryCard" >
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                          alt="fry photo"
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
                          {/* <Button size="large">{fry.price}</Button> */}
                          {/* <Button variant="contained" size="small" onClick={() => {handleAddClick(fry.id)}}>Add to Cart</Button> */}
                        </CardActions>
                      </Card>
                  
                    })
                }
            </article>
        </>
    )
}

                        // return <section key={`fries--${fry.id}`} className="friesCard" onClick={() => {handleFriesClick(fry.id)}}>
                        //     <div className="fries__name"><h3>{fry.name}</h3></div>
                        //     <div className="fries__pic">Pic placeholder</div>
                        //     <div className="fries__description">{fry.description}</div>
                        //     <div className="fries__price">${fry.price}</div>
                        // </section>