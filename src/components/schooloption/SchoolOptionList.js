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


            <h2>My School Options Shortlist</h2>
            <h2>aka SchoolOptionList.js</h2>
            <h2>clicking Run Benefit Analysis creates new loan object</h2>
            <h2>using MySchoolOption.js</h2>

            <div className="schoolOptionsList">
                <section className="schoolOptionsList__section">
                    <div className="schoolOptionsList__ed_voc">Degree</div>
                    <div className="schoolOptionsList__schoolProgram"> School/ Program</div>
                    <div className="schoolOptionsList__avgYrlyCosts">Average Yearly Costs</div>
                    <div className="schoolOptionsList__avgTotCosts">Average Total Costs</div>


                </section>
            </div>

            <div className="schools">
                {/* {
                    schools.map(school => {
                        return <SchoolOption key={school.id} school={school} />
                    })
                } */}


                <div className="MySchoolOptions">


                    {

                        loans.map(myschooloption => {

                            if (myschooloption.finWorkBenchStep === "false" && myschooloption.benefitCostAnalysis === "false") {
                                // console.log(myschooloption.benefitCostAnalysis)
                                return <MySchoolOption key={myschooloption.id} myschooloption={myschooloption} />
                            }
                        })
                    }
                </div>



            </div>




        </>
    )
}


// if (finworkbench.finWorkBenchStep === "true") {
//     console.log(finworkbench.benefitCostAnalysis)
//     return <FinWorkBench key={finworkbench.id} finworkbench={finworkbench} />