// import React from "react"
import React, { useContext } from "react"
import "./DegreeSchool.css"
import { DegreeContext } from "../degree/DegreeProvider";
import { SchoolContext } from "../school/SchoolProvider"
import { LoanContext } from "../loan/LoanProvider"

import School from "../school/School"
import Loan from "../loan/Loan"

////aka SchoolList.js   


// export default ({ degreeSchool, loans, degree, school }) => (
export default ({ degreeSchool, loan, degree, school }) => {


    const { addLoan } = useContext(LoanContext)


    const constructNewSchoolOption = () => {

        //     /// Creating the object right here >>>>>

        const ActiveUser = localStorage.getItem("education_customer")
        // const id =                      ;
        // const educationName = degree.educationName;
        // const earningsAvg = degree.earningsAvg;
        // const searchSchool = "False";
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
            loanAmount: "",
            loanRate: "",
            loanLengthMonths: "",
            loanPmt: "",
            totalLoanPmts: "",
            cashPaid: "",
            totalAmountPaid: "",
            degreeAnnualEarnings: "",
            twentyYearEarnings: "",
            benefitCostRatio: "",
            benefitCostAnalysis: "false"


            // educationName: degree.educationName,
            // searchSchool: "False",
            // earningsAvg: degree.earningsAvg,
            // userId: parseInt(ActiveUser),
            // degreeId: degree.id

        })

        //     // .then(() => props.history.push("/degrees"));


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
                                // this create the loan object

                                // see code for degree

                            }}
                        >
                            Add to School Shortlist
                </button>
                    </div>
                    <div className="finWorkBench__buttons">
                        <div>
                            {/* <button className="saveSchoolListItem__button">Save </button> */}

                            <button className="deleteSchoolListItem__button">Delete</button>
                        </div>
                    </div>
                    {/* use this button to create the loan object that will be used fore rest of analysis */}
                    {/* <div>
                    <button className="moveToBenefitAnalysis__button">Add to School Shortlist</button>
                </div> */}







                </div>
            </section>


        </section>

    );

}
