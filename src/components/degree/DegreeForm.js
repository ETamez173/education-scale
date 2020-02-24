import React, { useContext, useState, useEffect } from "react"
import { DegreeContext } from "./DegreeProvider"
import { SchoolContext } from "../school/SchoolProvider"


export default props => {
    const { schools } = useContext(SchoolContext)
    const { addDegree, degrees, updateDegree, history } = useContext(DegreeContext)
    const [degree, setDegree] = useState({})

    const editMode = props.match.params.hasOwnProperty("degreeId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newDegree = Object.assign({}, degree)
        newDegree[event.target.name] = event.target.value
        setDegree(newDegree)
    }

    const setDefaults = () => {
        if (editMode) {
            const degreeId = parseInt(props.match.params.degreeId)
            const selectedDegree = degrees.find(d => d.id === degreeId) || {}
            setDegree(selectedDegree)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [degrees])

    const constructNewDegree = () => {
        const schoolId = parseInt(degree.id)
        // console.log(schoolId)

        if (schoolId === 0) {
            window.alert("Please select a school")
        } else {
            if (editMode) {
                updateDegree({
                    id: degree.id,
                    educationName: degree.name,
                    earningsAvg: degree.earningAverage,
                    earningsHigh: degree.earningHigh,
                    earningsLow: degree.earningLow,
                    degreeNote: degree.note,
                    // customerId: parseInt(localStorage.getItem("kennel_customer"))
                    userId: parseInt(localStorage.getItem("education_customer")),
                })
                    .then(() => props.history.push("/degrees"))
            } else {
                addDegree({

                    educationName: degree.name,
                    earningsAvg: degree.earningsAverage,
                    earningsHigh: degree.earningsHigh,
                    earningsLow: degree.earningsLow,
                    degreeNote: degree.note,

                    // userId: parseInt(localStorage.getItem("education_customer")),
                })
                    .then(() => props.history.push("/"))
            }
        }
        }

    return (
        <form className="degreeForm">
            <h2 className="degreeForm__title">{editMode ? "Update Degree" : "Add Degree"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Degree name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Degree name"
                        defaultValue={degree.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Yearly Earnings Average: </label>
                    <input type="number" name="earningsAverage" required className="form-control"
                        proptype="varchar"
                        placeholder="YearlyAverage"
                        defaultValue={degree.earningsAverage}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>



            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Yearly Earnings High: </label>
                    <input type="number" name="earningsHigh" required className="form-control"
                        proptype="varchar"
                        placeholder="Yearlyhigh"
                        defaultValue={degree.earningsHigh}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Yearly Earnings Low: </label>
                    <input type="number" name="earningsLow" required className="form-control"
                        proptype="varchar"
                        placeholder="Yearlylow"
                        defaultValue={degree.earningsLow}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


         
            <fieldset>
                <div className="form-group">
                    <label htmlFor="treatment">Notes: </label>
                    <textarea type="text" name="note" className="form-control"
                        proptype="varchar"
                        value={degree.note}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewDegree()
                }}
                className="btn btn-primary">
                {editMode ? "Update Degree" : "Add Degree"}
            </button>
            <button onClick={() => {
                props.history.push(`/Degrees/edit/${degree.id}`)
            }}>Edit</button>


        </form>
    )
}
