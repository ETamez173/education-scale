//// This is the copy that has the input boxes format with css
//// before attempting the refactor to get the inputs to work in react


import React, { useContext, useState, useEffect } from "react"
import "./Loans.css"
import { LoanContext } from "../loan/LoanProvider"
import { DegreeContext } from "../degree/DegreeProvider"
import { FinWorkBenchContext } from "../loan/FinWorkBenchProvider"
import { DegreeSchoolContext } from "../degreeschool/DegreeSchoolProvider"
import { MySchoolOptionContext } from "../myschooloption/MySchoolOptionProvider"
import MyCareerOption from "../mycareeroption/MyCareerOption"
import { MyCareerOptionContext } from "../mycareeroption/MyCareerOptionProvider"

export default props => {

    // export default ({ finworkbench, degreeSchool, loan, degree, school, history }) => {
    const { addLoan, deleteLoan, updateLoan, history } = useContext(LoanContext)
    // const { finworkbenchs, deleteFinWorkBench, addFinWorkBench, addLoan, updateLoan, deleteLoan } = useContext(LoanContext)
    const { finworkbenchs, deleteFinWorkBench, addFinWorkBench } = useContext(FinWorkBenchContext)
    // const { degrees, addDegree, deleteDegree } = useContext(DegreeContext)
    // const { finworkbenchs, addLoan, deleteLoan, updateLoan } = useContext(LoanContext)
    // const { mycareeroptions } = useContext(MyCareerOptionContext)
  

    // const { deleteMySchoolOption, getMySchoolOptions } = useContext(MySchoolOptionContext)
    const { degreeSchools, deleteDegreeSchool } = useContext(DegreeSchoolContext)

    const [loan, setLoan] = useState({})
    const [mycareeroption, setMyCareerOption] = useState({})
    const [degreeschool, setDegreeSchool] = useState({})
    /////// using props is key since I used destructured props notation

    ////// setLoan(props.loan) 


    console.log(props.loan.id)



    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newLoan = Object.assign({}, loan)
        newLoan[event.target.name] = event.target.value
        setLoan(newLoan)
    }


    function calculateLoan() {

        // Get the user's input from the form. Assume it is all valid.
        // Convert interest from a percentage to a decimal, and convert from
        // an annual rate to a monthly rate. Convert payment period in years
        // to the number of monthly payments.

        //// This where we get the three lon inputs off the DOM

        const totcost = props.loan.schoolTotalCost  // sees this
        // console.log(totcost)
        // console.log(loan.cashPaid)
        const principal = totcost - loan.cashPaid;  // doesnt get this - input needed from below

        // var principal = props.loan.principal;
        console.log(principal)
        var interest = loan.interest / 100 / 12;
        console.log(interest)
        const payments = parseInt(loan.years) * 12;
        console.log(loan.years)
        console.log(payments)


        // Now compute the monthly payment figure, using esoteric math.
        const x = Math.pow(1 + interest, payments);
        console.log(x)
        const monthly = (principal * x * interest) / (x - 1);
        console.log(monthly)
        // Check that the result is a finite number. If so, display the results.
        if (!isNaN(monthly) &&
            (monthly != Number.POSITIVE_INFINITY) &&
            (monthly != Number.NEGATIVE_INFINITY)) {


            const moPmt = round(monthly);
            console.log(moPmt)

            // This figure includes all principal and interest and payments paid over life of loan
            const totLoan = monthly * payments
            console.log(totLoan)

            const totLoanRounded = round(monthly * payments);
            console.log(totLoanRounded)

            // / This figure includes all interest paid over life of loan
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


    //  This takes the loan object in the Finance Workbench and adds the loan principal, total interest and payements etc 

    const constructBCAobject = () => {

        const ActiveUser = localStorage.getItem("education_customer")

        ///// This code calculates the loan taken by subtracting the savings, scholarships, and grants aka cashPaid from 
        //// the schoolTotalCost  .  What you borrow is determined by what you put down 
        const totcost = props.loan.schoolTotalCost
        console.log(totcost)
        const cashpaid = loan.cashPaid
        console.log(loan.cashPaid)

        const loanAmountCalc = totcost - loan.cashPaid;
        console.log(loan)
        console.log(loanAmountCalc)
        //////
        ///// THis code calculates the loan payments given the loan term/lenght in months and the interest rate 
        const iRate = 7;
        const loanTermMonths = 120;
        const loanPayment = loanAmountCalc
        const loanId = null;
        const userId = null;
        const educationName = null;
        const schoolName = null;
        const annualSchoolCost = null;
        const schoolTotalCost = props.loan.schoolTotalCost;
        //  these items below are blank until used later

        // console.log(loanAmount)
        const loanRate = null;
        const loanLengthMonths = null;
        const loanPmt = null;
        const totalLoanPmts = null;
        const cashPaid = null;
        const totalAmountPaid = null;
        // const degreeAnnualEarnings = props.degreeSchools.earningsAvg;
        // console.log(degreeAnnualEarnings)
        const degreeAnnualEarnings2 = degreeSchools.earningsAvg;
        console.log(degreeAnnualEarnings2)
        // const twentyYearEarningsCalc =  props.mycareeroption.earningsAvg;
        // console.log(twentyYearEarningsCalc)
        const benefitCostRatio = null;
        const benefitCostAnalysis = null;

        // addFinWorkBench({
        addLoan({


            userId: parseInt(ActiveUser),
            educationName: props.loan.educationName,
            schoolName: props.loan.schoolName,
            annualSchoolCost: props.loan.annualSchoolCost,
            schoolTotalCost: props.loan.schoolTotalCost,
            //  these items below are blank until used later
            // loanAmount: loan.schoolTotalCost - loan.cashPaid,
            loanAmount: parseInt(loanAmountCalc),
            loanRate: parseInt(loan.interest),
            loanLengthYears: loan.years,
            loanLengthMonths: loan.years * 12,
            loanPmt: 3,
            totalLoanPmts: 3,
            cashPaid: parseInt(loan.cashPaid),
            totalAmountPaid: props.loan.totalAmountPaid,
            degreeAnnualEarnings: props.loan.degreeAnnualEarnings,
            twentyYearEarnings: props.loan.twentyYearEarnings,
            benefitCostRatio: 3,
            finWorkBenchStep: "true",
            benefitCostAnalysis: "true"

        })
        // console.log(loan.schoolTotalCost)
    }

    const editLoanFactors = () => {


        const id = loan.id
        console.log(id)

        const totcost = loan.schoolTotalCost
        console.log(totcost)
        const cashpaid = loan.cashPaid
        console.log(loan.cashPaid)

        const loanAmountCalc = loan.schoolTotalCost - loan.cashPaid;
        console.log(loanAmountCalc)


        // const moPmt = moPmt;
        const moPmt = loan.payment


        updateLoan({

            id: props.loan.id,
            educationName: props.loan.educationName,
            schoolName: props.loan.schoolName,
            annualSchoolCost: props.loan.annualSchoolCost,
            schoolTotalCost: props.loan.schoolTotalCost,


            loanAmount: loan.principal - loan.cashPaid,
            loanRate: loan.interest,
            loanLengthYears: loan.years,
            loanLengthMonths: loan.years * 12,
            loanPmt: moPmt,
            totalLoanPmts: "",
            cashPaid: loan.cashPaid,
            totalAmountPaid: props.loan.totalAmountPaid,
            degreeAnnualEarnings: props.loan.degreeAnnualEarnings,
            twentyYearEarnings: props.loan.twentyYearEarnings,
            benefitCostRatio: 3,
            finWorkBenchStep: "true",
            benefitCostAnalysis: "false",
            userId: localStorage.getItem("education_customer")
        })



    }

    // const id = loan.id;
    const removeLoanObject = () => {
        // const id = loan.id;

        // console.log(finworkbenchs.id)
        deleteLoan(props.loan)
    }



    return (


        <>

            {/* <h2 className="loanForm__title">{editMode ? "Update Loan" : "Add Loan"}</h2> */}

            <section className="finWorkBench">
                <h3 className="loan__name">  </h3>

                <section className="loan__section">


                    <div>   <div className="loan__educationName">{props.loan.educationName}</div></div>
                    <div>    <div className="loan__schoolName">{props.loan.schoolName}</div></div>
                    <div>    <div className="loan__schoolTotCost">${props.loan.schoolTotalCost}</div></div>



                    <fieldset>
                        <div className="loan__inputBox">
                            <div className="form-group">

                                <div className="label__thing">
                                    <label htmlFor="name">Cash paid: </label>
                                </div>
                                <div className="intput__thing">
                                    <input type="number" name="cashPaid" required autoFocus className="form-control"
                                        proptype="number"
                                        placeholder="Cash Paid"
                                        defaultValue={loan.cashPaid}
                                        onChange={handleControlledInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>



                    <fieldset>
                        <div className="loan__inputBox">
                            <div className="form-group">
                                <div className="label__thing">
                                    <label htmlFor="name">Loan principal: </label>
                                </div>
                                <div className="intput__thing">
                                    <input type="number" name="principal" required autoFocus className="form-control"
                                        proptype="number"
                                        placeholder="Loan principal"
                                        defaultValue={loan.principal}
                                        onChange={handleControlledInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>




                    <fieldset>
                        <div className="loan__inputBox4">
                            <div className="form-group">
                                <div className="label__thing">
                                    <label htmlFor="name">Loan Years: </label>
                                </div>
                                <div className="intput__thing">
                                    <input type="number" name="years" required autoFocus className="form-control"
                                        proptype="number"
                                        placeholder="Loan years"
                                        defaultValue={loan.years}
                                        onChange={handleControlledInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="loan__inputBox3">
                            <div className="form-group">
                                <div className="label__thing">
                                    <label htmlFor="name">Loan interest: </label>
                                </div>
                                <div className="intput__thing">
                                    <input type="number" id="interest" name="interest" min="1" max="30" required autoFocus className="form-control"
                                        // <input type="number" id="quantity" name="quantity" min="1" max="5"
                                        /* </input> */
                                        /* <input type="number" name="interest" required autoFocus className="form-control" */
                                        proptype="number"
                                        placeholder="Loan interest"
                                        defaultValue={loan.interest}
                                        onChange={handleControlledInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset>
                        <div className="loan__inputBox4">
                            <div className="form-group">
                                <div className="label__thing">
                                    <label htmlFor="name">Loan Payment: </label>
                                </div>
                                <div className="intput__thing">
                                    <div>   <div className="loan__paymentAmount">${loan.payment}</div></div>
                                    <input type="number" name="payment" required autoFocus className="form-control"
                                        proptype="number"
                                        placeholder="Loan payment"
                                        defaultValue={loan.payment}
                                        onChange={handleControlledInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>





                    <div>
                        <div className="BCA_buttons">

                            <div>
                                <button type="submit"
                                    onClick={evt => {
                                        evt.preventDefault()
                                        calculateLoan()
                                    }}
                                    className="btn btn-primary">Compute Loan
                                </button>
                            </div>

                            <br></br>
                            <br></br>

                            <div>
                                <button className="addLoanInputs__button"
                                    onClick={() => {

                                        editLoanFactors()

                                    }}>
                                    Save Loan
                                </button>
                                <br></br>
                            </div>
                            <br></br>
                            {/* <div >
                                <button className="calculateLoan__button"
                                    onClick={() => {
                                        calculateLoan()
                                    }}> Compute Loan
                        </button>
                            </div> */}
                            <div >
                                <br></br>
                                <button className="runBenefitCostAnalysis__button"
                                    onClick={() => {

                                        constructBCAobject()

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

                                        const id = loan.id;

                                        // console.log(loan.id)
                                        removeLoanObject()
                                        // deleteLoan(loan)

                                    }}> Delete
                        </button>
                            </div>


                            {/* </form> */}

                            {/* <button className="calculateLoan__button"
                onClick={() => {
                    calculateLoan()
                }}> Compute Loan
             </button> */}

                        </div>
                    </div>

                </section>

            </section>

        </>
    )

}


