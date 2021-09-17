import React, { useContext, useState, useEffect } from "react"
import { PaymentContext } from "./PaymentProvider.js"
import { useHistory } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const PaymentForm = () => {
    const { createPayment } = useContext(PaymentContext)
    
    const history = useHistory()

    const [currentPayment, setCurrentPayment] = useState({
        merchant_name: "",
        account_number: 0,
        expiration_date: ""
    })

    // useEffect(() => {
    //     // Get all existing games from API
    //     getGames()
    // }, [])

    const changePaymentState = (e) => {
        // ...
        const newPaymentState = { ...currentPayment }
        newPaymentState[e.target.name] = e.target.value
        setCurrentPayment(newPaymentState)
    }
    
    // const changePaymentGameState = (e) => {
    //     // ...
    //     const newPaymentState = { ...currentPayment }
    //     newPaymentState.merchant_name = e.target.value
    //     setCurrentPayment(newPaymentState)
    // }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Payment</h2>
            <TextField fullWidth
            name="merchant_name"
          id="outlined-helperText"
          label="Merchant Name"
          onChange={changePaymentState}
        />
            <TextField fullWidth
            required
            name="account_number"
          id="outlined-helperText"
          label="Card Number"
          onChange={changePaymentState}
        />
            <TextField fullWidth
            name="expiration_date"
          id="outlined-helperText"
          label="Expiration Date 00/0000"
          onChange={changePaymentState}
        />

            {/* Create the rest of the input fields */}

            <Button  variant="contained" type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // Create the Payment
                    const payment = {
                        merchant_name: currentPayment.merchant_name,
                        account_number: parseInt(currentPayment.account_number),
                        expiration_date: currentPayment.expiration_date
                        
                    }

                    // Send POST request to your API
                    createPayment(payment)
                        .then(() => history.push("/payment"))

                    // Once Payment is created, redirect user to Payment list
                }}
                className="btn btn-primary">Create Payment</Button>
        </form>
    )
}
