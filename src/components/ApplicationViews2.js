import React from "react"
import { Route } from "react-router-dom"
import { SalesChart } from './charts/Chart'


export const ApplicationViews2 = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
            <Route exact path="/chart">
                <SalesChart/>
            </Route>
        </main>
    </>
}
