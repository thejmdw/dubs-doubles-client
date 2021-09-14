
import React from "react"
import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
// import { UserContext } from "../user/UserProvider"
import "./Menu.css"
import Button from '@material-ui/core/Button';
// import { theme } from "../theme"
import { ThemeProvider } from "@material-ui/styles"
import { Avatar } from "@material-ui/core"



export const Menu = () => {
  
  // const { getUserById } = useContext(UserContext)
  const history = useHistory()

  const [user, setUser] = useState({})
  // useEffect(() => {
  //   getUserById(parseInt(localStorage.getItem("swipeHome_user")))
  //     .then(user => setUser(user))
     
  // }, [])

  // const currentUser = user
  // debugger
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
      {/* <section className="homeCard__container"> */}
            {/* <div  className="homeCard__container" key={currentUser.id}> */}
              <div className="homeCard">
                <div className="homeCard__greeting">
                  {/* <img className="homeCard__userAvatar" src={currentUser.avatarURL} alt="user_avatar" /> */}
                  <div>
                    <h2 className="greetingText">Dub's Doubles</h2>
                    {/* <h3 className="greetingText">{currentUser.name}!</h3> */}
                  </div>
                </div>
                <div className="homeCard__buttons">
                  <Button variant="contained" color="primary" onClick={() => history.push("/burgers")}>Burgers</Button>
                  {/* {currentUser.userTypeId === 3 ? <Button variant="contained" color="primary" onClick={() => history.push("/listing")}>Add Listing</Button> : ""} */}
                  <Button variant="contained" color="primary" onClick={() => history.push("/fries")}>Fries</Button>
                  <Button variant="contained" color="primary" onClick={() => history.push("/combos")}>Combos</Button>
                </div>
              </div>
            {/* </div> */}
      {/* </section> */}
      {/* </ThemeProvider>  */}
    </>
  )
}