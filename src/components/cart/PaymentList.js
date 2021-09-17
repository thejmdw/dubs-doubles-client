import React, { useContext, useEffect } from "react"
import { PaymentContext } from "./PaymentProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"
import "./Cart.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const PaymentList = () => {
    const history = useHistory()
    const { payments, getPayments, getPaymentById, setCartPayment } = useContext(PaymentContext)
    // const { events, getEvents } = useContext(EventContext)

    

    useEffect(() => {
        getPayments()
        // getEvents()
    }, [])

    const handlePaymentClick = (id) => {
        // localStorage.setItem('token', id)
        setCartPayment(id)
        history.push(`/checkout`)
      }

    return (
        <>
        <article className="Payment">
        <header className="events__header">
                <h1>Payments</h1>
            </header>
            <Button variant="contained" className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/payment/new")
        }}
        >Add Card</Button>
        {
                    payments.map(payment => {
                        return <Card className="paymentCard" >
                        {/* <CardMedia
                          component="img"
                          height="140"
                          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                          alt="payment photo"
                        /> */}
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {payment.merchant_name}
                          </Typography>
                          <Typography variant="h6" color="text.secondary">
                            {payment.account_number}
                          </Typography>
                          <Typography variant="h6" color="text.secondary">
                            {payment.expiration_date}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {/* <Button size="large">{payment.price}</Button> */}
                          <Button variant="contained" onClick={() => {handlePaymentClick(payment.id)}}>Select This Card</Button>
                        </CardActions>
                      </Card>
                  
                    })
                }
        </article>
</>
    )
}

// {
//     payments.map(payment => {
//         return <section key={`Payment--${payment.id}`} className="cartCard" onClick={() => {handlePaymentClick(payment.id)}}>
//             <div className="Payment__name">{payment.merchant_name}</div>
            
//             <div className="Payment__description">{payment.account_number}</div>
//             <div className="Payment__price">{payment.expiration_date}</div>
        
//         </section>
//     })
// }