import React from "react"
import "./CareerOption.css"
// import { Link } from "react-router-dom"

export default ({ degree }) => (
    <section className="degree__section">
        <h3 className="degree__name">  </h3>



                         Not Being Used

        <section className="degree">
            <div className="degree__nameEarnings">{degree.educationName}</div>
            <div className="degree__earningsAvg">${degree.earningsAvg}</div>
            {/* <div className="degree__earningsHigh">${degree.earningsHigh}</div>
            <div className="degree__earningsLow">${degree.earningsLow}</div> */}
            {/* <div>
                <button className="saveToMyCareerOptions__button">Save To Career Options</button>
            </div> */}

            <div>
            <div>
                <button className="moveToSchoolSearch__button">Move To School Search</button>
            </div>

            <div>
                <button className="deleteMCO__button">Delete </button>
            </div>

            </div>
    </section>




    </section >
)
