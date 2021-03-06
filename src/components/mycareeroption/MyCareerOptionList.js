import React, { useContext } from "react"
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider"
import MyCareerOption from "../mycareeroption/MyCareerOption"
// import "./Degrees.css"

export default (props) => {
    const { mycareeroptions } = useContext(MyCareerOptionContext)
    const ActiveUser = localStorage.getItem("education_customer")
    console.log(ActiveUser)

    return (
        <>
         

            <h2>My Career Options Shortlist</h2>
            {/* <h2>aka MyCareerOptionList.js</h2> */}
            {/* <div className="tableMCO"> */}
            <div className="myCareerOptionsShortList">
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
                        const ActiveUser = localStorage.getItem("education_customer")
                        if(ActiveUser !== mycareeroption.userId )

                        // if(mycareeroption.shortList === "true" && mycareeroption.searchSchool === "false" && ActiveUser === mycareeroption.userId )
                        console.log(ActiveUser)
                        return <MyCareerOption key={mycareeroption.id} {...props} mycareeroption={mycareeroption} />
                    })
                }
            </div>


          


        </>
    )
}

