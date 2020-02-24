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
    const { mycareeroptions, moveToSearchMyCareerOption, addMyCareerOption, getMyCareerOption, deleteMyCareerOption } = useContext(MyCareerOptionContext)

    const mycareerptionDegreeId = mycareeroptions.degreeId
    //    const myCareerOptions = ""
    console.log(mycareerptionDegreeId)

    const mcoSearch = mycareeroptions.schoolSearch
    console.log(mcoSearch)

    return (
        <>

            <h1>Search Schools By Degree And Cost</h1>


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
                            // console.log(mycareeroptions, "career options here")
                          

                            const findSchoolSOfferingDegree = schools.filter(
                                (school) => {
                            
                                    console.log(mycareeroptions.degreeId)
                                    console.log(mycareeroptions.schoolSearch)
                                    if (ds.degreeId === mycareeroptions.degreeId && mycareeroptions.schoolSearch === true) {
                                        console.log(mycareeroptions.degreeId)
                                        console.log(mycareeroptions.schoolSearch)
                                    }
                                }
                            )

                            {

                                const founddMatchSchoolsForDegree = mycareeroptions.find(fndMSFD => fndMSFD.degreeId === ds.degreeId)
                                // console.log(founddMatchSchoolsForDegree)

                                // if (founddMatchSchoolsForDegree !== undefined) {
                                const ActiveUser = localStorage.getItem("education_customer")
                                const MCO = mycareeroptions.schoolSearch
                                // console.log(MCO)
                                // console.log(mycareeroptions.schoolSearch)
                                console.log(ds.degree.userId)



                                if (founddMatchSchoolsForDegree !== undefined && ds.degree.userId === ActiveUser) {
                                    // if (founddMatchSchoolsForDegree !== undefined && mycareeroptions.schoolSearch === true && ds.degree.userId === ActiveUser) {
                                    console.log(ds.degree.userId)
                                    // console.log(ActiveUser)
                                    // if (founddMatchSchoolsForDegree !== undefined && ds.schoolSearch === true) {
                                    console.log("This one has a degree match for the mycareeroptions!")

                                    return <DegreeSchool key={ds.id}
                                        schools={findSchoolSOfferingDegree}
                                        degreeSchool={ds} />
                                    // console.log(mycareeroptions, "career options here")
                                    // console.log(mycareeroptions.schoolSearch)
                                }
                                else if (founddMatchSchoolsForDegree === undefined) {
                                    // console.log("This one is a doesnt match the degree!")
                                    console.log("This one DOES NOT have a degree match for the mycareeroptions!")
                                }

                            }

                        })
                    }

                </div>
            </div>
        </>
    )
}


