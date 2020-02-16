import React, { useContext } from "react"
import { SchoolContext } from "./SchoolProvider"
import { DegreeSchoolContext } from "../degreeschool/DegreeSchoolProvider"
import { DegreeContext } from "../degree/DegreeProvider"
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider"
import Degree from "../degree/Degree"
import School from "./School"
import DegreeSchool from "../degreeschool/DegreeSchool"
import "./Schools.css"
import MyCareerOption from "../mycareeroption/MyCareerOption"



export default (props) => {
    const { schools } = useContext(SchoolContext)
    const { degrees } = useContext(DegreeContext)
    const { degreeSchools } = useContext(DegreeSchoolContext)
    const { mycareeroptions } = useContext(MyCareerOptionContext)



    return (
        <>

            <h1>Search Schools By Degree And Cost</h1>
            <h1>aka SchoolList.js</h1>
            <p>renders the list and Onclick creates loan object with search===false</p>

            <p>need to filter degreeschools by shoolId in mycareeroptions </p>

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

            {/* 
           <div className="degreeSchools">

         
// {
    degreeSchools.map(ds => {
        const findSchoolByDegree = schools.filter(
            (school) => {
                // const mycareeroption = mycareeroption
                // if(ds.degreeId === mycareeroption.degreeId) 
console.log(ds.degreeId)
// console.log(mycareeroption.degreeId)

                return ds.schoolId !== school.id
        //     }
        // )
        if(ds.schoolSearch === false ) 
        return <DegreeSchool key={ds.id}
                         schools={findSchoolByDegree}
                         degreeSchool={ds} />
//     })
// }

            </div>  */}
            {/* ` ${ console.log(school) }` */}


            {/* /////////////////////////Testing how to render MyCareerOptions here */}

            <div className="degreeSchools">


                {
                    degreeSchools.map(ds => {
                        // console.log(mycareeroptions, "career options here")
                        const findSchoolSOfferingDegree = schools.filter(
                            (school) =>

                                ds.degreeId === mycareeroptions.degreeId
                            // ds.schoolId === school.id && ds.degreeId === mycareeroptions.degreeId 
                            // ds.schoolId !== schools.id
                            // ds.schoolSearch === ""

                        )

                        {

                            const founddMatchSchoolsForDegree = mycareeroptions.find(fndMSFD => fndMSFD.degreeId === ds.degreeId)
                            console.log(founddMatchSchoolsForDegree)

                            if (founddMatchSchoolsForDegree !== undefined) {
                                console.log("This one has a degree match for the mycareeroptions!")

                                return <DegreeSchool key={ds.id}
                                schools={findSchoolSOfferingDegree}
                                degreeSchool={ds} />
                            console.log(mycareeroptions, "career options here")
                            // console.log(mycareeroptions.schoolSearch)
                            }
                                else if (founddMatchSchoolsForDegree === undefined) {
                                    console.log("This one is a doesnt match the degree!")

                            }
                      
                        }

                    })
                }

            </div>


                    
                
                    

                } */}




            {/* </div> */}






            {/* 
            {
    "id": 1,
    "schoolId": 1,
    "degreeId": 1,
    "studyYears": 4,
    "annualCost": 12500,
    "totalCost": 50000,
    "schoolSearch": true,
    "degree": {
      "id": 1,
      "educationName": "Electical Engineer",
      "earningsAvg": 90000,
      "earningsHigh": 98000,
      "earningsLow": 84000,
      "userId": 1
    },
    "school": {
      "id": 1,
      "schoolName": "MTSU"
    } */}





            {/* ERROR IDEA!!!!!!!!!!!!!!!!!!!12;18pm 2-12-20
I think the error is with the appviews not having a provider */}






        </>
    )
}


