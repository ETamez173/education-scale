import React, { useContext } from "react"
import { DegreeContext } from "../degree/DegreeProvider";
import { MyCareerOptionContext } from "./MyCareerOptionProvider";

// import "./Degrees.css"


// export default (props) => {
export default ({ degree, mycareeroption }) => {

    const { degrees } = useContext(DegreeContext)
    // const { addDegree } = useContext(DegreeContext)
    // const { searchMarkedTrueForCareerOption, addMyCareerOption } = useContext(MyCareerOptionContext)
    // const { MyCareerOptions } = useContext(MyCareerOptionContext)
    const { addMyCareerOption } = useContext(MyCareerOptionContext)

    const moveToSearch = () => {

        /// Creating the object right here >>>>>

        const ActiveUser = localStorage.getItem("education_customer")
        const id = mycareeroption.id;
        console.log(mycareeroption.id)

        const educationName = mycareeroption.educationName;
        console.log(mycareeroption.educationName)
        // const degreeId = degree.id

        const searchSchool = "true";
      
     
            addMyCareerOption({
   
            educationName: mycareeroption.educationName,
            searchSchool: "true",
            earningsAvg: mycareeroption.earningsAvg,
            userId: parseInt(ActiveUser),
            degreeId: mycareeroption.degreeId,
            // degreeId: degree.id
           
        })

        // .then(() => props.history.push("/degrees"));

    }


    return (


        <section className="degree">

            <div className="degree__nameEarnings">{mycareeroption.educationName}</div>
            <div className="degree__earningsAvg">${mycareeroption.earningsAvg}</div>
          
            
            {/* <button className="saveToMyCareerOptions__button"
            // onClick={() =>  props.history.push("/SchoolSearch/create")}>
      onClick={() =>  props.history.push("/mycareeroptions/${mycareeroption.degreeId}")}>
                 {
                moveToSearch()

                // history.push("/mycareeroptions/${mycareeroption.degreeId}");
  
            }}> Move To School Search </button> */}


            <button className="saveToMyCareerOptions__button"
                onClick={() => {
                  
                        moveToSearch()

                        // history.push("/mycareeroptions/${mycareeroption.degreeId}");
                 
                }}> Move To School Search </button>


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





///  from Tasklist.js

// export default (props) => {
// 	const { tasks } = useContext(TaskContext);

	
// return (
//     <>
    
//             <h1>TASKS</h1>


//             <button onClick={() => props.history.push("/tasks/create")}>
//                 Add Task
//             </button>

//             <div className="tasks">
                
//             {tasks.map(task => {
//                     if(task.taskCompletion === false)
                
//         return <Task {...props} key={task.id} task={task}  />
//     })}
//             </div>
//             </>
//         );
//     };
    

 