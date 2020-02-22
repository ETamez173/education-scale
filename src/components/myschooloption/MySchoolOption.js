import React, { useContext, useState, useEffect } from "react"

import { MySchoolOptionContext } from "../myschooloption/MySchoolOptionProvider"

import "./MySchoolOption.css"
import { LoanContext } from "../loan/LoanProvider"
import { DegreeContext } from "../degree/DegreeProvider"
import { DegreeSchoolContext } from "../degreeschool/DegreeSchoolProvider"
import { FinWorkBenchContext } from "../loan/FinWorkBenchProvider"
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider"
// const twentyYearEarnings =  (loan.degreeAnnualEarnings * 20 )

export default props => {
// export default ({ myschooloption, mycareeroption, finworkbench, degreeSchool, loan, degree }) => {


    const { finworkbenchs, deleteFinWorkBench, addFinWorkBench } = useContext(FinWorkBenchContext)
    const { myschooloptions, deleteMySchoolOption, getMySchoolOptions } = useContext(MySchoolOptionContext)
    const { getLoans, loans, addLoan, patchLoan } = useContext(LoanContext)
    const { getDegrees, degrees, addDegree } = useContext(DegreeContext)
    const { degreeSchools, deleteDegreeSchool } = useContext(DegreeSchoolContext)
    const { mycareeroptions, addMyCareerOption, deleteMyCareerOption } = useContext(MyCareerOptionContext)

    const [loan, setLoan] = useState({})
    const [mycareeroption, setMyCareerOption] = useState({})

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
        const degreeAnnualEarnings = props.myschooloption.degreeAnnualEarnings;
    
        // console.log(degreeAnnualEarnings)
        const twentyYearEarnings = props.myschooloption.twentyYearEarnings;
        // console.log(myschooloption.earningsAvg)
        // console.log(twentyYearEarnings)
        const benefitCostRatio = null;
        const benefitCostAnalysis = null;

        // const degreeAnnualEarnings = mycareeroptions.earningsAvg;
        // const twentyYearEarnings = mycareeroptions.earningsAvg * 20;
        console.log(twentyYearEarnings)
        // console.log(twentyYearEarnings)



        addLoan({

            // addFinWorkBench({

            // took this from DegreeSchool.js Loanlist does a complex filter to get working


            userId: parseInt(ActiveUser),

            ///// THIS IS THE BAD CODE CAUSING THE NOT DEFINED ERROR

            // schoolName: degreeSchools.schoolName,
            // annualSchoolCost: degreeSchools.annualCost,
            // schoolTotalCost: degreeSchools.totalCost,


            /// These work with props.
            educationName: props.myschooloption.educationName,
            schoolName: props.myschooloption.schoolName,


            annualSchoolCost: props.myschooloption.annualSchoolCost,
            schoolTotalCost: props.myschooloption.schoolTotalCost,

            //  these items below are blank until used later
            loanAmount: 2,
            loanRate: 2,
            loanLengthMonths: 2,
            loanLengthYears: 2,
            loanPmt: 2,
            totalLoanPmts: 2,
            cashPaid: 2,
            totalAmountPaid: 2,
            degreeAnnualEarnings: degreeAnnualEarnings,
            twentyYearEarnings: twentyYearEarnings,

            // twentyYearEarnings: twentyYearEarnings,
            benefitCostRatio: 2,
            finWorkBenchStep: "true",
            benefitCostAnalysis: "false",
            step: "myschooloption"

        })
        console.log(degreeAnnualEarnings)
        console.log(twentyYearEarnings)
    }


    return (

        <section className="mysSchoolOption">
            <h3 className="SCO__name">  </h3>

            <section className="SCO__section">

                <div className="SCO__educationName">{props.myschooloption.educationName}</div>
                <div className="SCO__schoolName">{props.myschooloption.schoolName}</div>
                <div className="SCO__schoolTotCost">${props.myschooloption.schoolTotalCost}</div>

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
                                    deleteMySchoolOption(myschooloptions)
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