import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { ApplicationViews2 } from "./ApplicationViews2"
import { NavBar } from "./nav/NavBar"
import { NavBar2 } from "./nav/NavBar2"
import { AppBar2 } from "./nav/AppBar"
import { Footer } from "./footer/Footer"
import { AppFooter } from "./footer/AppFooter"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CartProvider } from "./cart/CartProvider"
import { LineItemProvider } from "./lineitem/LineItemProvider"
import { NavBar3 } from "./nav/NavBar3"

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
          if (localStorage.getItem("dd_token") && localStorage.getItem("is_staff") === 'true' ) {
            return (
              <>
                     <CartProvider>
                     <LineItemProvider>
                         <NavBar2 />
                         <NavBar3 />
                         <ApplicationViews2 />
                         <AppFooter />
                     </LineItemProvider>
                     </CartProvider>
              </>
            );
          } else if (localStorage.getItem("dd_token")) {
            return (
              <>
                     <CartProvider>
                         <NavBar />
                         <ApplicationViews />
                         <AppFooter />
                     </CartProvider>
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
      <CartProvider>
      <NavBar />
        <Login />
        <AppFooter />
      </CartProvider>
      </Route>
      <Route path="/register">
      <CartProvider>
      <NavBar />
        <Register />
        <AppFooter />
      </CartProvider>
      </Route>
    </>
  );