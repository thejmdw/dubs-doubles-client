import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Footer } from "./footer/Footer"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const DubsDoubles = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("dd_token")) {
                return <>
                    <Route render={NavBar} />
                    <Route render={props => <ApplicationViews {...props} />} />
                    <Route render={Footer} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)

// export const DubsDoubles = () => (
//     <>
//       <Route
//         render={() => {
//           if (localStorage.getItem("dd_token")) {
//             return (
//               <>
                
//                 <NavBar />
//                 <ApplicationViews />
//               </>
//             );
//           } else {
//             return <Redirect to="/login" />;
//           }
//         }}
//       />
  
//       <Route path="/login">
//         <Login />
//       </Route>
//       <Route path="/register">
//         <Register />
//       </Route>
//     </>
//   );