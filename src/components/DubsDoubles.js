import React, { useContext, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { ApplicationViews2 } from "./ApplicationViews2"
import { NavBar } from "./nav/NavBar"
<<<<<<< HEAD
import { NavBar2 } from "./nav/NavBar2"
=======
import { AppBar2 } from "./nav/AppBar"
>>>>>>> main
import { Footer } from "./footer/Footer"
import { AppFooter } from "./footer/AppFooter"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
<<<<<<< HEAD
import { DubsContext } from "./DubsProvider"


export const DubsDoubles = () => {
    const { dubs, getDubs, admin } = useContext(DubsContext)

    // useEffect(() => {
    //     getDubs()
    // }, [])

    return(
            <>
                <Route render={() => {
                     if (localStorage.getItem("dd_token") && localStorage.getItem("is_staff") === 'true') {
                        return <>
                            <Route render={NavBar2} />
                            <Route render={props => <ApplicationViews2 {...props} />} />
                            
                        </> } else if (localStorage.getItem("dd_token")) {
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

}

// export const DubsDoubles = () => (
//     <>
//         <Route render={() => {
//             if (localStorage.getItem("dd_token")) {
//                 return <>
//                     <Route render={NavBar} />
//                     <Route render={props => <ApplicationViews {...props} />} />
//                     <Route render={Footer} />
//                 </>
//             } else {
//                 return <Redirect to="/login" />
//             }
//         }} />

//         <Route path="/login" render={Login} />
//         <Route path="/register" render={Register} />
//     </>
// )
=======
import { CartProvider } from "./cart/CartProvider"
>>>>>>> main

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
                         {/* <AppBar2 /> */}
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
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );