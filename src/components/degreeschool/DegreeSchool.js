// import React from "react"
import React, { useContext } from "react"
import "./DegreeSchool.css"
import { DegreeContext } from "../degree/DegreeProvider";
import { SchoolContext } from "../school/SchoolProvider"
import { LoanContext } from "../loan/LoanProvider"
import { DegreeSchoolContext} from "../degreeschool/DegreeSchoolProvider"

import School from "../school/School"
import Loan from "../loan/Loan"
import Degree from "../degree/Degree"
import DegreeSchool from "../degreeschool/DegreeSchool"
////aka SchoolList.js   



export default ({ degreeSchool, loan, degree, school, history }) => {

    {/* Commented out after git resolution issues */ }
    const { addLoan } = useContext(LoanContext)
    const { degreeschools, deleteDegreeSchool, patchDegreeSchool } = useContext(DegreeSchoolContext)



    const constructNewSchoolOption = () => {

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

        addLoan({

            userId: parseInt(ActiveUser),
            educationName: degreeSchool.degree.educationName,
            schoolName: degreeSchool.school.schoolName,
            annualSchoolCost: degreeSchool.annualCost,
            schoolTotalCost: degreeSchool.totalCost,
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
            benefitCostAnalysis: "false"


        })


    }

    return (

        <section className="degreeSchool__section">

            <h3 className="degreeSchool__name"></h3>

            <section className="tableMyCBA">


                {/* <div className="degreeSchool__nameCareer">{degreeSchool.degree.educationName}</div> */}
                {/* used a fetch with 2 expands  */}
                {/* return fetch("http://localhost:8088/degreeSchools?_expand=degree&_expand=school") */}

                <div className="degreeSchool__nameCareer">{degreeSchool.degree.educationName}</div>
                <div className="degreeSchool__nameSchool">{degreeSchool.school.schoolName}</div>
                {/* 
                <div className="degreeSchool__nameCareer">{degreeSchool.degree.educationName}</div>
                <div className="degreeSchool__nameSchool">{degreeSchool.school.schoolName}</div> */}


                <div className="degreeSchool__nameCareer">${degreeSchool.annualCost}</div>
                <div className="degreeSchool__nameCareer">${degreeSchool.totalCost}</div>
                {/* <div className="degreeSchool__totalCost">${degreeschool.degree.totalCost}</div> */}


                <div>
                    <div>
                        <button className="addToSchoolOptionShortlist_button"
                            onClick={() => {

                                //// TODO HERE
                                // check for  duplicate schoolOption ?? in the json file if YES then dont construct but 
                                // make ALRT to say "Already added to list!"
                                // if NO then go ahead and make a new shortlist item

                                constructNewSchoolOption()
                                // this creates the loan object aka the benefit cost analysis object

                            }}
                        >
                            Add to School Shortlist
                </button>
<br></br>
<br></br>
<br></br>
<br></br>
                    </div>

                    <div className="finWorkBench__buttons">
                        <div>
                            
                        </div>
                    </div>
                  
                    <div>
                    
                         {/* <button className="removeSchoolSearchItem__button"
                            onClick={() => {


                                patchDegreeSchool({schoolSearch: false,},degreeSchool.id).then(() => {

                                    console.log(degreeSchool.id)
                                    // history.push("/tasks");
                                });
                           
                            }}> Remove From Search </button>  */}
                    </div>

                </div>
            </section>


        </section>

    );

}
