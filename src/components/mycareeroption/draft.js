// import SchoolList from "../school/SchoolList";



// export default (props) => {
// 	const { tasks } = useContext(TaskContext);
	
// 	return (
// <>

// 		<h1>TASKS</h1>
//         <button onClick={() => props.history.push("/tasks/create")}>
//             Add Task
//         </button>
// 		<div className="tasks">
			
// 		{tasks.map(task => {
// 				if(task.taskCompletion === false)
			
//     return <Task {...props} key={task.id} task={task}  />
// })}
// 		</div>
// 		</>
// 	);
// };




// //this is the working button before props push

//  <button className="saveToMyCareerOptions__button"
//  onClick={() => {
   
//          moveToSearch()

//          history.push("/mycareeroptions/${mycareeroption.degreeId}");
  

//      //     history.push("/mycareeroptions");
//      //   });
//  }}> Move To School Search </button>


//  // second working copy

//  <button className="saveToMyCareerOptions__button"
//  onClick={() =>  props.history.push("/SchoolSearch/create")}>
    
//     {
//          moveToSearch()

//          history.push("/mycareeroptions/${mycareeroption.degreeId}");
  
//  }}> Move To School Search </button>



// /// trying to implement this onclick

//  <button onClick={() => props.history.push("/tasks/create")}>
//  Add Task
// </button>



// /////// scrap  code 


   
//     ///  from Tasklist.js

//     <button onClick={() => props.history.push("/tasks/create")}>
//     Add Task
//    </button>



//     <button className="saveToMySchoolSearch__button"
//     onClick={() =>  props.history.push("/SchoolSearch/create")}>
//     Move To School Search
        
//         {
      
//             moveToSearch()

//             history.push("/mycareeroptions/${mycareeroption.degreeId}");
     

//         //     history.push("/mycareeroptions");
//         //   });
//     }}> Move To School Search </button>



//     <button className="saveToMyCareerOptions__button"
//     onClick={() => {
      
//             moveToSearch()

//             history.push("/mycareeroptions/${mycareeroption.degreeId}");
     

//         //     history.push("/mycareeroptions");
//         //   });
//     }}> Move To School Search </button>




// // from AnimalDetails.js

//    const chosenDegreeId = parseInt(props.match.params.degreeId, 10)

//    schools.filter(school => school.degreeid === chosenDegreeId)





//    <Route path="/mycareeerOptions/:degreeId(\d+)" render={
//     props => <FilteredSchoolList {...props} />
// } />






{
    degreeschools.map(ds => {
        const chosenDegreeSearch = schools.filter(
            (school) => {
                return ds.schoolId === ds.degree.school.id
            }
        )
        return <DegreeSchool key={ds.id}
                         degrees={chosenDegreeSearch}
                         degreeschool={ds} />
    })
}








       {/* { */}

                    // degreeSchools.map(degreeSchool => {
                        // Find the school that offers the selected degree
                        // if the search finds an object that is marked for school search
                        
///// STOPPED HERE at 6pm on 2-11-20 - need to find way to search by true search value!!!!!!!!

                        //  if( mycareeroption.schoolSearch  === true ) {  

                        // const foundedSchool = degreeSchools.find(
                        //     (degreeschool, mycareeroption) => {
                        //         return school.id === degreeSchool.schoolId
                        //         // return (school.id === degreeSchool.schoolId && MyCareerOption.schoolsearch === true)
                        //         // return (degreeschool.degree.id === degreeschool.degreeId && mycareeroption.degreeId === degreeschool.degreeId )
                        //         // return degreeschool.degree.id === degreeschool.degreeId



                        //     }
                        // )

                        // Pass the matching location to Employee component
                        // return <DegreeSchool key={degreeSchool.id}
                        //     school={foundedSchool}
                        //     degreeSchool={degreeSchool} />

                        // }
            //         }
            //      )
            //    }
