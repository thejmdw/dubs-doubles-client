import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "dd_token", res.token )
                    localStorage.setItem( "is_staff", res.is_staff )
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Dub's Doubles</h1>
                    <h2>Please sign in</h2>
                    <TextField 
                        inputRef={email}
                        name="email"
                        id="outlined-helperText"
                        label="E-Mail"
                    />
                    <TextField
                        inputRef={password}
                        name="password"
                        type="password"
                        id="outlined-helperText"
                        label="password"
                    />
                    {/* <fieldset style={{
                        textAlign:"center"
                    }}> */}
                        <Button variant="contained" className="btn btn-1 btn-sep icon-send" type="submit">Sign In</Button>
                    {/* </fieldset> */}
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
