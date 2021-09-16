import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Footer } from "./footer/Footer"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CartProvider } from "./cart/CartProvider"

// export const DubsDoubles = () => (
//     <>
//         <Route path="/" >
//           {  localStorage.getItem("dd_token") ? 
//                  <>
//                     <CartProvider>
//                         <NavBar />
//                         <ApplicationViews />
//                         <Footer />
//                     </CartProvider>
//                 </>
//              : 
//                 <Redirect to="/login" />
//             }
//         </Route>

//         <Route path="/login" render={Login} />
//         <Route path="/register" render={Register} />
//     </>
// )

export const DubsDoubles = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("dd_token")) {
            return (
              <>
                <CartProvider>
                         <NavBar />
                         <ApplicationViews />
                         <Footer />
                     </CartProvider>
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );