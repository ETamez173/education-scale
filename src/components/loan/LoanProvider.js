import React, { useState, useEffect } from "react"

export const LoanContext = React.createContext()

export const LoanProvider = (props) => {
    const [loans, setLoans] = useState([])

    const getLoans = () => {
        return fetch("http://localhost:8088/loans")
            .then(res => res.json())
            .then(setLoans)
    }

    // console.log(loans)

    const addLoan = loan => {
        return fetch("http://localhost:8088/loans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loan)
        })
            .then(getLoans)
    }

    const deleteLoan = loan => {
        return fetch(`http://localhost:8088/loans/${loan.id}`, {
            method: "DELETE"
        })
        .then(getLoans)
    }

    const patchLoan = (loan, id) => {
        return fetch(`http://localhost:8088/loans/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loan)
        })
        .then(loans)
    }

    const updateLoan = loan => {
        return fetch(`http://localhost:8088/loans/${loan.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loan)
        })
            .then(getLoans)
    }

    useEffect(() => {
        getLoans()
    }, [])

    return (
        <LoanContext.Provider value={{
            loans, addLoan, deleteLoan, updateLoan, patchLoan
        }}>
            {props.children}
        </LoanContext.Provider>
    )
}
