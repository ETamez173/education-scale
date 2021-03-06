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

            <h1>My Benefit Cost Analysis</h1>
            



            <h2>Finance Workbench</h2>


            <div className="tableMyCBA__List">
                <section className="tableMyCBA__section">
                    <div className="tableMyCBA__earningsAvg">Degree</div>
                    {/* <div className="loan__lineFiller0">filler</div> */}
                    <div className="tableMyCBA__earningsAvg"> School / Program</div>
                    <div className="tableMyCBA__earningsAvg"> Average Total Costs</div>
                    <div className="tableMyCBA__earningsAvg"> Savings, Scholarships, Grants </div>
                    <div className="tableMyCBA__earningsAvg"> Loans Taken All Years</div>
                    <div className="tableMyCBA__earningsAvg"> Repayment Years</div>
                    <div className="tableMyCBA__earningsAvg"> Interest Rate %</div>
                    <div className="tableMyCBA__earningsAvg"> Monthly Payment</div>
                    <div className="tableMyCBA__earningsAvg"> Actions</div>
                    {/* <div className="tableMyCBA__earningsHigh">Earnings High</div> */}
                    {/* <div className="tableMyCBA__earningsLow">Earnings Low</div> */}

                </section>
            </div>



            <div className="finworkbenchs">

                {
                    // loans.map(finWorkBench => {s
                    loans.map(loan => {
                    

                        if (loan.finWorkBenchStep === "true" &&  loan.benefitCostAnalysis === "false" ) {
                            // console.log( loan.finWorkBenchStep)
                            // console.log( loan.benefitCostAnalysis)
                            return <FinWorkBench key={loan.id} loan={loan} />
                            // return <FinWorkBench key={finworkbench.id} finworkbench={finworkbench} />
                        }
                    })
                }
            </div>




            <h2>Benefit Cost Analysis</h2>
    

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
                    {/* <div className="tableMCO__earningsHigh">Earnings High</div>
                <div className="tableMCO__earningsLow">Earnings Low</div> */}

                </section>
            </div>



            <div className="loans">
                {
                    loans.map(loan => {



                        if (loan.finWorkBenchStep === "true" && loan.benefitCostAnalysis === "true" ) {

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
