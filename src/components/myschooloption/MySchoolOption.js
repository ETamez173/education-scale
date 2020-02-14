import React, { useContext } from "react"

import { MySchoolOptionContext } from "../myschooloption/MySchoolOptionProvider"

import "./MySchoolOption.css"

import { LoanContext } from "../loan/LoanProvider"
// const twentyYearEarnings =  (loan.degreeAnnualEarnings * 20 )


export default ({ myschooloption }) => {


    const { deleteMySchoolOption, getMySchoolOptions } = useContext(MySchoolOptionContext)

    const { getLoans } = useContext(LoanContext)

    return (

        <section className="mysSchoolOption">
            <h3 className="SCO__name">  </h3>

            <section className="SCO__section">

                <div className="SCO__educationName">{myschooloption.educationName}</div>
                <div className="SCO__schoolName">{myschooloption.schoolName}</div>
                <div className="SCO__schoolTotCost">${myschooloption.schoolTotalCost}</div>

                {/* these below are inputs items for calculatint the loan payments etc */}
                {/* <div className="SCO__loanAmount">${myschooloption.loanAmount}</div> */}
                {/* schoolTotalCost - (Cash paid + grantsOther) = loanAmount */}
                {/* <div className="SCO__loanCashPaid">${myschooloption.cashPaid}</div>
                <div className="SCO__loanGrantsAndOther">${myschooloption.grantsAndOther}</div>

                <div className="SCO__loanLength">{myschooloption.loanLengthMonths} Months</div>
                <div className="SCO__loanRate">{myschooloption.loanRate}%</div>
                <div className="SCO__loanPmt">${myschooloption.loanPmt}</div>
                <div className="SCO__loanPmt">${myschooloption.id}</div> */}
         

                <div className="BCA_buttons">

                    {/* <div className="BCA__ratio">{loan.benefitCostRatio}</div> */}

                    <div>

                        <button className="runBenefitCostAnalysis__button"
                            onClick={() => {

                                // constructNewBenefitObject()
                                // this creates the loan object
                                // see code for degree
                            }}
                        >
                            Run Benefit Analysis
                </button>
                <br></br>
                <br></br>
                <br></br>
                        <div>
                            <button className="deleteSchoolSearchItem__button"
                                onClick={() => {
                                    // const { deleteMySchoolOption } = useContext(MySchoolOptionContext)
                                    // removeMySchoolOption(myschooloption)
                                    deleteMySchoolOption(myschooloption)
                                    // getMySchoolOptions()
                                    .then(getLoans)
                                    .then(getMySchoolOptions)
                                 
                                }}>  Delete works but shows deleted item unless refresh page</button>
                        </div>
         
                
                    </div>
                </div>

            </section>

        </section>
    )



}