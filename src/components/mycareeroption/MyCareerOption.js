
import React, { useContext } from "react"
import { DegreeContext } from "../degree/DegreeProvider";
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider";

// import "./Degrees.css"


export default ({ degree, mycareeroption, history }) => {
    const { addDegree } = useContext(DegreeContext)
    const { searchMarkedTrueForCareerOption, addMyCareerOption, getMyCareerOption } = useContext(MyCareerOptionContext)


    const moveToSearch = () => {

        /// Creating the object right here >>>>>

        const ActiveUser = localStorage.getItem("education_customer")
        const id = mycareeroption.id;
        console.log(mycareeroption.id)

        const educationName = mycareeroption.educationName;
        console.log(mycareeroption.educationName)

        const searchSchool = "true";


        addMyCareerOption({


            educationName: mycareeroption.educationName,
            searchSchool: "true",
            earningsAvg: mycareeroption.earningsAvg,
            userId: parseInt(ActiveUser),
            degreeId: mycareeroption.degreeId,

        })

        // .then(() => props.history.push("/degrees"));


    }


    return (


        <section className="degree">

            <div className="degree__nameEarnings">{mycareeroption.educationName}</div>
            <div className="degree__earningsAvg">${mycareeroption.earningsAvg}</div>
            {/* <div className="degree__earningsAvg">TEST TEXT</div> */}



            <div>
                <div>
                    <button className="saveToMyCareerOptions__button"
                        onClick={() => {
                            // const mycareeroption = mycareeroption 

                            moveToSearch()

                            history.push(`/mycareeroptions/${mycareeroption.id}`);

                            //     history.push("/mycareeroptions");
                            //   });
                        }}> Move To School Search </button>
                </div>
                <div>
                    <button className="deleteMCOShortlistItem__button">Delete</button>
                </div>
            </div>


            {/* 
            <button className="saveToMyCareerOptions__button"
                onClick={() => {
                    // const mycareeroption = mycareeroption 
                    // completeTask({taskCompletion: true,},task.id).then(() => {
                    markSearchTrue({ searchSchool: true, }, mycareeroption.id)


                    console.log(mycareeroption.id)
                    console.log(markSearchTrue())
                    // .then(() => {

                        // history.push("/mycareeroptions");
                    //   });
                }}> Move TO School Search </button> */}


        </section>
    );
};


