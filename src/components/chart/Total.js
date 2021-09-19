import React, { useState, useEffect, useContext } from 'react'
import { LineItemContext } from "../lineitem/LineItemProvider.js"

export const Total = () => {
      const { lineItems, getLineItems} = useContext(LineItemContext)

      const [total, setTotal] = useState(0)

      useEffect(() => {
        getLineItems()
      }, [])

      useEffect(() => {
        let allTotal = 0
        lineItems?.forEach(item => allTotal += parseInt(item.product?.price))
        setTotal(allTotal)
      }, [lineItems])

return total
 }
