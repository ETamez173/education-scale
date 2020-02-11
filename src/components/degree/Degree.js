
import React, { useContext } from "react"
import { DegreeContext } from "./DegreeProvider";
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider";

import "./Degrees.css"


export default ({ degree, mycareeroption }) => {
    const { addDegree } = useContext(DegreeContext)
    const { addMyCareerOption } = useContext(MyCareerOptionContext)




    const constructNewDegree = () => {

        /// Creating the object right here >>>>>



        const ActiveUser = localStorage.getItem("education_customer")
        // const id =                      ;
        const educationName = degree.educationName;
        const earningsAvg = degree.earningsAvg;
        const searchSchool = "False";
        const userId = parseInt(localStorage.getItem("educationScale_user"));


        addMyCareerOption({

            educationName: degree.educationName,
            searchSchool: "False",
            earningsAvg: degree.earningsAvg,
            userId: parseInt(ActiveUser),
            degreeId: degree.id

        })

        // .then(() => props.history.push("/degrees"));


    }


    return (


        <section className="degree">

            <div className="degree__nameEarnings">{degree.educationName}</div>
            <div className="degree__earningsAvg">${degree.earningsAvg}</div>
            <div className="degree__earningsHigh">${degree.earningsHigh}</div>
            <div className="degree__earningsLow">${degree.earningsLow}</div>

            <div className="degree__id">{degree.id}</div>
           
            
            <button className="saveToMyCareerOptions__button"
                onClick={() => {

                    constructNewDegree()

                }}
            >
                Add To Career Options
                </button>

        </section>
    );
};







// import React, { useContext } from "react"
// import "./Degrees.css"
// // import { Link } from "react-router-dom"
// import { DegreeContext } from "./DegreeProvider";



// export default ({ degree, addDegree }) => (


//     <section className="degree__section">
//         <h3 className="degree__name">  </h3>


//         <section className="degree">
//             <div className="degree__nameEarnings">{degree.educationName}</div>
//             <div className="degree__earningsAvg">${degree.earningsAvg}</div>
//             <div className="degree__earningsHigh">${degree.earningsHigh}</div>
//             <div className="degree__earningsLow">${degree.earningsLow}</div>

//             <div className="saveToMyMCO__button">
//                 <div >
//                     <button className="saveToMyCareerOptions__button">Save To Career Options</button>
//                 </div>
//             </div>


//             <button className="btn--degreeAdd"

//                 onClick={() => {
//                     const { addDegree } = useContext(DegreeContext)
//                     addDegree(degree)
//                 }}
//             >
//                 Add To Career Options
//         </button>



//         </section>




//     </section>
// )






