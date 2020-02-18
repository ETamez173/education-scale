// import SchoolList from "../school/SchoolList" 



// export default (props) => {
// 	const { tasks } = useContext(TaskContext) 
	
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
// 	) 
// } 




// //this is the working button before props push

//  <button className="saveToMyCareerOptions__button"
//  onClick={() => {
   
//          moveToSearch()

//          history.push("/mycareeroptions/${mycareeroption.degreeId}") 
  

//      //     history.push("/mycareeroptions") 
//      //   }) 
//  }}> Move To School Search </button>


//  // second working copy

//  <button className="saveToMyCareerOptions__button"
//  onClick={() =>  props.history.push("/SchoolSearch/create")}>
    
//     {
//          moveToSearch()

//          history.push("/mycareeroptions/${mycareeroption.degreeId}") 
  
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

//             history.push("/mycareeroptions/${mycareeroption.degreeId}") 
     

//         //     history.push("/mycareeroptions") 
//         //   }) 
//     }}> Move To School Search </button>



//     <button className="saveToMyCareerOptions__button"
//     onClick={() => {
      
//             moveToSearch()

//             history.push("/mycareeroptions/${mycareeroption.degreeId}") 
     

//         //     history.push("/mycareeroptions") 
//         //   }) 
//     }}> Move To School Search </button>




// // from AnimalDetails.js

//    const chosenDegreeId = parseInt(props.match.params.degreeId, 10)

//    schools.filter(school => school.degreeid === chosenDegreeId)





//    <Route path="/mycareeerOptions/:degreeId(\d+)" render={
//     props => <FilteredSchoolList {...props} />
// } />






// {
//     degreeschools.map(ds => {
//         const chosenDegreeSearch = schools.filter(
//             (school) => {
//                 return ds.schoolId === ds.degree.school.id
//             }
//         )
//         return <DegreeSchool key={ds.id}
//                          degrees={chosenDegreeSearch}
//                          degreeschool={ds} />
//     })
// }








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
{
<form name="loandata"></form>>
  <table>
    <tr><td colspan="3"><b>Enter Loan Information:</b></td></tr>
    <tr>
      <td> 1)</td> 
      <td> Amount of the loan (any currency):</td> 
      <td> <input type="text" name="principal" size="12" 
                 onchange="calculate() "> </td> 
    </tr> 
    <tr> 
      <td> 2)</td> 
      <td> Annual percentage rate of interest:</td> 
      <td> <input type="text" name="interest" size="12" 
                 onchange="calculate() "> </td> 
    </tr> 
    <tr> 
      <td> 3)</td> 
      <td> Repayment period in years:</td> 
      <td> <input type="text" name="years" size="12" 
                 onchange="calculate() "> </td> 
    </tr> 
    <tr> <td colspan="3"> 
      <input type="button" value="Compute" onclick="calculate() "> 
    </td> </tr> 
    <tr> <td colspan="3"> 
      <b> Payment Information:</b> 
    </td> </tr> 
    <tr> 
      <td> 4)</td> 
      <td> Your monthly payment will be:</td> 
      <td> <input type="text" name="payment" size="12"> </td> 
    </tr> 
    <tr> 
      <td> 5)</td> 
      <td> Your total payment will be:</td> 
      <td> <input type="text" name="total" size="12"> </td> 
    </tr> 
    <tr> 
      <td> 6)</td> 
      <td> Your total interest payments will be:</td> 
      <td> <input type="text" name="totalinterest" size="12"> </td> 
    </tr> 
  </table> 
</form> 

<!--
  This is the JavaScript program that makes the example work. Note that
  this script defines the calculate() function called by the event
  handlers in the form. The function refers to values in the form
  fields using the names defined in the HTML code above.
--> 
<script language="JavaScript"> 
function calculate() {
    // Get the user's input from the form. Assume it is all valid.
    // Convert interest from a percentage to a decimal, and convert from
    // an annual rate to a monthly rate. Convert payment period in years
    // to the number of monthly payments.
    var principal = document.loandata.principal.value 
    var interest = document.loandata.interest.value / 100 / 12 
    var payments = document.loandata.years.value * 12 

    // Now compute the monthly payment figure, using esoteric math.
    var x = Math.pow(1 + interest, payments) 
    var monthly = (principal*x*interest)/(x-1) 

    // Check that the result is a finite number. If so, display the results.
    if (!isNaN(monthly) &amp &amp  
        (monthly != Number.POSITIVE_INFINITY) &amp &amp 
        (monthly != Number.NEGATIVE_INFINITY)) {

        document.loandata.payment.value = round(monthly) 
        document.loandata.total.value = round(monthly * payments) 
        document.loandata.totalinterest.value = 
            round((monthly * payments) - principal) 
    }
    // Otherwise, the user's input was probably invalid, so don't
    // display anything.
    else {
        document.loandata.payment.value = "" 
        document.loandata.total.value = "" 
        document.loandata.totalinterest.value = "" 
    }
}

// This simple method rounds a number to two decimal places.
function round(x) {
  return Math.round(x*100)/100 
}
</script> 
</body> 








{/* 
            <section > */}
      {/* <form > */}
      <h3>Enter Loan Information:</h3>

      <div> 1)</div> 
      <div> Amount of the loan (any currency):</div> 
      <input type="text" name="principal" size="12" >

              {/* onchange="calculate() ">   */}
              </input>
  
      <div> 2)</div> 
      <div> Annual percentage rate of interest:</div> 
      <input type="text" name="interest" size="12">
                 {/* onchange="calculate() ">  */}
                 </input> 
 
      <div> 3)</div> 
      <div> Repayment period in years:</div> 
      <input type="text" name="years" size="12" >
                {/* onchange="calculate() ">  */}
                 </input> 
   
      <div > </div>
      <input type="button" value="Compute" >
    {/* //   onClick="calculate() " */}
      </input> 

      <div > </div>
      <h1> Payment Information:</h1> 

      <div> 4)</div> 
      <div> Your monthly payment will be:</div> 
      <input type="text" name="payment" size="12">  
      
      </input> 
  
      <div> 5)</div> 
      <div> Your total payment will be:</div> 
      <input type="text" name="total" size="12">  </input> 

      <div> 6)</div> 
      <div> Your total interest payments will be:</div> 
      <input type="text" name="totalinterest" size="12">  </input> 
       {/* </form> */}
       {/* </section>> */}





       
{/* <script language="JavaScript">> */}

function calculate() {

// Get the user's input from the form. Assume it is all valid.
    // Convert interest from a percentage to a decimal, and convert from
    // an annual rate to a monthly rate. Convert payment period in years
    // to the number of monthly payments.
    var principal = document.loandata.principal.value;
    var interest = document.loandata.interest.value / 100 / 12;
    var payments = document.loandata.years.value * 12;

    // Now compute the monthly payment figure, using esoteric math.
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);

    // Check that the result is a finite number. If so, display the results.
    if (!isNaN(monthly) && 
        (monthly != Number.POSITIVE_INFINITY) &&
        (monthly != Number.NEGATIVE_INFINITY)) {

        document.loandata.payment.value = round(monthly);
        document.loandata.total.value = round(monthly * payments);
        document.loandata.totalinterest.value = 
            round((monthly * payments) - principal);
    }
    // Otherwise, the user's input was probably invalid, so don't
    // display anything.
    else {
        document.loandata.payment.value = "";
        document.loandata.total.value = "";
        document.loandata.totalinterest.value = "";
    
    }
}

// This simple method rounds a number to two decimal places.
function round(x) {
  return Math.round(x*100)/100;
}
