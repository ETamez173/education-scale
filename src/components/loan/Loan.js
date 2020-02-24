import React, { useContext, useState, useEffect } from "react"
import "./Loans.css"
// import { Link } from "react-router-dom"

import { LoanContext } from "../loan/LoanProvider"

// const twentyYearEarnings = () =>
// { (loan.degreeAnnualEarnings * 20 )
// }
// const twentyYearEarnings =  (loan.degreeAnnualEarnings * 20 )


// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2
//   })


export default props => {
    // export default ({ loan }) => {
    // export default ({ loan }) => (

    const { addLoan, deleteLoan, updateLoan, history } = useContext(LoanContext)

    const [loan, setLoan] = useState({})
    const [note, setNote] = useState()




    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }


    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newLoan = Object.assign({}, loan)
        newLoan[event.target.name] = event.target.value
        setLoan(newLoan)
    }



    const editLoanFactors = () => {
        const loanPmt = loan.loanPmt;
        const id = props.loan.id
        console.log(id)
        const totcost = loan.schoolTotalCost
        console.log(totcost)
        const cashpaid = loan.cashPaid
        console.log(loan.cashPaid)
        // const loanAmountCalc = loan.schoolTotalCost 
        // console.log(loanAmountCalc)
        // const note = "";
        const note = loan.note
        console.log(loan.note)


        console.log(props.loan.id)

        updateLoan({

            id: props.loan.id,

            educationName: props.loan.educationName,
            schoolName: props.loan.schoolName,
            annualSchoolCost: props.loan.annualSchoolCost,
            schoolTotalCost: props.loan.schoolTotalCost,
            loanAmount: props.loan.loanAmount,
            loanRate: props.loan.loanRate,
            // loanRate: parseInt(loan.interest),
            loanLengthYears: parseInt(props.loan.loanLengthYears),
            // loanLengthYears: parseInt(loan.years),
            loanLengthMonths: parseInt(props.loan.loanLengthMonths),
            // loanLengthMonths: parseInt(loan.years * 12),
            loanPmt: parseInt(props.loan.loanPmt),
            totalLoanPmts: parseInt(props.loan.totalLoanPmts),
            // totalLoanPmts: round(loan.loanPmt * loan.years * 12, 0),
            cashPaid: parseInt(props.loan.cashPaid),
            totalAmountPaid: parseInt(props.loan.totalAmountPaid),
            // totalAmountPaid: round((loan.loanPmt * loan.years * 12) + parseInt(loan.cashPaid), 0),
            degreeAnnualEarnings: parseInt(props.loan.degreeAnnualEarnings),
            twentyYearEarnings: parseInt(props.loan.twentyYearEarnings),
            benefitCostRatio: props.loan.benefitCostRatio,
            // benefitCostRatio: round(props.loan.twentyYearEarnings / ((props.loan.loanPmt * props.loan.years * 12) + parseInt(props.loan.cashPaid))),
            // benefitCostRatio: round(props.loan.twentyYearEarnings / ((props.loan.loanPmt * props.loan.years * 12) + parseInt(props.loan.cashPaid))),

            finWorkBenchStep: "true",
            benefitCostAnalysis: "true",
            note: loan.note,

            userId: parseInt(localStorage.getItem("education_customer")),
            step: "updateLoan_under_loan.js"
        })



    }


    return (

        <section className="loan">
            <h3 className="loan__name">  </h3>


            <section className="loan__section">


                <div className="vert__align"> <div className="loan__educationName">{props.loan.educationName}</div></div>
                {/* <div className="vert__align">  <div className="loan__degreeAnnualEarnings">{parseInt((props.loan.degreeAnnualEarnings.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })))}</div></div> */}

                <div className="vert__align">  <div className="loan__degreeAnnualEarnings">${parseInt((props.loan.degreeAnnualEarnings))}</div></div>
                <div className="vert__align"> <div className="loan__twentyYearEarnings">${parseInt((props.loan.twentyYearEarnings))}</div></div>
                <div className="vert__align"> <div className="loan__schoolName">{props.loan.schoolName}</div></div>
                <div className="vert__align"><div className="loan__totalAmountPaid">${parseInt((props.loan.totalAmountPaid))}</div></div>

                {/* these are inputs to calculate the loan , payments etc */}


                <div className="vert__align"> <div className="loan__cashPaid">${parseInt((props.loan.cashPaid))}</div></div>

                <div className="vert__align"><div className="loan__totalLoanPmts">${parseInt((props.loan.totalLoanPmts))}</div></div>
                <div className="vert__align"><div className="loan__loanAmount">${parseInt((props.loan.loanAmount))}</div></div>

                
                <div className="vert__align"><div className="BCA__ratio">{props.loan.benefitCostRatio}</div></div>

                <div className="BCA_buttons">

               

                    <div>


            

                        <div>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="treatment">Add /Edit Notes: </label>
                            <textarea type="text" name="note" className="form-control"
                                proptype="varchar"
                                value={loan.note}
                                onChange={handleControlledInputChange}>
                            </textarea>
                        </div>
                    </fieldset>
                    {/* <div className="loan__note">{props.loan.note}</div> */}

                    <div>
                        <button className="addLoanInputs__button"
                            onClick={evt => {
                                // evt.preventDefault()

                                editLoanFactors()

                            }}>
                            Save Changes
                                </button>

                    </div>

                </div>
                        <div>
                            <button className="deleteFinWorkBenchItem__button"
                                onClick={() => {

                                    deleteLoan(props.loan)

                                }}> Delete This BCA</button>

                        </div>
                    </div>




                </div>

            </section>

        </section>
    )

}