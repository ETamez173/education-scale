import React, { useRef } from "react"
import { Link } from "react-router-dom";
import "./login.css"


const Login = props => {
    const email = useRef()
    const password = useRef()
    const customerName = useRef()
    const address = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/customers?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return user[0]
                }
                return false
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    localStorage.setItem("education_customer", exists.id)
                    props.history.push("/")
                } else if (exists && exists.password !== password.current.value) {
                    window.alert("Password does not match")
                } else if (!exists) {
                    fetch("http://localhost:8088/customers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            name: customerName.current.value,
                            address: address.current.value
                        })
                    })
                        .then(_ => _.json())
                        .then(response => {
                            localStorage.setItem("education_customer", response.id)
                            props.history.push("/")
                        })
                }
            })
    }

    return (
        <main className="container--login">
            <section className="login__section">

                <form className="form--login" onSubmit={handleLogin}>
                    <h1>SchoolScale </h1>
                    <h2>Please sign in</h2>
                    <div className="form__placement">
                        <div className="sign__in">



                        </div>
                        <div className="login__fields" >
                            <fieldset className="email__prompt">
                                <div className="label__control">
                                    <label htmlFor="inputEmail"> Enter Your Email Address </label>
                                </div>
                                <input ref={email} type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    required autoFocus />
                            </fieldset>
                            <fieldset className="password__prompt">
                                <div className="label__control">
                                    <label htmlFor="inputPassword"> Password </label>
                                </div>
                                <input ref={password} type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                    required />
                            </fieldset>
                            <fieldset>
                                <div className="label__control">
                                    <button className="sign__inButton" type="submit">
                                        Sign in
                                   </button><br></br>
                                    <section className="link__register">
                                        <Link to="/register">Register A New Account</Link>
                                    </section>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </form>

            </section>

        </main>
    )
}
export default Login

