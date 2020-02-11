import React, { useContext } from "react"
import { SchoolContext } from "./SchoolProvider"
import { DegreeSchoolContext } from "../degreeschool/DegreeSchoolProvider"
import { DegreeContext } from "../degree/DegreeProvider"

import Degree from "../degree/Degree"
import School from "./School"
import DegreeSchool from "../degreeschool/DegreeSchool"
import "./Schools.css"

export default (props) => {
    const { schools } = useContext(SchoolContext)
    // const { degrees } = useContext(DegreeContext)
    const { degreeSchools } = useContext(DegreeSchoolContext)
   
    return (
        <>

            <h1>Search Schools By Degree And Cost</h1>
            <h1>aka SchoolList.js</h1>
            {/* <div>TESTING THE RENDER</div> */}

            <div className="tableSearchSchool">
            <section className="tableSearchSchool__section">
                <div className="tableSearchSchool__nameEarnings">Degree </div>
                <div className="tableSearchSchool__earningsAvg"> School/ Program</div>
                <div className="tableSearchSchool__earningsHigh">Average Yearly Costs</div>
                <div className="tableSearchSchool__earningsTotal">Average Total Costs</div>
                <div className="tableSearchSchool__addButtonTitle">Add To School Options</div>
              
                          
            </section>
            </div>


            <div className="degreeSchools">
               
{
                    degreeSchools.map(degreeSchool => {
                        // Find this employee's matching location object
                        const foundedSchool = schools.find(
                            (school) => {
                                return school.id === degreeSchool.schoolId
                            }
                        )

                        // Pass the matching location to Employee component
                        return <DegreeSchool key={degreeSchool.id}
                            school={foundedSchool}
                            degreeSchool={degreeSchool} />
                    })
                }


            </div>

        </>
    )
}


