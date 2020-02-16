{/* <div className="degreeSchools">


    {
        degreeSchools.map(ds => {
            console.log(mycareeroptions, "career options here")
            const findSchoolByDegree = schools.filter(
                (school) => ds.schoolId === school.id

            )
            // if(ds.schoolSearch === false ) 
            if (ds.degreeId === mycareeroptions.degreeId && mycareeroptions.schoolSearch === true)
                // if (ds.schoolId === school.id && ds.degreeId === mycareeroptions.degreeId && mycareeroptions.schoolSearch === true)
                // if (mycareeroptions.schoolSearch === true)
                console.log(mycareeroptions.schoolSearch)
            return <DegreeSchool key={ds.id}
                schools={findSchoolByDegree}
                degreeSchool={ds} />
        })
    }



</div> */}




<div className="degreeSchools">


    {
        degreeSchools.map(ds => {
            console.log(mycareeroptions, "career options here")
            const findSchoolByDegree = schools.filter(
                (school) => ds.schoolId === school.id && MCOlist !== "" 

            )

            const MCOlist = mycareeroptions.find((ds.degreeId === mycareeroptions.degreeId && mycareeroptions.schoolSearch === true)

                // console.log(mycareeroptions.schoolSearch)



            )

        }

        )

    }




</div>