import React, { useContext } from "react"
import { DegreeSchoolContext } from "./DegreeSchoolProvider"
import { LoanContext } from "../loan/LoanProvider"
import DegreeSchool from "./DegreeSchool"
import Loan from "../loan/Loan"
import "./DegreeSchool.css"

export default (props) => {
    const { degreeSchools } = useContext(DegreeSchoolContext)
    const { loans } = useContext(LoanContext)
    return (
        <>
            <h1>My Benefit Cost Analysis</h1>
            {/* <h1>aka Degree SchoolList.js</h1>
            <div>TESTING THE RENDER</div> */}

            <h2>Finance Workbench</h2>

            <div className="tableMyCBA__List">
                <section className="tableMyCBA__section">
                    <div className="tableMyCBA__nameCareer">Occupation / Skill</div>
                    <div className="tableMyCBA__earningsAvg"> School</div>
                    <div className="tableMyCBA__earningsAvg"> Average Total Costs</div>
                    <div className="tableMyCBA__earningsAvg"> Loans Taken All Years</div>
                    <div className="tableMyCBA__earningsAvg"> Repayment Years</div>
                    <div className="tableMyCBA__earningsAvg"> Interest Rate %</div>
                    <div className="tableMyCBA__earningsAvg"> Monthly Payment</div>
                    <div className="tableMyCBA__earningsAvg"> Actions</div>
                    <div className="tableMyCBA__earningsHigh">Earnings High</div>
                <div className="tableMyCBA__earningsLow">Earnings Low</div>

                </section>
            </div>

            <div className="degreeSchool">
                {
                    degreeSchools.map(degreeschool => {
                        return <DegreeSchool key={degreeschool.id} degreeschool={degreeschool} />
                    })
                }
            </div>


            <h2>Benefit Cost Analysis</h2>
            
            <div className="tableBCA">
            <section className="tableBCA__section">
                <div className="tableBCA__nameEarnings">Occupation / Skill</div>
                <div className="tableBCA__earningsAvg"> Average Yearly Earnings</div>
                <div className="tableBCA__earningsAvg"> (B) Benefits Over 20 Years</div>
                <div className="tableBCA__nameEarnings">School</div>
                <div className="tableBCA__nameEarnings">(C) Total Costs</div>
                <div className="tableBCA__nameEarnings">Total Cash Paid</div>
                <div className="tableBCA__nameEarnings">Total Loan Amounts Paid</div>
                <div className="tableBCA__nameEarnings">Loans Taken All Years</div>
                <div className="tableBCA__nameEarnings"> Benefit To Cost Ratio (B)/(C)</div>
                {/* <div className="tableMCO__earningsHigh">Earnings High</div>
                <div className="tableMCO__earningsLow">Earnings Low</div> */}

            </section>
            </div> 

            
            {/* <h2>Finance Workbench</h2> */}

            <div className="loans">
                {
                    loans.map(loan => {
                        return <Loan key={loan.id} loan={loan} />
                    })
                }
            </div>

        </>
    )
}
