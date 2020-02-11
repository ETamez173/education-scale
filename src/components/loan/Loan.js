import React from "react"
import "./Loans.css"
// import { Link } from "react-router-dom"


// const twentyYearEarnings = () =>
// { (loan.degreeAnnualEarnings * 20 )
// }
// const twentyYearEarnings =  (loan.degreeAnnualEarnings * 20 )





export default ({ loan }) => (



    
    <section className="loan">
        <h3 className="loan__name">  </h3>


        <section className="loan__section">


            <div className="loan__educationName">{loan.educationName}</div>
            <div className="loan__degreeAnnualEarnings">${loan.degreeAnnualEarnings}</div>
            <div className="loan__twentyYearEarnings">${loan.degreeAnnualEarnings * 20}</div>
            <div className="loan__schoolName">{loan.schoolName}</div>
            <div className="loan__totalAmountPaid">${loan.totalAmountPaid}</div>
            <div className="loan__cashPaid">${loan.cashPaid}</div>
            <div className="loan__totalLoanPmts">${loan.totalLoanPmts}</div>
            <div className="loan__loanAmount">${loan.loanAmount}</div>
     

            <div className="BCA_buttons">

                <div className="BCA__ratio">{loan.benefitCostRatio}</div>

                <div>
                    <div>
                        <button className="saveBCA__button">Save Analysis</button>
                    </div>


                    <div>
                        <button className="deleteBCA__button">Delete Analysis</button>
                    </div>
                </div>
            </div>

        </section>

    </section>
)