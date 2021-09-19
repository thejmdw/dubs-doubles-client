import React, { useState, useEffect, useContext } from 'react'
import { ChartDataContext } from "./ChartDataProvider.js"
import {Line} from 'react-chartjs-2'

export const DailySalesChart = () => {
        const { 
            dailySalesData,
            getDailySalesData } = useContext(ChartDataContext)
       const [chartData, setChartData]  = useState({});
       const [ dates, setDates ] = useState([])
       const [ dailyNumbers, setDailyNumbers ] = useState([])

        
       
       const datesToArray = () => {
           let datesArray = []
           dailySalesData?.daily_sales?.forEach( date => datesArray.push(date.created_date))
           setDates(datesArray)
       }
       const numbersToArray = () => {
           let numbersArray = []
           dailySalesData?.daily_sales?.forEach( product => numbersArray.push(product.total_sales))
           setDailyNumbers(numbersArray)
       }

        const Chart = () => {
            setChartData({
            labels: dates,
            datasets: [{
                                label: 'Total Product Sales',
                                data: dailyNumbers,
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
        getDailySalesData()
      }, []);
     useEffect(() => {
        datesToArray()
      }, [dailySalesData]);
     useEffect(() => {
        numbersToArray()
      }, [dates]);
     useEffect(() => {
        Chart()
      }, [dailyNumbers]);

return(
          <div className="App">
              <h1>Daily Sales Chart</h1>
              <div>
                  <Line
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
