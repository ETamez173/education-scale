import React from "react"
import "./Loans.css"
// import { Link } from "react-router-dom"


// const twentyYearEarnings = () =>
// { (loan.degreeAnnualEarnings * 20 )
// }
// const twentyYearEarnings =  (loan.degreeAnnualEarnings * 20 )





export default ({ finWorkBench }) => (



    
    <section className="finWorkBench">
        <h3 className="loan__name">  </h3>


        <section className="loan__section">


            <div className="loan__educationName">{finWorkBench.educationName}</div>
            <div className="loan__schoolName">{finWorkBench.schoolName}</div>
            <div className="loan__degreeAnnualEarnings">${finWorkBench.schoolTotalCost}</div>

              {/* these below are inputs items for calculatint the loan payments etc */}
            <div className="loan__loanAmount">${finWorkBench.loanAmount}</div>

            <div className="loan__totalLoanPmts">{finWorkBench.loanLengthMonths} Months</div>
            <div className="loan__totalLoanPmts">{finWorkBench.loanRate}%</div>
            <div className="loan__totalLoanPmts">${finWorkBench.loanPmt}</div>
            {/* <div className="loan__twentyYearEarnings">${finWorkBench.degreeAnnualEarnings * 20}</div> */}
          
            {/* <div className="loan__totalAmountPaid">${finWorkBench.totalAmountPaid}</div> */}


            {/* <div className="loan__cashPaid">${finWorkBench.cashPaid}</div> */}
          
         
     

            <div className="BCA_buttons">

                {/* <div className="BCA__ratio">{loan.benefitCostRatio}</div> */}

                <div>
                    <div>
                        <button className="saveBCA__button">Save Analysis</button>
                    </div>


                    <div>
                        <button className="deleteBCA__button">Delete Analysis</button>
                    </div>
                </div>
            </div>

        </section>

    </section>
)