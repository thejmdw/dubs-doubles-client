import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
// import "./Cart.css"
import { Line } from 'react-chartjs-2'


export const SalesChart = () => {
    const [ chartData, setChartData ] = useState({})

    const chart = () => {
        setChartData({
            labels: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: 'Daily Sales Totals',
                    data: [123, 1123, 123, 234, 345, 234, 12],
                    backgroundColor: [ 'rgba(75, 192, 192, 0.6)' ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <>
        <div>
            <h1 className="chart">My First Chart</h1>
            <div>
                <Line data={chartData}/>
            </div>
        </div>

</>
    )
}
