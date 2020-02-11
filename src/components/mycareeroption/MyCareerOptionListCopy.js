import React, { useContext } from "react"
import { MyCareerOptionContext } from "./MyCareerOptionProvider"
import MyCareerOption from "./MyCareerOption"
// import "./Degrees.css"

export default (props) => {
    const { mycareeroptions } = useContext(MyCareerOptionContext)

    return (
        <>
            {/* <h1>Degrees and Annual Earning Figures</h1> */}

            {/* <div>TESTING THE RENDER</div> */}

            <h2>My Career Options Shortlist</h2>
            <h2>aka MyCareerOptionList.js</h2>

            <div className="tableDegree">
            <section className="tableDegree__section">
            <div className="tableMCO__nameEarnings">My Career Option(s)</div>
                <div className="tableMCO__earningsAvg"> Average Yearly Earnings</div>
                <div className="tableMCO__earningsAvg">Action</div>


                
            </section>
            </div>

            <div className="degrees">

        
                    
    {/* //// This is working well */}

                {
                    mycareeroptions.map(mycareeroption => {
                        if(mycareeroption.searchSchool !== "true")
                        return <MyCareerOption {...props} key={mycareeroption.id} mycareeroption={mycareeroption}  />

                        // return <MyCareerOption key={mycareeroption.id} mycareeroption={mycareeroption} />
                    })
                }
            </div>


          


        </>
    )
}

