import React from "react"
import { BarChartBoiler } from "../chart/BarChartBoiler"
import { ProductSalesChart } from "../chart/ProductSalesChart"
import { ToppingSalesChart } from "../chart/ToppingSalesChart"
import { DailySalesChart } from "../chart/DailySalesChart"
import "./DashBoard.css"

export const DashBoard = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
                <div className="dashBoard">
                    <div className="dashBoard__item">
                    <BarChartBoiler />
                    </div>
                    <div className="dashBoard__item">             
                    <ProductSalesChart />
                    </div>
                    <div className="dashBoard__item">             
                    <ToppingSalesChart  />
                    </div>
                    <div className="dashBoard__item">             
                    <DailySalesChart />
                    </div>
                    <div>

</div>
                </div>              
        </main>
    </>
}
