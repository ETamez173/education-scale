import React, { useContext } from "react"
import { DegreeContext } from "./DegreeProvider"
import Degree from "./Degree"
import "./Degrees.css"

export default (props) => {
    const { degrees, addDegree} = useContext(DegreeContext)

    return (
        <>
            {/* <h1>Degrees and Annual Earning Figures</h1> */}
            <h1>Research Degrees and Earnings</h1>



            <h1></h1>
            {/* When the button is clicked, check if the user is authenticated. */}
            <button className="addNewDegree__button" onClick={() => props.history.push("/degrees/create")}>
                Add New Degree
            </button>
            {/* <h2>Career Options and Earnings</h2> */}

            <div className="degreeList">
                <div className="tableDegree">
                    <section className="tableDegree__section">
                        <div className="tableDegree__nameCareer">Career Option(s)</div>
                        <div className="tableDegree__fill"> fil</div>
                        <div className="tableDegree__earningsAvg"> Earnings Average</div>
                        <div className="tableDegree__earningsHigh">Earnings High</div>
                        <div className="tableDegree__earningsLow">Earnings Low</div>
                        <div className="tableDegree__earningsLow">Action</div>
                    </section>
                </div>
            </div>
            <div className="tableDegree__listView">
                <div className="tableDegree__listItem_center">
                    {
                        degrees.map(degree => {
                            return <Degree key={degree.id} props={props} degree={degree} addDegree={addDegree} />
                        })                    }
                </div>
            </div>





        </>
    )
}


