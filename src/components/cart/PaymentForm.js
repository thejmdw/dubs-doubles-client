import React, { useContext, useState, useEffect } from "react"
import { PaymentContext } from "./PaymentProvider.js"
import { useHistory } from "react-router-dom"


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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="merchant_name">merchant_name: </label>
                    <input type="text" name="merchant_name" required autoFocus className="form-control"
                        // value={currentPayment.merchant_name}
                        onChange={changePaymentState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="account_number">Account Number: </label>
                    <input type="number" name="account_number" required autoFocus className="form-control"
                        // value={currentPayment.account_number}
                        onChange={changePaymentState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="expiration_date">expiration_date: </label>
                    <input type="text" name="expiration_date" required autoFocus className="form-control"
                        // value={currentPayment.expiration_date}
                        onChange={changePaymentState}
                    />
                </div>
            </fieldset>

            {/* Create the rest of the input fields */}

            <button type="submit"
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
                className="btn btn-primary">Create Payment</button>
        </form>
    )
}
