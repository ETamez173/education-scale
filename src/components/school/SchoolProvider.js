import React, { useState, useEffect } from "react"

export const SchoolContext = React.createContext()

export const SchoolProvider = (props) => {
    const [schools, setSchools] = useState([])

    const getSchools = () => {
        // return fetch("http://localhost:8088/schools?_expand=degree")
        return fetch("http://localhost:8088/schools")
    
            .then(res => res.json())
            .then(setSchools)
    }

    const addSchool = school => {
        return fetch("http://localhost:8088/schools", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(school)
        })
            .then(getSchools)
    }

    const deleteSchool = school => {
        return fetch(`http://localhost:8088/schools/${school.id}`, {
            method: "DELETE"
        })
        .then(getSchools)
    }

    const updateSchool = school => {
        return fetch(`http://localhost:8088/schools/${school.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(school)
        })
            .then(getSchools)
    }

    useEffect(() => {
        getSchools()
    }, [])

    return (
        <SchoolContext.Provider value={{
            schools, addSchool, deleteSchool, updateSchool
        }}>
            {props.children}
        </SchoolContext.Provider>
    )
}
