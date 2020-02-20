import React, { useState, useEffect } from "react"

export const MySchoolOptionContext = React.createContext()

export const MySchoolOptionProvider = (props) => {
    const [myschooloptions, setMySchoolOptions] = useState([])

    const getMySchoolOptions = () => {
        return fetch("http://localhost:8088/loans")
            .then(res => res.json())
            .then(setMySchoolOptions)
    }

    // console.log(myschooloptions)

    const addMySchoolOption = myschooloption => {
        return fetch("http://localhost:8088/loans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myschooloption)
        })
            .then(getMySchoolOptions)
    }

    const deleteMySchoolOption = myschooloption => {
        return fetch(`http://localhost:8088/loans/${myschooloption.id}`, {
            method: "DELETE"
        })
        .then(getMySchoolOptions)
    }

    const updateMySchoolOption = myschooloption => {
        return fetch(`http://localhost:8088/loans/${myschooloption.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myschooloption)
        })
        .then(getMySchoolOptions)
    }

    useEffect(() => {
        getMySchoolOptions()
    }, [])

    return (
        <MySchoolOptionContext.Provider value={{
            myschooloptions, addMySchoolOption, deleteMySchoolOption, updateMySchoolOption
        }}>
            {props.children}
        </MySchoolOptionContext.Provider>
    )
}
