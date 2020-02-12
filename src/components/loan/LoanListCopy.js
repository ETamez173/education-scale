import React, { useContext } from "react"
import { LoanContext } from "./LoanProvider"
import Loan from "./Loan"
import "./Loans.css"

export default (props) => {
    const { loans } = useContext(LoanContext)

    return (
        <>

            <h1>NOT USING THIS CODE </h1>
            <h1>My Benefit Cost Analysis</h1>
            <h1>aka LoanList.js</h1>
            {/* <div>TESTING THE RENDER</div> */}

            <h2>Finance Workbench</h2>




            <div className="loans">
                {
                    loans.map(loan => {
                        return <Loan key={loan.id} loan={loan} />
                    })
                }
            </div>

            <h2>Benefit Cost Analysis</h2>
        </>
    )
}
