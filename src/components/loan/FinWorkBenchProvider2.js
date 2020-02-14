import React, { useState, useEffect } from "react"

export const FinWorkBenchContext = React.createContext()

export const FinWorkBenchProvider = (props) => {
    const [finworkbenchs, setFinWorkBenchs] = useState([])

    const getFinWorkBenchs = () => {
        return fetch("http://localhost:8088/loans")
            .then(res => res.json())
            .then(setFinWorkBenchs)
    }

    console.log(finworkbenchs)

    const addFinWorkBench = finworkbench => {
        return fetch("http://localhost:8088/loans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(finworkbench)
        })
        .then(getFinWorkBenchs)
    }

    const deleteFinWorkBench = finworkbench => {
        return fetch(`http://localhost:8088/loans/${finworkbench.id}`, {
            method: "DELETE"
        })
        .then(getFinWorkBenchs)
    }

    const updateFinWorkBench = finworkbench => {
        return fetch(`http://localhost:8088/loans/${finworkbench.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(finworkbench)
        })
        .then(getFinWorkBenchs)
    }

    useEffect(() => {
        getFinWorkBenchs()
    }, [])


    console.log(finworkbenchs)
    return (
        <FinWorkBenchContext.Provider value={{
            finworkbenchs, addFinWorkBench, deleteFinWorkBench, updateFinWorkBench
        }}>
            {props.children}
        </FinWorkBenchContext.Provider>
    )
}
