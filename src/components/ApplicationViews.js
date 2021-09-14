import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/ProfileProvider"
import { BurgerProvider } from "./burger/BurgerProvider"
import { FriesProvider } from "./fries/FriesProvider"
import { ComboProvider } from "./combo/ComboProvider"
import { Profile } from "./auth/Profile"
import { Menu } from "./menu/Menu"
import { BurgerList } from "./burger/BurgerList"
import { BurgerDetail } from "./burger/BurgerDetail"
import { FriesList } from "./fries/FriesList"
import { ComboList } from "./combo/ComboList"

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

                <Route exact path="/profile">
                    <Profile />
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
                <Route exact path="/combos">
                    <ComboList />
                </Route>
            
            </ComboProvider>
            </FriesProvider>
            </BurgerProvider>
            </ProfileProvider>
        </main>
    </>
}
