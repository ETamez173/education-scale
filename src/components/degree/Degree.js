
import React, { useContext } from "react"
import { DegreeContext } from "./DegreeProvider";
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider";

import "./Degrees.css"


export default ({ degree, mycareeroption }) => {
    const { degrees, addDegree } = useContext(DegreeContext)
    const { mycareeroptions, addMyCareerOption } = useContext(MyCareerOptionContext)




    const constructNewDegree = () => {

        /// Creating the object right here >>>>>

        const ActiveUser = localStorage.getItem("education_customer")
        // const id =                      ;
        const educationName = degree.educationName;
        const earningsAvg = degree.earningsAvg;
        const searchSchool = "false";
        const userId = parseInt(localStorage.getItem("educationScale_user"));


        addMyCareerOption({

            educationName: degree.educationName,
            searchSchool: "false",
            shortList: "true",
            earningsAvg: degree.earningsAvg,
            userId: parseInt(ActiveUser),
            degreeId: degree.id,


        })

    }


    return (

//  <div className="tableDegree__listItem_center">
        <section className="degree">

            <div className="degree__nameEarnings">{degree.educationName}</div>
            <div className="degree__id">{degree.id}</div>
            <div className="degree__earningsAvg">{(degree.earningsAvg.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }))}</div>
            <div className="degree__earningsHigh">{(degree.earningsHigh.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }))}</div>
            <div className="degree__earningsLow">{(degree.earningsLow.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }))}</div>

       



              <button className="saveToMyCareerOptions__button"
                onClick={() => {

                    //// TODO HERE

                    // check for degree.id being in the json file if YES then dont construct but 
                    // make ALRT to say "Already added to options!"
                    // if NO then go ahead and make a new career option

                    constructNewDegree()  
        


                }}>
                Add To Career Options
                </button>

        </section>

    
    );
};



