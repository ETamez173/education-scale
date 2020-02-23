import React, { useContext, useState, useEffect } from "react"
import { LoanContext } from "../loan/LoanProvider"
import { DegreeContext } from "../degree/DegreeProvider"
import { DegreeSchoolContext } from "../degreeschool/DegreeSchoolProvider"
import { FinWorkBenchContext } from "../loan/FinWorkBenchProvider"
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider"
import "./MySchoolOption.css"

export default props => {


    const { finworkbenchs, deleteFinWorkBench, addFinWorkBench } = useContext(FinWorkBenchContext)
    const { getLoans, loans, addLoan, deleteLoan, patchLoan, history } = useContext(LoanContext)
    const { getDegrees, degrees, addDegree } = useContext(DegreeContext)
    const { degreeSchools, deleteDegreeSchool } = useContext(DegreeSchoolContext)
    const { mycareeroptions, addMyCareerOption, deleteMyCareerOption } = useContext(MyCareerOptionContext)

    const [loan, setLoan] = useState({})
    const [mycareeroption, setMyCareerOption] = useState({})

    const constructWorkBenchLoan = () => {

        const ActiveUser = localStorage.getItem("education_customer")
        const userId = null;
        const educationName = null;
        const schoolName = null;
        const annualSchoolCost = null;
        const schoolTotalCost = null;
        const loanAmount = null;
        const loanRate = null;
        const loanLengthMonths = null;
        const loanPmt = null;
        const totalLoanPmts = null;
        const cashPaid = null;
        const totalAmountPaid = null;
        const degreeAnnualEarnings = props.loan.degreeAnnualEarnings;
        const twentyYearEarnings = props.loan.twentyYearEarnings;
        const benefitCostRatio = null;
        const benefitCostAnalysis = null;
        console.log(twentyYearEarnings)


        addLoan({

            // took this from DegreeSchool.js Loanlist does a complex filter to get working

            userId: parseInt(ActiveUser),

            /// These work with props.
            educationName: props.loan.educationName,
            schoolName: props.loan.schoolName,
            annualSchoolCost: props.loan.annualSchoolCost,
            schoolTotalCost: props.loan.schoolTotalCost,
            //  these items below are set at #2 markers and show when the object was
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
            benefitCostRatio: 2,
            finWorkBenchStep: "true",
            benefitCostAnalysis: "false",
            step: "loan"

        })
        console.log(degreeAnnualEarnings)
        console.log(twentyYearEarnings)
    }



    const removeMyCareerOption = () => {

        deleteLoan(props.loan)
    }



    return (

        <section className="SCO__section">
            <section className="mySchoolOption">

                <div className="SCO__educationName">{props.loan.educationName}</div>
                <div className="SCO__schoolName">{props.loan.schoolName}</div>
                <div className="SCO__schoolTotCost">{(props.loan.schoolTotalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }))}</div>

                <div className="BCA_buttons">

                    <div className="runBCA__button">

                        <button className="runBenefitCostAnalysisStep1__button"
                            onClick={() => {

                                constructWorkBenchLoan()
                            }}
                        >
                            Run Benefit Analysis
                </button>
                        <br></br>
                        <div className="deleteMyMCO__button">
                            <button className="deleteSchoolSearchItem__button"
                                onClick={() => {

                                    removeMyCareerOption()

                                }}>  Delete </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )

}