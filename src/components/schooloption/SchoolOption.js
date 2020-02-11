import React from "react"
import "./SchoolOption.css"


export default ({ school }) => (
    <section className="school__section">



        <section className="schoolOption__section">

        <div className="place__holder">PLACE HOLDER</div>

        {/* <div className="degreeSchool__nameCareer">{degreeSchool.degree.educationName}</div> */}

            <h3 className="schoolOption__name">{school.schoolName}</h3>


            <div className="place__holder">PLACE HOLDER</div>

            {/* <div className="degreeSchool__nameCareer">${degreeSchool.annualCost}</div>
            <div className="degreeSchool__nameCareer">${degreeSchool.totalCost}</div> */}


            {/* <div className="degree__studyYears">{degree.studyYears}</div>
                <div className="degree__address">{degree.annualCost}</div>
                <div className="degree__address">{degree.totalCost}</div> */}

            <div>
                <button className="tableSchool__button">Move To Benefit Analysis</button>
                <div>
                    <button className="deleteMSO__button">Delete </button>
                </div>
            </div>
        </section>


    </section>

)