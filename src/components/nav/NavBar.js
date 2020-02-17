import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">School / Program Research</Link>
            </li>
        
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/schools">School Costs</Link>
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="/mycareerOptions">Find A School</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/analysis">My Benefit Cost Analysis</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/plans">Saved Plans</Link>
            </li>
            {
                localStorage.getItem("education_customer")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("education_customer")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""

            }
        </ul>
    )
}
