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

import { FinWorkBenchProvider } from "./loan/FinWorkBenchProvider"
import FinWorkBenchList from "./loan/FinWorkBenchList"


import LoanForm from "./loan/LoanForm"

// import MyCareerOptionList from "./mycareeroption/MyCareerOptionList"
// import { MyCareerOptionPovider } from "./mycareeroption/MyCareerOptionProvider";


// import { EarningProvider } from "./earning/EarningProvider"
// import EarningList from "./earning/EarningList"


export default (props) => {
    return (
        <>

            <SchoolProvider>
                <DegreeProvider>
                    <MyCareerOptionProvider>
                        <DegreeSchoolProvider>

                            < FinWorkBenchProvider>
                                <Route exact path="/">
                                    <DegreeList />
                                </Route>

                                {/* <Route exact path="/">
                        <CareerOptionList />
                    </Route> */}
                                {/* <Route
                            path="/tasks/editTasks/:taskId(\d+)"
                            render={props => <TaskForm {...props} />}
                        /> */}

                                {/* <Route
                            path="/search/:mycareeroption.id(\d+)"
                            render={props => <MyCareerOptionList {...props} />}
                        /> */}

                                {/* <Route exact path="/">
                            <SchoolList {...props} />
                        </Route> */}


                                <Route exact path="/">
                                    <MyCareerOptionList {...props} />
                                </Route>
                                {/* 
                        <Route exact path="/">
                        <SchoolList {...props} />
                    </Route> */}
                            </FinWorkBenchProvider>
                        </DegreeSchoolProvider>
                    </MyCareerOptionProvider>
                </DegreeProvider>
            </SchoolProvider>




            <SchoolProvider>
                <DegreeSchoolProvider>
                    <LoanProvider>
                        <DegreeProvider>
                            <MyCareerOptionProvider>
                                <MySchoolOptionProvider>
                                    < FinWorkBenchProvider>


                                        <Route path="/mycareerOptions/:degreeId(\d+)" render={
                                            props => <SchoolList {...props} />
                                        } />


                                        <Route path="/mycareerOptions/:degreeId(\d+)" render={
                                            props => <SchoolOptionList {...props} />
                                        } />
                                        {/* 


                    <Route exact path="/schools">
                        <SchoolList />
                    </Route>

                    <Route exact path="/schools">
                        <SchoolOptionList />
                    </Route> */}



                                    </FinWorkBenchProvider>
                                </MySchoolOptionProvider>
                            </MyCareerOptionProvider>
                        </DegreeProvider>
                    </LoanProvider>
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
                        < FinWorkBenchProvider>
                            {/* <Route exact path="/analysis" render={
                            props => <DegreeSchoolList {...props} />
                        } /> */}
                            {/* 
                            <Route exact path="/analysis" render={
                                props => <FinWorkBenchList {...props} />
                            } /> */}

                            {/* <Route exact path="/analysis/create" render={
                                props => <LoanForm {...props} />
                            } /> */}
                            <Route exact path="/analysis" render={
                                props => <LoanList {...props} />
                            } />



                            
                            <Route path="/analysis/edit/:loanId(\d+)" render={
                                props => <LoanForm {...props} />
                            } /> 


                            <Route path="/analysis/:loanId(\d+)" render={
                                props => <LoanForm {...props} />
                            } />

                            <Route exact path="/analysis/create">
                                <LoanForm />
                            </Route>


                        </FinWorkBenchProvider>
                    </LoanProvider>
                </DegreeSchoolProvider>
            </SchoolProvider>
            {/* </SchoolProvider>
            </DegreeProvider> */}


        </>
    )
}
