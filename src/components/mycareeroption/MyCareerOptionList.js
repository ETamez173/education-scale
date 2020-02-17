import React, { useContext } from "react"
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider"
import MyCareerOption from "../mycareeroption/MyCareerOption"
// import "./Degrees.css"

export default (props) => {
    const { mycareeroptions } = useContext(MyCareerOptionContext)

    return (
        <>
            {/* <h1>Degrees and Annual Earning Figures</h1> */}

            {/* <div>TESTING THE RENDER</div> */}

            <h2>My Career Options Shortlist</h2>
            <h2>aka MyCareerOptionList.js</h2>

            <div className="tableMCO">
            <section className="tableMCO__section">
            <div className="tableMCO__nameEarnings">My Career Option(s)</div>
                <div className="tableMCO__earningsAvg"> Average Yearly Earnings</div>
                <div className="tableMCO__earningsAvg">Action</div>


                
            </section>
            </div>

            <div className="tableMCO__listView">

        
                    
    {/* //// This is working well */}

                {
                    mycareeroptions.map(mycareeroption => {
                        if(mycareeroption.shortList === "true" && mycareeroption.searchSchool === "false" )
                        return <MyCareerOption key={mycareeroption.id} {...props} mycareeroption={mycareeroption} />
                    })
                }
            </div>


          


        </>
    )
}

