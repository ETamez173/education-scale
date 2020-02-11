import React from "react"
import "./Schools.css"


export default ({ school, degree, degreeSchools }) => (
    <section className="school__section">
 

        <section className="school">

        <div className="place__holder">PLACE HOLDER</div>
            <h3 className="school__name">{school.schoolName}</h3>
            <div className="place__holder">PLACE HOLDER</div>
            <div className="place__holder">PLACE HOLDER</div>

        
            <button className="tableSchool__button">Add to School Options</button>
        </section>


    </section>

)