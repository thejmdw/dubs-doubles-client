import React, { useState, useEffect, useContext } from 'react'
import { ChartDataContext } from "./ChartDataProvider.js"
import {Chart, Bar} from 'react-chartjs-2'
import "./Chart.css"

Chart.defaults.scales.linear.min = 0;

export const ToppingSalesChart = () => {
        const { 
            toppingSalesData,
            getToppingSalesData } = useContext(ChartDataContext)
       const [chartData, setChartData]  = useState({});
       const [ toppingNames, setToppingNames ] = useState([])
       const [ toppingNumbers, setToppingNumbers ] = useState([])

       const namesToArray = () => {
           let namesArray = []
           toppingSalesData?.topping_sales?.forEach( topping => namesArray.push(topping.name))
           setToppingNames(namesArray)
       }
       const numbersToArray = () => {
           let numbersArray = []
           toppingSalesData?.topping_sales?.forEach( topping => numbersArray.push(topping.topping_count))
           setToppingNumbers(numbersArray)
       }

        const Chart = () => {
            setChartData({
            labels: toppingNames,
            datasets: [{
                                label: 'Total topping Sales',
                                data: toppingNumbers,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1
                            }]
                    });
        }
    //  useEffect(() => {
    //     Chart();
    //   }, []);
     useEffect(() => {
        getToppingSalesData()
      }, []);
     useEffect(() => {
        namesToArray()
      }, [toppingSalesData]);
     useEffect(() => {
        numbersToArray()
      }, [toppingNames]);
     useEffect(() => {
        Chart()
      }, [toppingNumbers]);

    


return(
          <div className="App ">
              <div className="chartTitle">
              <h1>Toppings Sold</h1>
              </div>
              <div className="chartCard__container">
                  <Bar
                    data={chartData}
                    options={{
                        responsive:true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales:{
                            yAxes:[ {
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                            ]
                        }
                    }}
                  />
              </div>
          </div>
      )
 }
