
import React, { useContext } from "react"
import { DegreeContext } from "../degree/DegreeProvider";
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider";

// import "./Degrees.css"


export default ({ degree, mycareeroption, history, }) => {
    const { addDegree } = useContext(DegreeContext)
    const { mycareeroptions, moveToSearchMyCareerOption ,addMyCareerOption, getMyCareerOption, deleteMyCareerOption } = useContext(MyCareerOptionContext)


    const moveToSearch = () => {

        /// Creating the object right here >>>>>

        const ActiveUser = localStorage.getItem("education_customer")
        const id = mycareeroption.id;
        console.log(mycareeroption.id)

        const educationName = mycareeroption.educationName;
        console.log(mycareeroption.educationName)

        const searchSchool = "true";

        // completeTask({taskCompletion: true,},task.id)
        
        // .then(() => {
              
        //     history.push("/tasks");
        //   });

//         moveToSearchMyCareerOption({searchSchool:"true",},parseInt(mycareeroption.id))
// console.log(mycareeroption.id)


        addMyCareerOption({


            educationName: mycareeroption.educationName,
            searchSchool: "true",
            shortList: "true",
            earningsAvg: mycareeroption.earningsAvg,
            userId: parseInt(ActiveUser),
            degreeId: mycareeroption.degreeId,

        })


        // moveToSearchMyCareerOption({


           
        //     searchSchool: "true",
        //     // shortList: "false",
            

        // })



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

                            //// TODO HERE
                            // check for  mycareeroption.id being in the json file if YES then dont construct but 
                            // make ALRT to say "Already added to list!"
                            // if NO then go ahead and make a new career option

                            // moveToSearch()
                            moveToSearch()

                            // moveToSearchMyCareerOption({schoolSearch: "true",},mycareeroption.id)
                            
                            // .then(() => {


                            // // patchDegreeSchool({schoolSearch: false,},degreeSchool.id).then(() => {
                            // console.log(mycareeroption.id)

                            history.push(`/mycareeroptions/${mycareeroption.id}`);

                            // });

                        }}> Add To School Search </button>


                </div>
                <br></br>
                <br></br>
                <br></br>

                <div>
                    <button className="deleteMyCareerOption__button"
                        onClick={() => {

                            deleteMyCareerOption(mycareeroption)

                        }}> Delete  </button>
                </div>







                {/* <div>
                    <button className="deleteMCO__button">Delete</button>
                </div> */}
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


