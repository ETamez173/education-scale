import React, { useContext } from "react"
import { SchoolContext } from "../school/SchoolProvider"
import SchoolOption from "./SchoolOption"
import "./SchoolOption.css"

export default (props) => {
    const { schools } = useContext(SchoolContext)

    return (
        <>


            <h2>My School Options Shortlist</h2>
            <h2>aka SchoolOptionList.js</h2>

            <div className="schoolOptionsList">
                <section className="schoolOptionsList__section">
                    <div className="schoolOptionsList__ed_voc">Degree</div>
                    <div className="schoolOptionsList__schoolProgram"> School/ Program</div>
                    <div className="schoolOptionsList__avgYrlyCosts">Average Yearly Costs</div>
                    <div className="schoolOptionsList__avgTotCosts">Average Total Costs</div>


                </section>
            </div>

            <div className="schools">
                {
                    schools.map(school => {
                        return <SchoolOption key={school.id} school={school} />
                    })
                }

{/* 
left off her around 930pm on 2-10-20.  Tommorow is a new day */}

                {/* {
                    schools.map(school => {
                        // Find this employee's matching location object
                        const foundedSchool = schools.find(
                            (school) => {
                                // return school.id === degreeSchool.schoolId
                            }
                        )

                        // Pass the matching location to Employee component
                        // return <School key={school.id}
                        //     school={foundedSchool}
                            // school={school} 
                            />
                    })
                } */}


            </div>




        </>
    )
}
