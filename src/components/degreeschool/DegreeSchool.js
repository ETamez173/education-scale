import React from "react"
import "./DegreeSchool.css"
import { DegreeContext } from "../degree/DegreeProvider";
import { SchoolContext } from "../school/SchoolProvider"

import School from "../school/School"

////aka SchoolList.js   

export default ({ degreeSchool, loans, degree, school }) => (

    
    <section className="degreeSchool__section">

        <h3 className="degreeSchool__name"></h3>

        <section className="tableMyCBA">

            {/* <div className="degreeSchool__nameCareer">{degreeSchool.degree.educationName}</div> */}
           
           {/* Need to get the School Name here.  Maybe a find on school object   */}
           
            <div className="place__holder">
               { 
                // school.find(school.id === degreeSchool.schoolId)
               }
                PLACE HOLDER</div>

           {/* <div className="degreeSchool__nameCareer">${degreeSchool.annualCost}</div> 
            <div className="degreeSchool__nameCareer">${degreeSchool.totalCost}</div>  */}
            {/* <div className="degreeSchool__totalCost">${degreeschool.degree.totalCost}</div> */}
           

            <div className="finWorkBench__buttons">
                <div>
                    <button className="saveSchoolListItem__button">Save </button>
         
                    <button className="deleteSchoolListItem__button">Delete</button>
                </div>
                <div>
                    <button className="moveToBenefitAnalysis__button">Add to School Shortlist</button>
                </div>
            </div>
        </section>


    </section>

)