import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/ProfileProvider"
import { BurgerProvider } from "./burger/BurgerProvider"
import { FriesProvider } from "./fries/FriesProvider"
import { ComboProvider } from "./combo/ComboProvider"
import { CartProvider } from "./cart/CartProvider"
import { LineItemProvider } from "./lineitem/LineItemProvider"
import { PaymentProvider } from "./cart/PaymentProvider"
import { Profile } from "./auth/Profile"
import { Menu } from "./menu/Menu"
import { Cart } from "./cart/Cart"
import { Checkout } from "./cart/Checkout"
import { BurgerList } from "./burger/BurgerList"
import { BurgerDetail } from "./burger/BurgerDetail"
import { FriesList } from "./fries/FriesList"
import { FriesDetail } from "./fries/FriesDetail"
import { PaymentList } from "./cart/PaymentList"
import { PaymentForm } from "./cart/PaymentForm"
import { ComboList } from "./combo/ComboList"
import { ComboDetail } from "./combo/ComboDetail"

export const ApplicationViews2 = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
            <ProfileProvider>
            <BurgerProvider>
            <FriesProvider>
            <ComboProvider>
            <LineItemProvider>
            {/* <CartProvider> */}
            <PaymentProvider>

                

                <Route exact path="/">
                    
                </Route>
                
            
            </PaymentProvider>
            {/* </CartProvider> */}
            </LineItemProvider>
            </ComboProvider>
            </FriesProvider>
            </BurgerProvider>
            </ProfileProvider>
        </main>
    </>
}
