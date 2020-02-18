import React, { useContext, useState, useEffect } from "react"
import "./Loans.css"
import { LoanContext } from "../loan/LoanProvider"
import { DegreeContext } from "../degree/DegreeProvider"
import { FinWorkBenchContext } from "../loan/FinWorkBenchProvider"
import { DegreeSchoolContext } from "../degreeschool/DegreeSchoolProvider"
import { MySchoolOptionContext } from "../myschooloption/MySchoolOptionProvider"
// import DegreeSchool from "../degreeschool/DegreeSchool"

// const twentyYearEarnings =  (loan.degreeAnnualEarnings * 20 )

// export default ({ finworkbench, degreeSchool, loan, degree, school, history }) => {
    export default props => {

    const { finworkbenchs, deleteFinWorkBench, addFinWorkBench } = useContext(FinWorkBenchContext)
    // const { degrees, addDegree, deleteDegree } = useContext(DegreeContext)
    const { loans, addLoan, deleteLoan, updateLoan} = useContext(LoanContext)
    // const { deleteMySchoolOption, getMySchoolOptions } = useContext(MySchoolOptionContext)
    const { degreeSchools, deleteDegreeSchool } = useContext(DegreeSchoolContext)

    const editMode = props.match.params.hasOwnProperty("finworkbenchId")

    const [loan, setLoan] = useState({})


    function calculateLoan() {

        // Get the user's input from the form. Assume it is all valid.
        // Convert interest from a percentage to a decimal, and convert from
        // an annual rate to a monthly rate. Convert payment period in years
        // to the number of monthly payments.



        //// This where we get the three lon inputs off the DOM

        // var principal = document.loandata.principal.value;
        // var interest = document.loandata.interest.value / 100 / 12;
        // var payments = document.loandata.years.value * 12;

        var principal = 10000;
        var interest = 7 / 100 / 12;
        var payments = 10 * 12;

        // Now compute the monthly payment figure, using esoteric math.
        var x = Math.pow(1 + interest, payments);
        var monthly = (principal * x * interest) / (x - 1);

        // Check that the result is a finite number. If so, display the results.
        if (!isNaN(monthly) &&
            (monthly != Number.POSITIVE_INFINITY) &&
            (monthly != Number.NEGATIVE_INFINITY)) {


            const moPmt = round(monthly);
            console.log(moPmt)
            const totLoan = monthly * payments
            console.log(totLoan)

            // const totLoan = round(monthly * payments);
            const totInterest =
                round((monthly * payments) - principal);
            console.log(totInterest)


            // document.loandata.payment.value = round(monthly);
            // document.loandata.total.value = round(monthly * payments);
            // document.loandata.totalinterest.value = 
            //     round((monthly * payments) - principal);
        }
        // Otherwise, the user's input was probably invalid, so don't
        // display anything.
        else {
            // document.loandata.payment.value = "";
            // document.loandata.total.value = "";
            // document.loandata.totalinterest.value = "";

        }
    }

    // This simple method rounds a number to two decimal places.
    function round(x) {
        return Math.round(x * 100) / 100;
    }



    const constructBCAobject = () => {

        const ActiveUser = localStorage.getItem("education_customer")

        ///// This code calculates the loan taken by subtracting the savings, scholarships, and grants aka cashPaid from 
        //// the schoolTotalCost  .  What you borrow is determined by what you put down 
        const totcost = finworkbenchs.schoolTotalCost
        console.log(totcost)
        const cashpaid = finworkbenchs.cashPaid
        console.log(finworkbenchs.cashPaid)

        const loanAmountCalc = finworkbenchs.schoolTotalCost - finworkbenchs.cashPaid;
        console.log(loanAmountCalc)
        //////
        ///// THis code calculates the loan payments given the loan term/lenght in months and the interest rate 
        const iRate = 7;
        const loanTermMonths = 120;
        const loanPayment = loanAmountCalc

        const userId = null;
        const educationName = null;
        const schoolName = null;
        const annualSchoolCost = null;
        const schoolTotalCost = null;
        //  these items below are blank until used later
        const loanAmount = loanAmountCalc;
        console.log(loanAmount)
        const loanRate = null;
        const loanLengthMonths = null;
        const loanPmt = null;
        const totalLoanPmts = null;
        const cashPaid = null;
        const totalAmountPaid = null;
        const degreeAnnualEarnings = null;
        const twentyYearEarnings = null;
        const benefitCostRatio = null;
        const benefitCostAnalysis = null;





        // addFinWorkBench({
        addLoan({

            // took this from DegreeSchool.js Loanlist does a complex filter to get working



            userId: parseInt(ActiveUser),
            educationName: finworkbenchs.educationName,
            schoolName: finworkbenchs.schoolName,
            annualSchoolCost: finworkbenchs.annualSchoolCost,
            schoolTotalCost: finworkbenchs.schoolTotalCost,
            //  these items below are blank until used later
            loanAmount: finworkbenchs.schoolTotalCost - finworkbenchs.cashPaid,
            loanRate: 7,
            loanLengthMonths: 120,
            loanPmt: 1,
            totalLoanPmts: 1,
            cashPaid: 1,
            totalAmountPaid: degreeSchools.totalAmountPaid,
            degreeAnnualEarnings: degreeSchools.degreeAnnualEarnings,
            twentyYearEarnings: 40,
            benefitCostRatio: 10,
            finWorkBenchStep: "true",
            benefitCostAnalysis: "true"

        })




        const handleControlledInputChange = (event) => {
            /*
                When changing a state object or array, always create a new one
                and change state instead of modifying current one
            */
            const newLoan = Object.assign({}, loan)
            newLoan[event.target.name] = event.target.value
            setLoan(newLoan)
        }
    
        const setDefaults = () => {
            if (editMode) {
                const loanId = parseInt(props.match.params.loanId)
                const selectedLoan = loans.find(l => l.id === loanId) || {}
                setLoan(selectedLoan)
            }
        }
    
        useEffect(() => {
            setDefaults()
        }, [loans])
    
        const constructNewLoan = () => {
    
            
            // const locationId = parseInt(animal.locationId)
    
            // if (locationId === 0) {
            //     window.alert("Please select a location")
            // } 
            
            // else {
                if (editMode) {
                    updateLoan({
                        // id: animal.id,
                        // name: animal.name,
                        // breed: animal.breed,
                        // locationId: locationId,
                        // treatment: animal.treatment,
                        customerId: parseInt(localStorage.getItem("school_customer"))
                    })
                        .then(() => props.history.push("/loans"))
                } else {
                    addLoan({
                        // name: animal.name,
                        // breed: animal.breed,
                        // locationId: locationId,
                        // treatment: animal.treatment,
                        customerId: parseInt(localStorage.getItem("school_customer"))
                    })
                       .then(() => props.history.push("/loans"))
                }
            }
        }
    
    
    }


    return (


        <>
            <section className="finWorkBench">
                <h3 className="loan__name">  </h3>

                <section className="loan__section">

                    {/* <div className="loan__educationName">{finworkbenchs.educationName}</div>
                    <div className="loan__schoolName">{finworkbenchs.schoolName}</div>
                    <div className="loan__schoolTotCost">${finworkbenchs.schoolTotalCost}</div> */}
                    {/* <div className="loan__cashPaid">${finworkbench.cashpaid}</div> */}
                    {/* these below are inputs items for calculating the loan payments etc */}

                    {/* The amounts from scholarships, grants, and savings will be */}
                    <input type="text" className="loan__cashPaid" name="cashpaid" size="8">
                    </input>


                    {/* The loan Principal Amount will be */}
                    <input type="text" className="loan__loanPrincipalAmount" name="principal" size="8" >
                    </input>


                    {/* <div className="loan__loanAmount">${finworkbench.loanAmount}</div> */}
                    {/* schoolTotalCost - (Cash paid + grantsOther) = loanAmount */}

                    {/* <div className="loan__loanAmount">${finWorkBench.cashPaid}</div>
                            <div className="loan__loanAmount">${finWorkBench.grantsAndOther}</div> */}

                    {/* The loan years to repay will be */}

                    <input type="text" className="loan__yearsToRepay" name="years" size="8" >
                    </input>

                    {/* <div className="loan__yearsToRepay">{finworkbench.loanLengthMonths} Months</div> */}

                    {/* <div className="loan__loanRate">{finworkbench.loanRate}%</div> */}

                    {/* <input type="text" className="loan__totalInerest" name="totalinterest" size="8" >
                    </input> */}

                    {/* <div className="loan__totalLoanPmts">${finworkbench.loanPmt}</div> */}


                    {/* The loan interest rate will be */}
                    <input type="text" className="loan__interestRate" name="interest" size="8">

                    </input>





                    {/* The monthly payment will be */}
                    <input type="text" className="loan__monthlyPmts" name="payment" size="8">
                    </input>




                    <div className="BCA_buttons">

                        <div>
                        <button className="addLoanInputs__button"
                                onClick={() => {

                                    // editBCAobject()
                                    // this sets up the edit thht looks like an form

                                    // see code for degree

                                }}>
                                Edit Savings, Scholarships, Grants, % Rate and Years
                        </button>
                    
                        <br></br>
                        <br></br>
                        </div>
                        <br></br>
                        <br></br>

                        <div > 
                        <button className="calculateLoan__button"
                            onClick={() => {
                                // calculateLoan()
                            }}> Compute Loan
                        </button>
                        </div>


                        <div > 
                            <br></br>
                            <br></br>
                            <button className="runBenefitCostAnalysis__button"
                                onClick={() => {

                                    // constructBCAobject()
                                    // this creates the loan object

                                    // see code for degree

                                }}>Run Benefit Analysis
                        </button>
                 
                        <br></br>
                        <br></br>
                        </div>
                            <br></br>
                            <br></br>
                            <br></br>

                        <div>
                        <button className="deleteFinWorkBenchItem__button"

                                    onClick={() => {

                                        // deleteLoan(finworkbench)

                                    }}> Delete
                        </button>
                        </div>

                    </div>
                  

                </section>

            </section>

            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <h3>Enter Loan Information:</h3>


            <div> P)</div>
            <div> Cash Paid - Scholarships, Grants, Savings:</div>
            <input type="text" name="cashpaid" size="8">
            </input>




            <div> 1)</div>
            <div> Amount of the loan (any currency):</div>
            <input type="text" name="principal" size="8" >
            </input>

            <div> 2)</div>
            <div> Annual percentage rate of interest:</div>
            <input type="text" name="interest" size="8">
            </input>

            <div> 3)</div>
            <div> Repayment period in years:</div>
            <input type="text" name="years" size="8" >
            </input>

            <div > </div>
            <button className="calculateLoan__button"
                onClick={() => {
                    // calculateLoan()
                }}> Compute Loan
            </button>

            <div> 4)</div>
            <div> Your monthly payment will be:</div>
            <input type="text" name="payment" size="12">
            </input>

            <div> 6)</div>
            <div> Your total interest payments will be:</div>
            <input type="text" name="totalinterest" size="12">
            </input>


            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}




        </>
    )

            

