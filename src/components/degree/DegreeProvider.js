import React, { useState, useEffect } from "react"

export const DegreeContext = React.createContext()

export const DegreeProvider = (props) => {
    const [degrees, setDegrees] = useState([])

    const getDegrees = () => {
        return fetch("http://localhost:8088/degrees")
            .then(res => res.json())
            .then(setDegrees)
    }

    const addDegree = degree => {
        return fetch("http://localhost:8088/degrees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(degree)
        })
            .then(getDegrees)
    }

    const deleteDegree = degree => {
        return fetch(`http://localhost:8088/degrees/${degree.id}`, {
            method: "DELETE"
        })
        .then(getDegrees)
    }

    const updateDegree = degree => {
        return fetch(`http://localhost:8088/degrees/${degree.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(degree)
        })
            .then(getDegrees)
    }

    useEffect(() => {
        getDegrees()
    }, [])

    return (
        <DegreeContext.Provider value={{
            degrees, addDegree, deleteDegree, updateDegree
        }}>
            {props.children}
        </DegreeContext.Provider>
    )
}
