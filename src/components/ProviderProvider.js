

import React from "react"
import { Route } from "react-router-dom"

import { DegreeProvider } from "./degree/DegreeProvider"
import { MyCareerOptionProvider } from "./mycareeroption/MyCareerOptionProvider"
import { SchoolProvider } from "./school/SchoolProvider"
import { LoanProvider } from "./loan/LoanProvider"
import { DegreeSchoolProvider } from "./degreeschool/DegreeSchoolProvider"
import { MySchoolOptionProvider } from "./myschooloption/MySchoolOptionProvider"
import { FinWorkBenchProvider } from "./loan/FinWorkBenchProvider"



export default (props) => {
    return (
        <>
            <DegreeProvider >
                <MyCareerOptionProvider>
                    <SchoolProvider>
                        <LoanProvider >
                            <DegreeSchoolProvider >
                                <MySchoolOptionProvider >
                                    <FinWorkBenchProvider  >
                                        {props.children}
                                    </FinWorkBenchProvider>
                                </MySchoolOptionProvider >
                            </DegreeSchoolProvider>
                        </LoanProvider >
                    </SchoolProvider>
                </MyCareerOptionProvider>
            </DegreeProvider >
        </>
    )
}
