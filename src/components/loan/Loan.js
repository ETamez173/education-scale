import React, { useContext } from "react"
import "./Loans.css"
// import { Link } from "react-router-dom"

import { LoanContext } from "../loan/LoanProvider"

// const twentyYearEarnings = () =>
// { (loan.degreeAnnualEarnings * 20 )
// }
// const twentyYearEarnings =  (loan.degreeAnnualEarnings * 20 )




export default ({ loan }) => {
    // export default ({ loan }) => (

    const { deleteLoan } = useContext(LoanContext)

    return (

        <section className="loan">
            <h3 className="loan__name">  </h3>


            <section className="loan__section">


                <div className="loan__educationName">{loan.educationName}</div>
                <div className="loan__degreeAnnualEarnings">${loan.degreeAnnualEarnings}</div>
                <div className="loan__twentyYearEarnings">${loan.degreeAnnualEarnings * 20}</div>
                <div className="loan__schoolName">{loan.schoolName}</div>
                <div className="loan__totalAmountPaid">${loan.totalAmountPaid}</div>

                {/* these are inputs to calculate the loan , payments etc */}
             
                
                <div className="loan__cashPaid">${loan.cashPaid}</div>

                <div className="loan__totalLoanPmts">${loan.totalLoanPmts}</div>
                <div className="loan__loanAmount">${loan.loanAmount}</div>


                <div className="BCA_buttons">

                    <div className="BCA__ratio">{loan.benefitCostRatio}</div>

                    <div>
                        <div>
                            <button className="addBCANote__button">Add Note</button>
                        </div>

                        <br></br>

                        <div>
                            <button className="showBCANotes__button">Show Notes</button>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <button className="deleteFinWorkBenchItem__button"
                                onClick={() => {

                                    deleteLoan(loan)

                                }}> Delete </button>

                        </div>
                    </div>
                </div>

            </section>

        </section>
    )

}