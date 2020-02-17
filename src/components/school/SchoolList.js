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
            <p>renders the list - on the DegreeSearch.js card the Onclick creates a new loan object with search===false</p>

            {/* <p>need to filter degreeschools by shoolId in mycareeroptions </p> */}
          < p> build a SEARCH refresh that clears the search results and you need to go back to start point </p>
              <p> ?? use  a delete all mycareeroptions where the userId === the active users id ???   </p>
              <p> ?? </p>
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
                    degreeSchools.map(ds => {
                        // console.log(mycareeroptions, "career options here")
                        const findSchoolSOfferingDegree = schools.filter(
                            (school) =>

                                ds.degreeId === mycareeroptions.degreeId

                        )

                        {

                            const founddMatchSchoolsForDegree = mycareeroptions.find(fndMSFD => fndMSFD.degreeId === ds.degreeId)
                            console.log(founddMatchSchoolsForDegree)

                            // if (founddMatchSchoolsForDegree !== undefined) {
                                if (founddMatchSchoolsForDegree !== undefined && ds.schoolSearch === true) {
                                console.log("This one has a degree match for the mycareeroptions!")

                                return <DegreeSchool key={ds.id}
                                    schools={findSchoolSOfferingDegree}
                                    degreeSchool={ds} />
                                // console.log(mycareeroptions, "career options here")
                                // console.log(mycareeroptions.schoolSearch)
                            }
                            else if (founddMatchSchoolsForDegree === undefined) {
                                console.log("This one is a doesnt match the degree!")

                            }

                        }

                    })
                }

            </div>

        </>
    )
}


