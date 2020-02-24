import React, { useContext } from "react"
import { SchoolContext } from "../school/SchoolProvider"
import { LoanContext, MySchoolOptionContext } from "../loan/LoanProvider"
// import { MySchoolOptionContext } from "../loan/LoanProvider"
// import MySchoolOption from "./MySchoolOption"
import FinWorkBench from "../loan/FinWorkBench"
import MySchoolOption from "../myschooloption/MySchoolOption.js"
import Loan from "../loan/Loan"
import "./SchoolOption.css"

export default (props) => {
    const { schools } = useContext(SchoolContext)
    const { loans, myschooloptions } = useContext(LoanContext)
    // const { myschooloptions } = useContext(MySchoolOptionContext)
    return (
        <>


            <h1>My School Options Shortlist</h1>
            

            <div className="schoolOptionsList">
            <div className="tableSchoolOption">
                <section className="tableSchoolOption__section">  
                    <div className="schoolOptionsList__ed_voc">Degree</div>
                    <div className="schoolOptionsList__schoolProgram"> School/ Program</div>
                    {/* <div className="schoolOptionsList__avgYrlyCosts">Average Yearly Costs</div> */}
                    <div className="schoolOptionsList__avgTotCosts">Average Total Costs</div>
                    <div className="schoolOptionsList__avgTotCosts">Action</div>
                </section>
            </div>
            </div>
            <div className="tableMSO__mySchoolView">
                <div className="tableMSO__listItemCenter">


                    {

                        loans.map(loan => {
                            const ActiveUser = localStorage.getItem("education_customer")
                            console.log(ActiveUser)

                            // This code checks to see who the active user is and only renders the loan objects that belong to that user
                            if (loan.finWorkBenchStep === "false" && loan.benefitCostAnalysis === "false" && parseInt(ActiveUser) === loan.userId ) {
                                // console.log(myschooloption.benefitCostAnalysis)
                                return <MySchoolOption key={loan.id} loan={loan} />
                            }
                        })

                        // loans.map(myschooloption => {

                        //     if (myschooloption.finWorkBenchStep === "false" && myschooloption.benefitCostAnalysis === "false") {
                        //         // console.log(myschooloption.benefitCostAnalysis)
                        //         return <MySchoolOption key={myschooloption.id} myschooloption={myschooloption} />
                        //     }
                        // })





                    }
                </div>



            </div>




        </>
    )
}


// if (finworkbench.finWorkBenchStep === "true") {
//     console.log(finworkbench.benefitCostAnalysis)
//     return <FinWorkBench key={finworkbench.id} finworkbench={finworkbench} />