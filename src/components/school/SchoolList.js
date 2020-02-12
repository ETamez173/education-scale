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
        const findSchoolByDegree = schools.filter(
            (school) => {
                return ds.schoolId === school.id
            }
        )
        return <DegreeSchool key={ds.id}
                         schools={findSchoolByDegree}
                         degreeSchool={ds} />
    })
}



            </div>

{/* ERROR IDEA!!!!!!!!!!!!!!!!!!!12;18pm 2-12-20
I think the error is with the appviews not having a provider */}






        </>
    )
}


