import React, { useState, useEffect } from "react"

export const DegreeSchoolContext = React.createContext()

export const DegreeSchoolProvider = (props) => {
    const [degreeSchools, setDegreeSchools] = useState([])


    // return fetch('http://localhost:8088/friends?_expand=user', {

    const getDegreeSchools = () => {
        // return fetch("http://localhost:8088/degreeSchools")
        return fetch("http://localhost:8088/degreeSchools?_expand=degree&_expand=school")
            //   return fetch("http://localhost:8088/degreeSchools?_expand=school")
            .then(res => res.json())
            .then(setDegreeSchools)
    }
    // console.log(degreeSchools)


    const addDegreeSchool = degreeSchool => {
        return fetch("http://localhost:8088/degreeSchools", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(degreeSchool)
        })
            .then(getDegreeSchools).sort(function(a, b){return a-b});
    }

    const deleteDegreeSchool = degreeSchool => {
        return fetch(`http://localhost:8088/degreeSchools/${degreeSchool.id}`, {
            method: "DELETE"
        })
            .then(getDegreeSchools).sort(function(a, b){return a-b});
    }


    const patchDegreeSchool = (degreeSchool, id) => {
        return fetch(`http://localhost:8088/degreeSchools/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(degreeSchool)
        })
        .then(getDegreeSchools).sort(function(a, b){return a-b});
    }



    const updateDegreeSchool = degreeSchool => {
        return fetch(`http://localhost:8088/degreeSchools/${degreeSchool.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(degreeSchool)
        })
            .then(getDegreeSchools).sort(function(a, b){return a-b});
    }

    useEffect(() => {
        getDegreeSchools()
    }, [])

    return (
        <DegreeSchoolContext.Provider value={{
            degreeSchools, addDegreeSchool, deleteDegreeSchool, updateDegreeSchool, patchDegreeSchool
        }}>
            {props.children}
        </DegreeSchoolContext.Provider>
    )
}
