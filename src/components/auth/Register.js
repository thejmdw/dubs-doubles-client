import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Register = (props) => {
    const firstName = React.createRef()
    const lastName = React.createRef()
    const email = React.createRef()
    const phoneNumber = React.createRef()
    const password = React.createRef()
    const verifyPassword = React.createRef()
    const passwordDialog = React.createRef()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()


        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": email.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "phone_number": phoneNumber.current.value,
                "email": email.current.value,
                "password": password.current.value
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("dd_token", res.token)
                        history.push("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <TextField 
                    inputRef={firstName}
                    name="firstName"
                    id="outlined-helperText"
                    label="First Name"
                />
                {/* <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset> */}
                <TextField 
                    inputRef={lastName}
                    name="lastName"
                    id="outlined-helperText"
                    label="Last Name"
                />
                {/* <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset> */}
                <TextField 
                    inputRef={email}
                    name="email"
                    id="outlined-helperText"
                    label="E-Mail"
                    type="email"
                />
                {/* <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset> */}
                <TextField 
                    inputRef={password}
                    name="password"
                    id="outlined-helperText"
                    label="Password"
                    type="password"
                />
                {/* <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset> */}
                <TextField 
                    inputRef={verifyPassword}
                    name="verifyPassword"
                    id="outlined-helperText"
                    label="Verify Password"
                    type="password"
                />
                {/* <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset> */}
                <TextField 
                    inputRef={phoneNumber}
                    name="phoneNumber"
                    id="outlined-helperText"
                    label="Phone Number"
                    // type="number"
                />
                {/* <fieldset>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <textarea ref={phoneNumber} name="phoneNumber" className="form-control" placeholder="555-555-5555" />
                </fieldset> */}
                {/* <fieldset style={{
                    textAlign: "center"
                }}> */}
                    <Button variant="contained" className="btn btn-1 btn-sep icon-send" type="submit">Register</Button>
                {/* </fieldset> */}
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}
