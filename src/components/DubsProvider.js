import React, { useState } from "react"


export const DubsContext = React.createContext()

export const DubsProvider = (props) => {

    const [admin, setAdmin] = useState(false)
    const [dubs, setDubs] = useState({})

    const getDubs = () => {
        return fetch(`http://localhost:8000/profile`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setDubs)
    }

    
 
    

    return (
        <DubsContext.Provider value={{ dubs, getDubs, admin, setAdmin}} >
            { props.children }
        </DubsContext.Provider>

    )
}
