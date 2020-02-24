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

            {/* When the button is clicked, check if the user is authenticated. */}
            <button onClick={() => props.history.push("/degrees/create")}>

            </button>

            <div className="searchSchoolList">
                <div className="tableSearchSchool">
                    <section className="tableSearchSchool__section">
                        <div className="tableSearchSchool__nameEarnings">Degree </div>
                        <div className="tableSearchSchool__earningsAvg"> School/ Program</div>
                        <div className="tableSearchSchool__earningsHigh">Average Yearly Costs</div>
                        <div className="tableSearchSchool__earningsTotal">Average Total Costs</div>
                        <div className="tableSearchSchool__addButtonTitle">Add To School Options</div>


                    </section>
                </div>
            </div>

            <div className="tableDegreeSchool__listView">
                <div className="tableDegreeSchool__listItem_center">

                    {

                        degreeSchools.map(ds => {

                            const foundSchoolId = mycareeroptions.map(degree => (degree.degreeId))

                            const userId = parseInt(localStorage.getItem("education_customer"))

                            const filterSchools = degreeSchools.filter(ds => ds.degree.userId === userId) || {}
                            // const filterSchools = degreeSchools.filter(ds => ds.degree.userId === userId) || {}
                            console.log(filterSchools)

                            if (ds.degreeId !== foundSchoolId  )  // only works if you say not equal since undefined


                            // const userId = parseInt(localStorage.getItem("education_customer"))
                            //   const foundMCO = mycareeroptions.find(fndMCO => fndMCO.searchSchool === true  &&  userId === fndMCO.userId)

                            {

                                console.log(foundSchoolId)
                                console.log(ds)
                                // console.log(mycareeroptions, "career options here")
                                // console.log(mycareeroptions.degreeId)
                                //   }
                                const userId = parseInt(localStorage.getItem("education_customer"))



                                const findSchoolSOfferingDegreeForUser = schools.filter(
                                    (school) => {
                             
                                        //         console.log("This one DOES have a DEGREE Id match!")

                                        // const userId = parseInt(localStorage.getItem("education_customer"))
                                        const foundMCO = filterSchools.find(fndSODFU => fndSODFU.searchSchool === true && userId === fndSODFU.userId)
                                        // const foundMatchSchoolsForDegree = mycareeroptions.find(fndMSFD => fndMSFD.degreeId === ds.degreeId && fndMSFD.searchSchool !== true  && userId === fndMSFD.useriId  )
                                        // console.log(foundMCO)

                                        const foundMatchSchoolsForDegree = mycareeroptions.find(fndMSFD => fndMSFD.degreeId === ds.degreeId && fndMSFD.searchSchool === true)
                                        // const foundMatchSchoolsForDegree = mycareeroptions.find(fndMSFD => fndMSFD.degreeId === ds.degreeId && fndMSFD.searchSchool !== true  && userId === fndMSFD.useriId  )
                                        // console.log(foundMatchSchoolsForDegree)



                                    })

                                // {




                                const foundMatchSchoolsForDegree = mycareeroptions.find(fndMSFD => fndMSFD.degreeId === ds.degreeId && fndMSFD.searchSchool !== true && userId === fndMSFD.userId)
                                // const foundMatchSchoolsForDegree = mycareeroptions.find(fndMSFD => fndMSFD.degreeId === ds.degreeId && fndMSFD.searchSchool !== true  && userId === fndMSFD.useriId  )
                                // console.log(foundMatchSchoolsForDegree)




                                // if (foundMatchSchoolsForDegree !== undefined) {
                                if (foundMatchSchoolsForDegree !== undefined && ds.schoolSearch === true) {

                                    console.log("This one DOES have a (degree and school) match for mycareeroptions!")

                                    return <DegreeSchool key={ds.id}
                                        schools={findSchoolSOfferingDegreeForUser}
                                        degreeSchool={ds} />
                                    // console.log(mycareeroptions, "career options here")
                                    // console.log(mycareeroptions.schoolSearch)
                                }
                                else if (foundMatchSchoolsForDegree === undefined) {
                                    // console.log("This one DOESNT have a (degree and school) match for mycareeroptions!")

                                }

                            }

                        })
                    }

                </div>
            </div>
        </>
    )
}


