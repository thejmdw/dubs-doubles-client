import React, { useState, useEffect, useContext } from 'react'
import { ChartDataContext } from "./ChartDataProvider.js"
import {Bar} from 'react-chartjs-2'

export const ProductSalesChart = () => {
        const { 
            productSalesData,
            getProductSalesData } = useContext(ChartDataContext)
       const [chartData, setChartData]  = useState({});
       const [ productNames, setProductNames ] = useState([])
       const [ productNumbers, setProductNumbers ] = useState([])

        
       
       const namesToArray = () => {
           let namesArray = []
           productSalesData?.product_sales?.forEach( product => namesArray.push(product.name))
           setProductNames(namesArray)
       }
       const numbersToArray = () => {
           let numbersArray = []
           productSalesData?.product_sales?.forEach( product => numbersArray.push(product.total_number_sold))
           setProductNumbers(numbersArray)
       }

        const Chart = () => {
            setChartData({
            labels: productNames,
            datasets: [{
                                label: 'Total Product Sales',
                                data: productNumbers,
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
        getProductSalesData()
      }, []);
     useEffect(() => {
        namesToArray()
      }, [productSalesData]);
     useEffect(() => {
        numbersToArray()
      }, [productNames]);
     useEffect(() => {
        Chart()
      }, [productNumbers]);

return(
          <div className="App">
              <h1>Bar Chart</h1>
              <div>
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
