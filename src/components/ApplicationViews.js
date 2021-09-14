import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/ProfileProvider"
import { BurgerProvider } from "./burger/BurgerProvider"
import { FriesProvider } from "./fries/FriesProvider"
import { Profile } from "./auth/Profile"
import { Menu } from "./menu/Menu"
import { BurgerList } from "./burger/BurgerList"
import { FriesList } from "./fries/FriesList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
            <ProfileProvider>
            <BurgerProvider>
            <FriesProvider>

                <Route exact path="/profile">
                    <Profile />
                </Route>

                <Route exact path="/">
                    <Menu />
                </Route>
                <Route exact path="/burgers">
                    <BurgerList />
                </Route>
                <Route exact path="/fries">
                    <FriesList />
                </Route>
            
            </FriesProvider>
            </BurgerProvider>
            </ProfileProvider>
        </main>
    </>
}
