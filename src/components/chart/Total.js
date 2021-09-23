import React, { useState, useEffect, useContext } from 'react'
import { LineItemContext } from "../lineitem/LineItemProvider.js"

export const Total = () => {
      const { lineItems, getLineItems, lineItemToppings, getLineItemToppings} = useContext(LineItemContext)

      const [total, setTotal] = useState(0)

      useEffect(() => {
        getLineItems()
        getLineItemToppings()
      }, [])

      useEffect(() => {
        let productTotal = 0
        let toppingTotal = 0
        let allTotal = 0
        lineItems?.forEach(item => productTotal += parseInt(item.product?.price))
        lineItems?.forEach(item => item.toppings.length > 0 ? item.toppings.forEach(topping => toppingTotal += parseInt(topping.price)) : toppingTotal += 0)
        allTotal = productTotal + toppingTotal
        setTotal(allTotal)
      }, [lineItems])

return total
 }
