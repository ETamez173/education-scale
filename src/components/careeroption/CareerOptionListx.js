import React, { useContext } from "react"
import { DegreeContext } from "../degree/DegreeProvider"
import CareerOption from "./CareerOptionx"
// import Degree from "./Degree"
import "./CareerOption.css"

export default (props) => {
    const { degrees } = useContext(DegreeContext)

    return (
        <>
            

            Not Being Used 
            <h2>TEST My Career Options Workbench</h2>

            <div className="tableMCO">
            <section className="tableMCO__section">
                <div className="tableMCO__nameEarnings">My Career Option(s)</div>
                <div className="tableMCO__earningsAvg"> Average Yearly Earnings</div>
                <div className="tableMCO__earningsAvg">Action</div>
                {/* <div className="tableMCO__earningsHigh">Earnings High</div>
                <div className="tableMCO__earningsLow">Earnings Low</div> */}
                          
            </section>
            </div>


            <div className="degrees">
                {
                    degrees.map(degree => {
                        return <CareerOption key={degree.id} degree={degree} />
                    })
                }
            </div>


        </>
    )
}
