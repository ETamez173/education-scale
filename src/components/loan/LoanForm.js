import React, { useContext, useState, useEffect } from "react"

import { LoanContext } from "../loan/LoanProvider"
// import { DegreeContext } from "../degree/DegreeProvider"
import { FinWorkBenchContext } from "../loan/FinWorkBenchProvider"
import { DegreeSchoolContext } from "../degreeschool/DegreeSchoolProvider"
// import { MySchoolOptionContext } from "../myschooloption/MySchoolOptionProvider"

export default props => {
    const { loans, addLoan, deleteLoan, updateLoan } = useContext(LoanContext)
    const { finworkbenchs, deleteFinWorkBench, addFinWorkBench } = useContext(FinWorkBenchContext)
    // const { degrees, addDegree, deleteDegree } = useContext(DegreeContext)
    
    // const { deleteMySchoolOption, getMySchoolOptions } = useContext(MySchoolOptionContext)
    const { degreeSchools, deleteDegreeSchool } = useContext(DegreeSchoolContext)
// debugger
    const [loan, setLoan] = useState({})

    const ActiveUser = localStorage.getItem("education_customer")
    
    const editMode = props.match.params.hasOwnProperty("loanId")
    // const editMode = props.match.params.hasOwnProperty(1)

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newLoan = Object.assign({}, loan)
        newLoan[event.target.name] = event.target.value
        setLoan(newLoan)
    }

    const setDefaults = () => {
        if (editMode) {
            // const loanId = parseInt(1, 10)
            const loanId = parseInt(props.match.params.loanId, 10)
            const selectedLoan = loans.find(l => l.id === loanId) || {}
            setLoan(selectedLoan)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [loans])

    const constructNewLoan = () => {

        
        // const locationId = parseInt(animal.locationId)

        // if (locationId === 0) {
        //     window.alert("Please select a location")
        // } 
        
        // else {
            if (editMode) {
                updateLoan({
                    id: loan.id,
                    educationName: loan.educationName,
                    schoolName: loan.schoolName,
                    schoolTotalCost: loan.schoolTotalCost,
                    cashPaid: 0,
                    loanAmount: loan.schoolTotalCost - loan.cashPaid,
                    loanRate: 7,
                    loanLengthYears: 10,
                    // loanLengthMonths: 120,
                    loanPmt: "",
                    totalLoanPmts: "",
                    
                    // name: animal.name,
                    // breed: animal.breed,
                    // locationId: locationId,
                    // treatment: animal.treatment,
                    userId: localStorage.getItem("education_customer")
                   
                })
                    .then(() => props.history.push("/analysis"))
            } else {
                addLoan({
            //         // name: animal.name,
            //         // breed: animal.breed,
            //         // locationId: locationId,
            //         // treatment: animal.treatment,
                    userId: localStorage.getItem("education_customer")
                })
                   .then(() => props.history.push("/loans"))
            }
        }
    

    // }



    return (
        <form className="loanForm">
            <h2 className="loanForm__title">{editMode ? "Update Loan" : "Add Loan"}</h2>
            
            
           
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Cash paid: </label>
                    <input type="text" name="cashPaid" required autoFocus className="form-control"
                        proptype="int"
                        placeholder="Cash Paid"
                        defaultValue={loan.cashPaid}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            
            
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Loan principal: </label>
                    <input type="text" name="principal" required autoFocus className="form-control"
                        proptype="int"
                        placeholder="Loan principal"
                        defaultValue={loan.principal}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Loan interest: </label>
                    <input type="text" name="interest" required autoFocus className="form-control"
                        proptype="int"
                        placeholder="Loan interest"
                        defaultValue={loan.interest}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Loan Years: </label>
                    <input type="text" name="payments" required autoFocus className="form-control"
                        proptype="int"
                        placeholder="Loan payments"
                        defaultValue={loan.years}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewLoan()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Add Loan"}
            </button>
        </form>
    )

 


            }

