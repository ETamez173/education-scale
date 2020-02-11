import React, { useContext } from "react"
import { DegreeContext } from "./DegreeProvider"
import Degree from "./Degree"
import "./Degrees.css"

export default (props) => {
    const { degrees, addDegree } = useContext(DegreeContext)

    return (
        <>
            <h1>Degrees and Annual Earning Figures</h1>
            <h1>aka DegreeList.js</h1>
            {/* <div>TESTING THE RENDER</div> */}

            <h2>Career Options and Earnings</h2>
        
          
            <div className="tableDegree">
            <section className="tableDegree__section">
                <div className="tableDegree__nameCareer">Career Option(s)</div>
                <div className="tableDegree__earningsAvg"> Earnings Average</div>
                <div className="tableDegree__earningsHigh">Earnings High</div>
                <div className="tableDegree__earningsLow">Earnings Low</div>
                <div className="tableDegree__earningsLow">Action</div>
            </section>
            </div>

            <div className="degrees">
                {
                    degrees.map(degree => {
                        return <Degree key={degree.id} degree={degree} addDegree={addDegree}/>
                    })
                }
            </div>


          


        </>
    )
}


