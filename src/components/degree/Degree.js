
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


        <section className="degree">

            <div className="degree__nameEarnings">{degree.educationName}</div>
            <div className="degree__earningsAvg">${degree.earningsAvg}</div>
            <div className="degree__earningsHigh">${degree.earningsHigh}</div>
            <div className="degree__earningsLow">${degree.earningsLow}</div>

            <div className="degree__id">{degree.id}</div>



   {/* LEFT OFF HERE 2-16-20 1229am */}


            <button className="saveToMyCareerOptions__button"
                onClick={() => {

                    //// TODO HERE

                    // mycareeroption.filter
                    // const checkMCOforDuplicate = mycareeroptions.find(fndDUPE => fndDUPE.degreeId !== degrees.id)
                    // console.log(checkMCOforDuplicate)

                    // if (degree.id !== checkMCOforDuplicate.degreeId && checkMCOforDuplicate.shortList === true)  {

                    //     console.log("this has been added before!")
                     
                    // check for degree.id being in the json file if YES then dont construct but 
                    // make ALRT to say "Already added to options!"
                    // if NO then go ahead and make a new career option
              
                       

                // }  else { 
                    constructNewDegree()  
                // }


                }}>
                Add To Career Options
                </button>

        </section>
    );
};



