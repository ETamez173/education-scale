import React, { useContext } from "react"

import { MySchoolOptionContext } from "../myschooloption/MySchoolOptionProvider"

import "./MySchoolOption.css"
import { LoanContext } from "../loan/LoanProvider"
import { DegreeContext } from "../degree/DegreeProvider"
import { DegreeSchoolContext } from "../degreeschool/DegreeSchoolProvider"
import { FinWorkBenchContext } from "../loan/FinWorkBenchProvider"
// const twentyYearEarnings =  (loan.degreeAnnualEarnings * 20 )


export default ({ myschooloption, finworkbench, degreeSchool, loan, degree }) => {


    const { finworkbenchs, deleteFinWorkBench, addFinWorkBench } = useContext(FinWorkBenchContext)
    const { deleteMySchoolOption, getMySchoolOptions } = useContext(MySchoolOptionContext)
    const { getLoans, loans, addLoan, patchLoan } = useContext(LoanContext)
    const { getDegrees, degrees, addDegree } = useContext(DegreeContext)
    const { degreeSchools, deleteDegreeSchool } = useContext(DegreeSchoolContext)

    const constructWorkBenchLoan = () => {

        //     /// Creating the object right here >>>>>

        const ActiveUser = localStorage.getItem("education_customer")

        // const userId = parseInt(localStorage.getItem("educationScale_user"));


        const userId = null;
        const educationName = null;
        const schoolName = null;
        const annualSchoolCost = null;
        const schoolTotalCost = null;
        //  these items below are blank until used later
        const loanAmount = null;
        const loanRate = null;
        const loanLengthMonths = null;
        const loanPmt = null;
        const totalLoanPmts = null;
        const cashPaid = null;
        const totalAmountPaid = null;
        const degreeAnnualEarnings = null;
        const twentyYearEarnings = null;
        const benefitCostRatio = null;
        const benefitCostAnalysis = null;



        addLoan({

            // addFinWorkBench({

            // took this from DegreeSchool.js Loanlist does a complex filter to get working


            userId: parseInt(ActiveUser),

            ///// THIS IS THE BAD CODE CAUSING THE NOT DEFINED ERROR

            // schoolName: degreeSchools.schoolName,
            // annualSchoolCost: degreeSchools.annualCost,
            // schoolTotalCost: degreeSchools.totalCost,

            educationName: myschooloption.educationName,
            schoolName: myschooloption.schoolName,
            annualSchoolCost: myschooloption.annualSchoolCost,
            schoolTotalCost: myschooloption.schoolTotalCost,
       
            //  these items below are blank until used later
            loanAmount: 0,
            loanRate: 7,
            loanLengthMonths: 120,
            loanLengthYears: 10,
            loanPmt: "",
            totalLoanPmts: "",
            cashPaid: 0,
            totalAmountPaid:  "",
            degreeAnnualEarnings:  myschooloption.degreeAnnualEarnings,
            twentyYearEarnings: "",
            benefitCostRatio: "",
            finWorkBenchStep: "true",
            benefitCostAnalysis: "false"

        })

    }


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

                        <button className="runBenefitCostAnalysisStep1__button"
                            onClick={() => {

                                constructWorkBenchLoan()



                                // this creates the loan object
                                // see code for degree
                            }}
                        >
                            Run Benefit Analysis
                </button>


                        {/* <button className="runBenefitCostAnalysisStep1__button"
                            onClick={() => {


                                patchLoan({benefitCostAnalysis: true, }, loans.id).then(() => {

                                    // console.log(patchLoan())
                      
                                });

                            }}> Run Benefit Analysis </button> */}



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