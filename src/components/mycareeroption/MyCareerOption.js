
import React, { useContext } from "react"
import { DegreeContext } from "../degree/DegreeProvider";
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider";

// import "../degree/Degrees.css"
import "../mycareeroption/MyCareerOption.css"

export default ({ degree, mycareeroption, history, }) => {
    const { addDegree } = useContext(DegreeContext)
    const { mycareeroptions, moveToSearchMyCareerOption, addMyCareerOption, getMyCareerOption, deleteMyCareerOption } = useContext(MyCareerOptionContext)


    const moveToSearch = () => {

        const ActiveUser = localStorage.getItem("education_customer")
        const id = mycareeroption.id;
        console.log(mycareeroption.id)

        const educationName = mycareeroption.educationName;
        console.log(mycareeroption.educationName)

        const searchSchool = "true";

        addMyCareerOption({


            educationName: mycareeroption.educationName,
            searchSchool: "true",
            shortList: "true",
            earningsAvg: mycareeroption.earningsAvg,
            userId: parseInt(ActiveUser),
            degreeId: mycareeroption.degreeId,

        })



    }


    return (


        <section className="myCareerOption">

            <div className="myCareerOption__nameEarnings">{mycareeroption.educationName}</div>
            <div className="myCareerOption__earningsAvg">{(mycareeroption.earningsAvg.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }))}</div>
            <div>
                <div className="MCOShortlist__buttons" >
                    <div>
                        <button className="addToSchoolSearch__button"
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
                    
                    <div className="deleteMCObtn__center">

                        <button className="deleteMyCareerOption__button"
                            onClick={() => {

                                deleteMyCareerOption(mycareeroption)

                            }}> Delete  </button>
                    </div>
                </div>


            </div>

        </section>
    );
};


