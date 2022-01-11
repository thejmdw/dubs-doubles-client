
import React from "react"
import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
// import { UserContext } from "../user/UserProvider"
import "./Menu.css"
import Button from '@mui/material/Button';
// import { theme } from "../theme"




export const Menu = () => {
  
  // const { getUserById } = useContext(UserContext)
  const history = useHistory()

  const [user, setUser] = useState({})
  // useEffect(() => {
  //   getUserById(parseInt(localStorage.getItem("swipemenu_user")))
  //     .then(user => setUser(user))
     
  // }, [])

  // const currentUser = user
  // debugger
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
      <section className="menuCard__container">
              <div className="menuCard">
                <div className="menuCard__greeting">
                  <div>
                    <h2 className="greetingText">Dub's Doubles</h2>
                  </div>
                <img src="http://localhost:8000/media/products/965a93d9-a8d7-42c3-b491-03e888e1a6bf.jpg" width="250" />
                </div>
                <div className="menuCard__buttons">
                  <Button variant="contained" color="primary" onClick={() => history.push("/burgers")}>Burgers</Button>
                  <Button variant="contained" color="primary" onClick={() => history.push("/fries")}>Fries</Button>
                </div>
              </div>
            {/* </div> */}
      </section>
      {/* </ThemeProvider>  */}
    </>
  )
}