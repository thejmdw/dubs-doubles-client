import React, { useState } from "react"

export const ChartDataContext = React.createContext()

export const ChartDataProvider = (props) => {
    const [ totalSalesData, setTotalSalesData ] = useState({})
    const [ productSalesData, setProductSalesData ] = useState({})
    const [ toppingSalesData, setToppingSalesData ] = useState({})
    const [ dailySalesData, setDailySalesData ] = useState({})
    
    const getTotalSalesData = () => {
        return fetch(`https://dubs-doubles.herokuapp.com/charts/totalsales`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setTotalSalesData)
    }
    const getProductSalesData = () => {
        return fetch(`https://dubs-doubles.herokuapp.com/charts/productsales`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setProductSalesData)
    }
    const getToppingSalesData = () => {
        return fetch(`https://dubs-doubles.herokuapp.com/charts/toppingsales`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setToppingSalesData)
    }
    const getDailySalesData = () => {
        return fetch(`https://dubs-doubles.herokuapp.com/charts/dailysales`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setDailySalesData)
    }
    
    return (
        <ChartDataContext.Provider value={{ totalSalesData, setTotalSalesData, getTotalSalesData, 
                                        productSalesData, setProductSalesData, getProductSalesData,
                                        dailySalesData, setDailySalesData, getDailySalesData,
                                        toppingSalesData, setToppingSalesData, getToppingSalesData }} >
            { props.children }
        </ChartDataContext.Provider>

    )
}
