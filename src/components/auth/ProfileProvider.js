import React, { useState } from "react"

export const ProfileContext = React.createContext()

export const ProfileProvider = (props) => {
    /*
        Must profile a default value for the `events` property
        so that React doesn't throw an error when you try to
        iterate the events array in the view.
    */
    const [profile, setProfile] = useState({})
    const [admin, setAdmin] = useState(false)

    const getProfile = () => {
        return fetch("http://localhost:8000/profile", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setProfile)
    }

    return (
        <ProfileContext.Provider value={{ profile, getProfile, admin, setAdmin }}>
            {props.children}
        </ProfileContext.Provider>
    )
}
