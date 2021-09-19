import React, { useState } from "react"

export const ChartDataContext = React.createContext()

export const ChartDataProvider = (props) => {
    const [ totalSalesData, setTotalSalesData ] = useState({})
    const [ productSalesData, setProductSalesData ] = useState({})
    
    const getTotalSalesData = () => {
        return fetch(`http://localhost:8000/charts/totalsales`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setTotalSalesData)
    }
    const getProductSalesData = () => {
        return fetch(`http://localhost:8000/charts/productsales`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setProductSalesData)
    }
    
    return (
        <ChartDataContext.Provider value={{ totalSalesData, setTotalSalesData, getTotalSalesData, productSalesData, setProductSalesData, getProductSalesData}} >
            { props.children }
        </ChartDataContext.Provider>

    )
}
