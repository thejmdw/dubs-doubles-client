import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/ProfileProvider"
import { BurgerProvider } from "./burger/BurgerProvider"
import { FriesProvider } from "./fries/FriesProvider"
import { ComboProvider } from "./combo/ComboProvider"
import { CartProvider } from "./cart/CartProvider"
import { LineItemProvider } from "./lineitem/LineItemProvider"
import { Profile } from "./auth/Profile"
import { Menu } from "./menu/Menu"
import { Cart } from "./cart/Cart"
import { BurgerList } from "./burger/BurgerList"
import { BurgerDetail } from "./burger/BurgerDetail"
import { FriesList } from "./fries/FriesList"
import { FriesDetail } from "./fries/FriesDetail"
import { ComboList } from "./combo/ComboList"
import { ComboDetail } from "./combo/ComboDetail"

export const ApplicationViews = () => {
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
            <CartProvider>

                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>

                <Route exact path="/">
                    <Menu />
                </Route>
                <Route exact path="/burgers">
                    <BurgerList />
                </Route>
                <Route exact path="/burgers/detail/:burgerId(\d+)">
                    <BurgerDetail />
                </Route>


                <Route exact path="/fries">
                    <FriesList />
                </Route>
                <Route exact path="/fries/detail/:friesId(\d+)">
                    <FriesDetail />
                </Route>


                <Route exact path="/combos">
                    <ComboList />
                </Route>
                <Route exact path="/combos/detail/:comboId(\d+)">
                    <ComboDetail />
                </Route>

            </CartProvider>
            </LineItemProvider>
            </ComboProvider>
            </FriesProvider>
            </BurgerProvider>
            </ProfileProvider>
        </main>
    </>
}
