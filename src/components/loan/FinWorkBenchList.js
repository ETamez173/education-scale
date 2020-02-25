import React, { useContext } from "react"
import { LoanContext } from "./LoanProvider"
import Loan from "./Loan"
import FinWorkBench from "./FinWorkBench"
import "./Loans.css"

import { FinWorkBenchContext } from "./FinWorkBenchProvider"
export default (props) => {
    const { loans } = useContext(LoanContext)
    // console.log("workbenchlist", loans)
    const { finworkbenchs } = useContext(FinWorkBenchContext)
    return (
        <>

       
        

            <h1>Financial Workbench</h1>


            <div className="tableMyCBA__List">
                <section className="tableMyCBA__section">
                    <div className="tableMyCBA__nameCareer">Degree</div>
                    <div className="tableMyCBA__earningsAvg"> School / Program</div>
                    <div className="tableMyCBA__earningsAvg"> Average Total Costs</div>
                    <div className="tableMyCBA__earningsAvg"> Savings, Scholarships, Grants</div>
                    <div className="tableMyCBA__earningsAvg"> Loans Taken All Years</div>
                    <div className="tableMyCBA__earningsAvg"> Repayment Years</div>
                    <div className="tableMyCBA__earningsAvg"> Interest Rate %</div>
                    <div className="tableMyCBA__earningsAvg"> Monthly Payment</div>
                    <div className="tableMyCBA__earningsAvg"> Actions</div> 
                    {/* <div className="tableMyCBA__earningsHigh">Earnings High</div>
                <div className="tableMyCBA__earningsLow">Earnings Low</div>  */}

                </section>
            </div>



            <div className="finworkbenchs">

                {
                    // loans.map(finWorkBench => {s
                    console.log(loans)||
                    loans.map(loan => {
                        const ActiveUser = localStorage.getItem("education_customer")

                        if (loan.finWorkBenchStep === "true" &&  loan.benefitCostAnalysis === "false" && parseInt(ActiveUser) === loan.userId) {
                            // console.log( loan.finWorkBenchStep)
                            // console.log( loan.benefitCostAnalysis)
                            return <FinWorkBench key={loan.id} loan={loan} />
                            // return <FinWorkBench key={finworkbench.id} finworkbench={finworkbench} />
                        }
                    })
                }
            </div>


        </>
    )
}
