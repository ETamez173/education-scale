import React, { useContext } from "react"
import "./Loans.css"
import { LoanContext } from "../loan/LoanProvider"
import { DegreeContext } from "../degree/DegreeProvider"
import { FinWorkBenchContext } from "../loan/FinWorkBenchProvider"
import { DegreeSchoolContext } from "../degreeschool/DegreeSchoolProvider"
import { MySchoolOptionContext } from "../myschooloption/MySchoolOptionProvider"
import DegreeSchool from "../degreeschool/DegreeSchool"

// const twentyYearEarnings =  (loan.degreeAnnualEarnings * 20 )

export default ({ finworkbench, degreeSchool, loan }) => {


    const { finworkbenchs, deleteFinWorkBench, addFinWorkBench } = useContext(FinWorkBenchContext)
    // const { degrees, addDegree } = useContext(DegreeContext)
    const { loans, addLoan } = useContext(LoanContext)
    // const { deleteMySchoolOption, getMySchoolOptions } = useContext(MySchoolOptionContext)
    // const { degreeschools, deleteDegreeSchool } = useContext(DegreeSchoolContext)



    const constructBCAobject = () => {

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

        addFinWorkBench({

// took this from DegreeSchool.js Loanlist does a complex filter to get working


            userId: parseInt(ActiveUser),
            educationName: degreeSchool.degree.educationName,
            schoolName: degreeSchool.school.schoolName,
            annualSchoolCost: degreeSchool.annualCost,
            schoolTotalCost: degreeSchool.totalCost,

            // educationName: "",
            // schoolName: "",
            // annualSchoolCost: "",
            // schoolTotalCost: "",


            //  these items below are blank until used later
            loanAmount: 1,
            loanRate: 1,
            loanLengthMonths: 1,
            loanPmt: 1,
            totalLoanPmts: 1,
            cashPaid: 1,
            totalAmountPaid: 1,
            degreeAnnualEarnings: 2,
            twentyYearEarnings: 40,
            benefitCostRatio: 10,
            benefitCostAnalysis: "true"

        })

    }


    return (


        <>
            <section className="finWorkBench">
                <h3 className="loan__name">  </h3>

                <section className="loan__section">

                    {/* <div className="loan__educationName">{loans.educationName}</div> */}
                    <div className="loan__educationName">{finworkbench.educationName}</div>
                    {/* <div className="loan__schoolName">{loans.schoolName}</div> */}
                    <div className="loan__schoolName">{finworkbench.schoolName}</div>


                    <div className="loan__degreeAnnualEarnings">${finworkbench.schoolTotalCost}</div>
                    <div className="loan__degreeAnnualEarnings">${finworkbench.schoolTotalCost}</div>
                    {/* these below are inputs items for calculating the loan payments etc */}
                    <div className="loan__loanAmount">${finworkbench.loanAmount}</div>
                    {/* schoolTotalCost - (Cash paid + grantsOther) = loanAmount */}

                   {/* <div className="loan__loanAmount">${finWorkBench.cashPaid}</div>
                            <div className="loan__loanAmount">${finWorkBench.grantsAndOther}</div> */}

                        <div className="loan__totalLoanPmts">{finworkbench.loanLengthMonths} Months</div>
                        <div className="loan__totalLoanPmts">{finworkbench.loanRate}%</div>
                        <div className="loan__totalLoanPmts">${finworkbench.loanPmt}</div> 
                    {/* <div className="loan__twentyYearEarnings">${finWorkBench.degreeAnnualEarnings * 20}</div> */}

                    {/* <div className="loan__totalAmountPaid">${finWorkBench.totalAmountPaid}</div>

            <div className="loan__cashPaid">$cash{finWorkBench.cashPaid}</div> */}
                    {/* <div className="BCA__ratio">{loan.benefitCostRatio}</div> */}


                    <div className="BCA_buttons">
                        <div>

                            <button className="addLoanInputs__button"
                                onClick={() => {

                                    // editBCAobject()
                                    // this sets up the edit thht looks like an form

                                    // see code for degree

                                }}>
                                Enter Savings, Scholarships, and Grant Information
                        </button>
                            <br></br>
                            <br></br>
                            <button className="runBenefitCostAnalysis__button"
                                onClick={() => {

                                    constructBCAobject()
                                    // this creates the loan object

                                    // see code for degree

                                }}>Run Benefit Analysis
                        </button>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div>
                                <button className="deleteFinWorkBenchItem__button"

                                    onClick={() => {

                                        deleteFinWorkBench(finworkbench)

                                    }}> Delete
                        </button>
                            </div>

                        </div>
                    </div>

                </section>

            </section>
        </>
    )

}