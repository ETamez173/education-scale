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

    const [moPmt, setMoPmt] = useState()
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


    let totcost = 0;
    let principal = 0;
    let payments = 0;
    let totLoanRounded = 0;


    function calculateLoan() {

        // Get the user's input from the form. Assume it is all valid.
        // Convert interest from a percentage to a decimal, and convert from
        // an annual rate to a monthly rate. Convert payment period in years
        // to the number of monthly payments.


        totcost = props.loan.schoolTotalCost  // sees this
        principal = totcost - loan.cashPaid;  // sees loan.cashPaid in input field
        console.log(principal)


        /// payment calculations here
        const interest = loan.interest / 100 / 12;
        console.log(interest)

        payments = parseInt(loan.years) * 12;
        console.log(loan.years)
        console.log(payments)


        // Now compute the monthly payment figure, using esoteric math.
        const x = Math.pow(1 + interest, payments);
        console.log(x)
        const monthly = (principal * x * interest) / (x - 1);
        console.log(monthly)

        // Check that the result is a finite number. If so, display the results.
        let moPmt = 0;

        if (!isNaN(monthly) &&
            (monthly != Number.POSITIVE_INFINITY) &&
            (monthly != Number.NEGATIVE_INFINITY)) {

            moPmt = round(monthly, 2);
            console.log(moPmt)

            // This figure includes all principal and interest and payments paid over life of loan
            const totLoan = monthly * payments
            console.log(totLoan)

            totLoanRounded = round(monthly * payments, 2);
            console.log(totLoanRounded)

            // / This figure includes all interest paid over life of loan
            const totInterest =
                round((monthly * payments) - principal, 2);
            console.log(totInterest)


        }
        // Otherwise, the user's input was probably invalid, so don't
        // display anything.
        else {
            // document.loandata.payment.value = "";
            // document.loandata.total.value = "";
            // document.loandata.totalinterest.value = "";

        }

        setMoPmt(moPmt)
        console.log(moPmt)
    }


    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
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
        const loanPmt = moPmt;
        console.log(loanPmt)
        const totalLoanPmts = payments;
        const loanPayment = loanAmountCalc
        const schoolTotalCost = props.loan.schoolTotalCost;


        const iRate = 7;
        const loanTermMonths = 120;
        const loanId = null;
        const userId = null;
        const educationName = null;
        const schoolName = null;
        const annualSchoolCost = null;
        const loanRate = null;
        const loanLengthMonths = null;
        const cashPaid = null;
        const totalAmountPaid = null;
        const benefitCostRatio = null;
        const benefitCostAnalysis = null;

        addLoan({


            userId: parseInt(ActiveUser),
            educationName: props.loan.educationName,
            schoolName: props.loan.schoolName,
            annualSchoolCost: props.loan.annualSchoolCost,
            schoolTotalCost: props.loan.schoolTotalCost,
            //  these items below are blank until used later

            loanAmount: parseInt(loanAmountCalc),
            loanRate: parseInt(loan.interest),
            loanLengthYears: parseInt(loan.years),
            loanLengthMonths: parseInt(loan.years * 12),
            loanPmt: moPmt,
            totalLoanPmts: round(loanPmt * loan.years * 12, 0),
            cashPaid: parseInt(loan.cashPaid),
            totalAmountPaid: round((loanPmt * loan.years * 12) + parseInt(loan.cashPaid), 0),
            degreeAnnualEarnings: props.loan.degreeAnnualEarnings,
            twentyYearEarnings: props.loan.twentyYearEarnings,
            benefitCostRatio: round(props.loan.twentyYearEarnings / ((loanPmt * loan.years * 12) + parseInt(loan.cashPaid))),
            finWorkBenchStep: "true",
            benefitCostAnalysis: "true",
            step: "finworkbench"

        })
   
    }

    const editLoanFactors = () => {
        const loanPmt = moPmt;

        const id = props.loan.id
        console.log(id)

        const totcost = props.loan.schoolTotalCost
        console.log(totcost)
        const cashpaid = loan.cashPaid
        console.log(loan.cashPaid)

        const loanAmountCalc = props.loan.schoolTotalCost - loan.cashPaid;
        console.log(loanAmountCalc)

        updateLoan({

            id: props.loan.id,
            educationName: props.loan.educationName,
            schoolName: props.loan.schoolName,
            annualSchoolCost: props.loan.annualSchoolCost,
            schoolTotalCost: props.loan.schoolTotalCost,
            loanAmount: parseInt(loanAmountCalc),
            loanRate: parseInt(loan.interest),
            loanLengthYears: parseInt(loan.years),
            loanLengthMonths: parseInt(loan.years * 12),
            loanPmt: moPmt,
            totalLoanPmts: round(loanPmt * loan.years * 12, 0),
            cashPaid: parseInt(loan.cashPaid),
            totalAmountPaid: round((loanPmt * loan.years * 12) + parseInt(loan.cashPaid), 0),
            degreeAnnualEarnings: props.loan.degreeAnnualEarnings,
            twentyYearEarnings: props.loan.twentyYearEarnings,
            benefitCostRatio: 3,
            finWorkBenchStep: "false",
            benefitCostAnalysis: "false",
            userId: localStorage.getItem("education_customer"),
            step: "updateLoan"
        })



    }

    const removeLoanObject = () => {

        deleteLoan(props.loan)
    }

    let currentPrincipal = 0;
    let displayPrincipal = 0;


    const principalValueCheck = () => {




        if (loan.cashPaid === NaN) {

            // if (props.loan.schoolTotalCost - (loan.cashPaid) !== props.loan.schoolTotalCost )  

   

            // currentPrincipal = props.loan.schoolTotalCost - loan.cashPaid;
            currentPrincipal = props.loan.schoolTotalCost - 0;
            displayPrincipal = props.loan.schoolTotalCost - 0;
            // const currentPrincipal = props.loan.schoolTotalCost
            // props.loan.schoolTotalCost - loan.cashPaid;
        } else if (loan.cashPaid !== 0) {
            // const A = 0
            // const A = props.loan.schoolTotalCost - 0

            currentPrincipal = props.loan.schoolTotalCost - loan.cashPaid;
            displayPrincipal = props.loan.schoolTotalCost - loan.cashPaid;
            // displayPrincipal = 0;


            //  } else {
            //     // const A = 0
            //     // const A = props.loan.schoolTotalCost - 0

            //     currentPrincipal = props.loan.schoolTotalCost - loan.cashPaid;
            //     // displayPrincipal = props.loan.schoolTotalCost - loan.cashPaid;
            //     displayPrincipal = 0;
        }

    }


    

    return (


        <>

            

            <section className="finWorkBench">
                <h3 className="loan__name">  </h3>

                <section className="loan__section">


                    <div className="loan__schoolDiv0">
                        <div className="loan__educationName">{props.loan.educationName}</div>
                    </div>
                    {/* <div className="loan__lineFiller0">filler</div> */}
                    <div className="loan__schoolDiv0">
                        <div className="loan__schoolName">{props.loan.schoolName}</div>
                    </div>

                    {/* <div className="loan__lineFiller0">filler</div> */}
                    <div className="loan__lineFiller0">filler</div>
                    <div className="loan__schoolDiv">
                        <div>
                               {/* <div className="loan__lineFiller0">filler</div> */}
                            <div>

                             
                                {/* <div className="loan__lineItem0"> </div> */}
                                <div className="vert__align"> <div className="loan__schoolTotCost">{(props.loan.schoolTotalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }))}</div></div>
                            </div>
                        </div>
                    </div>
                    <div className="loan__lineFiller0">filler</div>

                    <div className="loan__schoolDiv">
                        {/* <fieldset> */}
                        <div className="loan__inputBox">
                            <div className="form-group">

                                <div className="label__thing">
                                    <label htmlFor="name" className="label__inputext">Enter Cash</label>
                                </div>
                                <div className="input__thing">
                                    <input type="number" id="cashPaid" name="cashPaid" required autoFocus className="form-control2"
                                        proptype="number"
                                        placeholder="Savings"
                              
                                        defaultValue={loan.cashPaid}
                                        onChange={handleControlledInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* </fieldset> */}
                    </div>

                    <div className="loan__lineFiller0">filler</div>
                    <div className="loan__lineFiller0">filler</div>

                    <div className="loan__schoolDiv">
                        <div>
                            <div>
                                <div className="loan__lineFiller0">filler</div>
                                <div className="loan__lineItem0">Principal: </div>

                                <div className="loan__principal"> {((props.loan.schoolTotalCost - loan.cashPaid).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }))}</div>
                            </div>
                        </div>
                    </div>

         

                    {/*                      
                        <div className="loan__principal"> 3-{currentPrincipal}</div>

                        <div className="loan__principal1"> 1-{principalValueCheck()}</div> 
                        <div className="loan__principal"> 1${props.loan.schoolTotalCost - principalValueCheck}</div> 
                        <div className="loan__principal"> 2${principalValueCheck(loan.cashPaid)}</div>
                        <div className="loan__principal"> 4${displayPrincipal}</div>  */}

                    {/* <div className="loan__lineFiller0">filler</div> */}
                    <div className="loan__lineFiller0">filler</div>
                    <div className="loan__schoolDiv">
                        <fieldset>
                            <div className="loan__inputBox4">
                                <div className="form-group">
                                    <div className="label__thing">
                                        <label htmlFor="name">Enter Years: </label>
                                    </div>
                                    <div className="input__thing">
                                        <input type="number" id="years" name="years" required autoFocus className="form-control2"
                                            proptype="number"
                                            placeholder="# of Years"
                                            defaultValue={loan.years}
                                            onChange={handleControlledInputChange}
                                        />
                                  
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="loan__lineFiller0">filler</div>
                    <div className="loan__schoolDiv">
                        <fieldset>
                            <div className="loan__inputBox3">
                                <div className="form-group">
                                    <div className="label__thing">
                                        <label htmlFor="name">Enter Rate: </label>
                                    </div>
                                    <div className="input__thing">
                                        <input type="number" id="interest" name="interest" min="1" max="50" required autoFocus className="form-control2"
                                            proptype="number"
                                            placeholder="Interest %"
                                            defaultValue={loan.interest}
                                            onChange={handleControlledInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>


                    <div className="loan__lineFiller0">filler</div>
                    <div className="loan__schoolDiv">
                        {/* <div className="loan__lineFiller0">filler</div>
                    <div className="loan__lineFiller0">filler</div> */}
                        <div>
                            <div className="loan__moPayment">
                                <div className="loan__lineItem2">Payment:   </div>
                       

                                <div className="loan__payment"> ${moPmt}</div>
                            </div>

                            <button type="submit"
                                onClick={evt => {
                                    evt.preventDefault()
                                    calculateLoan()

                                }}
                                className="btn-primary">Compute
                                </button>

                        </div>
                    </div>



                    <div className="loan__lineFiller0">filler</div>

                    <div className="loan__schoolDiv5">
                        <div>
                            <div className="BCA_buttons">

                                {/* <div>
                                <button type="submit"
                                    onClick={evt => {
                                        evt.preventDefault()
                                        calculateLoan()

                                    }}
                                    className="btn btn-primary">Compute Loan
                                </button>
                            </div> */}



                                <div>
                                     <button className="addLoanInputs__button"
                                        onClick={() => {

                                            // if (loan.cashPaid !== 0 && loan.interest !== 0 && loan.years !== 0) {
                                                if (loan.cashPaid === NaN && loan.interest === NaN  && loan.years === NaN ) {
                                                // editLoanFactors()
                                                alert("Something is missing! Enter Interest Rate, Loan Years");
                                            } else {

                                                editLoanFactors()
                                            }

                                        }}>
                                        Edit and Save Loan
                                </button> 

                                </div>


                                <div >

                                    <button className="runBenefitCostAnalysis__button"
                                        onClick={() => {

                                            constructBCAobject()

                                        }}>Run Benefit Analysis
                                    </button>

                                    <br></br>
                                    <br></br>
                                </div>

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
                    </div>
                </section>

            </section>

        </>
    )

}

