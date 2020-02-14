import React, { useState, useEffect } from "react"

export const MyCareerOptionContext = React.createContext()

export const MyCareerOptionProvider = (props) => {
    const [mycareeroptions, setMyCareerOptions] = useState([])

    const getMyCareerOptions = () => {
        return fetch("http://localhost:8088/mycareeroptions")
            .then(res => res.json())
            .then(setMyCareerOptions)
    }

    const addMyCareerOption = mycareeroption => {
        return fetch("http://localhost:8088/mycareeroptions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mycareeroption)
        })
            .then(getMyCareerOptions)
    }


    const moveToSearchMyCareerOption = (mycareeroption, id) => {
        // return fetch(`http://localhost:8088/tasks/${id}`, {
            console.log(mycareeroption, id)
        // console.log(id)
        return fetch(`http://localhost:8088/mycareeroptions/${id}}`, {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mycareeroption)
        })
            .then(getMyCareerOptions)
    }





    const deleteMyCareerOption = mycareeroption => {
        return fetch(`http://localhost:8088/mycareeroptions/${mycareeroption.id}`, {
            method: "DELETE"
        })
        .then(getMyCareerOptions)
    }

    const updateMyCareerOption = mycareeroption => {
        return fetch(`http://localhost:8088/mycareeroptions/${mycareeroption.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mycareeroption)
        })
        .then(getMyCareerOptions)
    }

    useEffect(() => {
        getMyCareerOptions()
    }, [])

    return (
        <MyCareerOptionContext.Provider value={{
            mycareeroptions, addMyCareerOption, deleteMyCareerOption, updateMyCareerOption,
            moveToSearchMyCareerOption
        }}>
            {props.children}
        </MyCareerOptionContext.Provider>
    )
}
