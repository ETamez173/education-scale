// import React from "react"
import React, { useContext } from "react"
import "./DegreeSchool.css"
import { DegreeContext } from "../degree/DegreeProvider";
import { SchoolContext } from "../school/SchoolProvider"
import { LoanContext } from "../loan/LoanProvider"

import School from "../school/School"

////aka SchoolList.js   
// const { addLoan } = useContext(LoanContext)

export default ({ degreeSchool, loans, degree, school }) => (

    

    // const constructNewSchoolOption = () => {

    //     /// Creating the object right here >>>>>



    //     const ActiveUser = localStorage.getItem("education_customer")
    //     // const id =                      ;
    //     const educationName = degree.educationName;
    //     const earningsAvg = degree.earningsAvg;
    //     const searchSchool = "False";
    //     const userId = parseInt(localStorage.getItem("educationScale_user"));


    //     addLoanMyCareerOption({

    //         educationName: degree.educationName,
    //         searchSchool: "False",
    //         earningsAvg: degree.earningsAvg,
    //         userId: parseInt(ActiveUser),
    //         degreeId: degree.id

    //     })

    //     // .then(() => props.history.push("/degrees"));


    // }



    <section className="degreeSchool__section">

        <h3 className="degreeSchool__name"></h3>

        <section className="tableMyCBA">

            <div className="degreeSchool__nameCareer">{degreeSchool.degree.educationName}</div>
            {/* used a fetch with 2 expands  */}
            {/* return fetch("http://localhost:8088/degreeSchools?_expand=degree&_expand=school") */}
            <div className="degreeSchool__nameSchool">{degreeSchool.school.schoolName}</div>
         
           <div className="degreeSchool__nameCareer">${degreeSchool.annualCost}</div> 
            <div className="degreeSchool__nameCareer">${degreeSchool.totalCost}</div> 
            {/* <div className="degreeSchool__totalCost">${degreeschool.degree.totalCost}</div> */}
           

            <div className="finWorkBench__buttons">
                <div>
                    <button className="saveSchoolListItem__button">Save </button>
         
                    <button className="deleteSchoolListItem__button">Delete</button>
                </div>

                {/* use this button to create the loan object that will be used fore rest of analysis */}
                {/* <div>
                    <button className="moveToBenefitAnalysis__button">Add to School Shortlist</button>
                </div> */}


                <button className="addToSchoolOptionShortlist_button"
                onClick={() => {

                    // constructNewSchoolOption()
                            // this create the loan object

                            // see code for degree

                }}
            >
               Add to School Shortlist
                </button>




            </div>
        </section>


    </section>

)