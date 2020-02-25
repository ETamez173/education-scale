import React, { useContext } from "react"
import { LoanContext } from "./LoanProvider"
import Loan from "./Loan"
import FinWorkBench from "./FinWorkBench"
import "./Loans.css"
// import LoanForm from "./LoanForm"

import { FinWorkBenchContext } from "../loan/FinWorkBenchProvider"
export default (props) => {
    const { loans } = useContext(LoanContext)
    // const { finworkbenchs } = useContext(FinWorkBenchContext)
    return (
        <>

        
            <h1>Benefit Cost Analysis</h1>
    

            <div className="tableBCA">
                <section className="tableBCA__section">
                    <div className="tableBCA__nameEarnings">Degree</div>
                    <div className="tableBCA__earningsAvg"> Average Yearly Earnings</div>
                    <div className="tableBCA__earningsAvg"> (B) Benefits Over 20 Years</div>
                    <div className="tableBCA__nameEarnings">School / Program </div>
                    <div className="tableBCA__nameEarnings">(C) Total Costs</div>
                    <div className="tableBCA__nameEarnings">Total Cash Paid</div>
                    <div className="tableBCA__nameEarnings">Total Loan Amounts Paid</div>
                    <div className="tableBCA__nameEarnings">Loans Taken All Years</div>
                    <div className="tableBCA__nameEarnings"> Benefit To Cost Ratio (B)/(C)</div>
                    <div className="tableBCA__nameEarnings"> Notes</div>
                    {/* <div className="tableMCO__earningsHigh">Earnings High</div>
                <div className="tableMCO__earningsLow">Earnings Low</div> */}

                </section>
            </div>



            <div className="loans">
                {
                    loans.map(loan => {

                        const ActiveUser = localStorage.getItem("education_customer")

                        if (loan.finWorkBenchStep === "true" && loan.benefitCostAnalysis === "true" && parseInt(ActiveUser) === loan.userId) {

                            // console.log(loan.finWorkBenchStep)

                            // console.log(loan.benefitCostAnalysis)

                            return <Loan key={loan.id} loan={loan} />
                        }
                    })

                }
            </div>

     


        </>
    )
}
