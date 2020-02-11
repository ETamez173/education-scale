import SchoolList from "../school/SchoolList";



export default (props) => {
	const { tasks } = useContext(TaskContext);
	
	return (
<>

		<h1>TASKS</h1>
        <button onClick={() => props.history.push("/tasks/create")}>
            Add Task
        </button>
		<div className="tasks">
			
		{tasks.map(task => {
				if(task.taskCompletion === false)
			
    return <Task {...props} key={task.id} task={task}  />
})}
		</div>
		</>
	);
};




//this is the working button before props push

 <button className="saveToMyCareerOptions__button"
 onClick={() => {
   
         moveToSearch()

         history.push("/mycareeroptions/${mycareeroption.degreeId}");
  

     //     history.push("/mycareeroptions");
     //   });
 }}> Move To School Search </button>


 // second working copy

 <button className="saveToMyCareerOptions__button"
 onClick={() =>  props.history.push("/SchoolSearch/create")}>
    
    {
         moveToSearch()

         history.push("/mycareeroptions/${mycareeroption.degreeId}");
  
 }}> Move To School Search </button>



/// trying to implement this onclick

 <button onClick={() => props.history.push("/tasks/create")}>
 Add Task
</button>



/////// scrap  code 


   
    ///  from Tasklist.js

    <button onClick={() => props.history.push("/tasks/create")}>
    Add Task
   </button>



    <button className="saveToMySchoolSearch__button"
    onClick={() =>  props.history.push("/SchoolSearch/create")}>
    Move To School Search
        
        {
      
            moveToSearch()

            history.push("/mycareeroptions/${mycareeroption.degreeId}");
     

        //     history.push("/mycareeroptions");
        //   });
    }}> Move To School Search </button>



    <button className="saveToMyCareerOptions__button"
    onClick={() => {
      
            moveToSearch()

            history.push("/mycareeroptions/${mycareeroption.degreeId}");
     

        //     history.push("/mycareeroptions");
        //   });
    }}> Move To School Search </button>




// from AnimalDetails.js

   const chosenDegreeId = parseInt(props.match.params.degreeId, 10)

   schools.filter(school => school.degreeid === chosenDegreeId)





   <Route path="/mycareeerOptions/:degreeId(\d+)" render={
    props => <FilteredSchoolList {...props} />
} />