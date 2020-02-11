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
    // const { degrees } = useContext(DegreeContext)
    // const degreeSchool = degreeSchool
    // const degree = degree
    return (
        <>

            <h1>Search Schools By Degree And Cost</h1>
            <h1>aka SchoolList.js</h1>
            {/* <div>TESTING THE RENDER</div> */}

            {/* <h2>Degree Costs By School Listing</h2> */}


            <div className="tableSchool">
            <section className="tableSchool__section">
                <div className="tableSchool__nameEarnings">Degree </div>
                <div className="tableSchool__earningsAvg"> School/ Program</div>
                <div className="tableSchool__earningsHigh">Average Yearly Costs</div>
                <div className="tableSchool__earningsTotal">Average Total Costs</div>
                <div className="tableSchool__addButtonTitle">Add To School Options</div>
              
                          
            </section>
            </div>

 
{/* 
            <div className="schools">
                {
                    schools.map(school => {

                        // if((school.id === degreeSchool.schoolId && degreeSchool.degreeId === degree.id) )
                        return <School key={school.id} school={school} />


                        //   // if(degree.id === degreeschool.degreeId)
                        // return <School key={school.id} school={school} />
                    })
                }
            </div>  */}


{/* /// this is where I left off - broken effort to render Degree and School using the join object  */}


            <div className="degreeSchools">
               
{/*                
                {
                   degreeSchools.map(degreeSchool => {
                    
                    // if(degree.id === degreeSchool.degreeId)
                        return <DegreeSchool key={degreeSchool.id} degreeschool={degreeSchool}  />
                        // return <Degree key={degree.id} degree={degree}  />
                       
                    })
                } */}

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



// {
//     mycareeroptions.map(mycareeroption => {
//         if(mycareeroption.searchSchool !== "true")
//         return <MyCareerOption key={mycareeroption.id} mycareeroption={mycareeroption} />
//     })
// }