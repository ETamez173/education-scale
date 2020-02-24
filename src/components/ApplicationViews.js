import React from "react"
import { Route } from "react-router-dom"

import DegreeList from "./degree/DegreeList"
import { DegreeProvider } from "./degree/DegreeProvider"


// import CareerOptionList from "./careeroption/CareerOptionList"


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

import DegreeForm from "./degree/DegreeForm"




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



                                <Route exact path="/degrees/create" render={
                                    props => <DegreeForm {...props} />
                                } />



                                <Route exact path="/">
                                    <MyCareerOptionList {...props} />
                                </Route>

{/* 
                                <Route exact path="/degrees" render={
                                    props => <DegreeForm {...props} />
                                } /> */}

                                <Route exact path="/degrees/create" render={
                                    props => <DegreeForm {...props} />
                                } />

                                <Route path="/degrees/edit/:degreeId(\d+)" render={
                                    props => <DegreeForm {...props} />
                                } />


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


                                        <Route exact path="/mycareerOptions" render={
                                            props => <SchoolList {...props} />
                                        } />

                                        <Route exact path="/mycareerOptions" render={
                                            props => <SchoolOptionList {...props} />
                                        } />

                                        <Route path="/mycareerOptions/:degreeId(\d+)" render={
                                            props => <SchoolList {...props} />
                                        } />


                                        <Route path="/mycareerOptions/:degreeId(\d+)" render={
                                            props => <SchoolOptionList {...props} />
                                        } />


                                    </FinWorkBenchProvider>
                                </MySchoolOptionProvider>
                            </MyCareerOptionProvider>
                        </DegreeProvider>
                    </LoanProvider>
                </DegreeSchoolProvider>
            </SchoolProvider>



            <SchoolProvider>
                <DegreeSchoolProvider>
                    <MySchoolOptionProvider>
                        <LoanProvider>
                            < FinWorkBenchProvider>
                                <MyCareerOptionProvider>

                                    <Route exact path="/analysis" render={
                                        props => <LoanList {...props} />
                                    } />

                                </MyCareerOptionProvider>
                            </FinWorkBenchProvider>
                        </LoanProvider>
                    </MySchoolOptionProvider>
                </DegreeSchoolProvider>
            </SchoolProvider>


        </>
    )
}
