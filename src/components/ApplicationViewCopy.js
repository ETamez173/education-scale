import React from "react"
import { Route } from "react-router-dom"

import DegreeList from "./degree/DegreeList"
import { DegreeProvider } from "./degree/DegreeProvider"


import CareerOptionList from "./careeroption/CareerOptionList"
// import { DegreeProvider } from "./degree/DegreeProvider"

import { MyCareerOptionProvider } from "./mycareeroption/MyCareerOptionProvider"
import MyCareerOptionList from "./mycareeroption/MyCareerOptionList"


import { SchoolProvider } from "./school/SchoolProvider"
import SchoolList from "./school/SchoolList"


import SchoolOptionList from "./schooloption/SchoolOptionList"

import { LoanProvider } from "./loan/LoanProvider"
import LoanList from "./loan/LoanList"

import DegreeSchoolList from "./degreeschool/DegreeSchoolList"
import { DegreeSchoolProvider } from "./degreeschool/DegreeSchoolProvider"


import { MySchoolOptionProvider } from "./myschooloption/MySchoolOptionProvider"
// import MyCareerOptionList from "./mycareeroption/MyCareerOptionList"
// import { MyCareerOptionPovider } from "./mycareeroption/MyCareerOptionProvider";


// import { EarningProvider } from "./earning/EarningProvider"
// import EarningList from "./earning/EarningList"


export default (props) => {
    return (
        <>

            <DegreeProvider>
                <MyCareerOptionProvider>
                    <DegreeSchoolProvider>
                        <Route exact path="/">
                            <DegreeList />
                        </Route>

                        {/* <Route exact path="/">
                        <CareerOptionList />
                    </Route> */}

                        {/* 
/// got this from Peacocks */}
                        <Route
                            exact
                            path="/schoolsearch"
                            render={props => <MyCareerOptionList {...props} />}
                        />




                        <Route
                            path="/MyCareerOptionList/:mycareeroption.id(\d+)"
                            render={props => <MyCareerOptionList {...props} />}
                        />

                        {/* 
                        <Route
                            path="/tasks/editTasks/:taskId(\d+)"
                            render={props => <TaskForm {...props} />}
                        /> */}

                        {/* 
                        <Route
                            exact
                            path="/tasks"
                            render={props => <TaskList {...props} />}
                        /> */}




                        {/* <Route exact path="/">
                            <MyCareerOptionList />
                        </Route> */}
                    </DegreeSchoolProvider>
                </MyCareerOptionProvider>
            </DegreeProvider>


            <SchoolProvider>
                <DegreeSchoolProvider>
                    < MySchoolOptionProvider>
                        <Route exact path="/schools">
                            <SchoolList />
                        </Route>

                        <Route exact path="/schools">
                            <SchoolOptionList />
                        </Route>

                    </MySchoolOptionProvider>
                </DegreeSchoolProvider>
            </SchoolProvider>


            {/* <DegreeProvider>
                <SchoolProvider>

                    <Route exact path="/analysis" render={
                        props => <SchoolList {...props} />
                    } />

                </SchoolProvider>
            </DegreeProvider> */}

            {/* <DegreeProvider>
                <SchoolProvider>
                    <LoanProvider>
                        <Route exact path="/analysis" render={
                            props => <LoanList {...props} />
                        } />
                    </LoanProvider>
                </SchoolProvider>
            </DegreeProvider> */}

            {/* <DegreeProvider>
                <SchoolProvider> */}
            <SchoolProvider>
                <DegreeSchoolProvider>
                    <LoanProvider>
                        <Route exact path="/analysis" render={
                            props => <DegreeSchoolList {...props} />
                        } />
                    </LoanProvider>
                </DegreeSchoolProvider>
            </SchoolProvider>
            {/* </SchoolProvider>
            </DegreeProvider> */}


        </>
    )
}
