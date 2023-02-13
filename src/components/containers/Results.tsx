// * IMPORTS
// Icons
import iconWarning from '../../theme/images/icons/error.svg';

// * PREPARE FORM DATA
interface Props {
  formData: any;
}

// * RESULTS COMPONENT
// Take 'formData' & Render Component
const Results: React.FC<Props> = ({formData}) => {
  // ? ---------- Grab Form Data
  // Expenses
  const expensesWeekly  = formData['Expenses'][0];
  const expensesMonthly = formData['Expenses'][1];
  const expensesYearly  = formData['Expenses'][2];

  // Taxes
  let showTaxes = true;
  const taxesWeekly   = formData['Taxes'][0];
  const taxesMonthly  = formData['Taxes'][1];
  const taxesYearly   = formData['Taxes'][2];
  if(taxesWeekly <= 0) showTaxes = false;

  // Savings
  let lostMoney = false;
  const savingsWeekly   = formData['Savings'][0];
  const savingsMonthly  = formData['Savings'][1];
  const savingsYearly   = formData['Savings'][2];
  if(savingsWeekly < 0) lostMoney = true;
  

  // * ---------- Render Results
  return (
    <div id="qd-section-results" className="
      qd-site-section
      animate__animated animate__fadeInLeft
      flex-col justify-center items-center text-center
      p-4 m-4
    ">

      {/* // * HEADER * // */}
      <section>
        <br/>
        <h3>Results:</h3>
        <br/>
      </section>
      
      {/* // * EXPENSES * // */}
      <section className="flex-col">

        <h4>Expenses</h4>
        <p><b>Weekly Expenses:</b> ${expensesWeekly}</p>
        <p><b>Monthly Expenses:</b> ${expensesMonthly}</p>
        <p><b>Yearly Expenses:</b> ${expensesYearly}</p>

      </section>

      {/* // * TAXES * // */}
      { showTaxes &&
        <section>

          <h4>Taxes</h4>
          <p><b>Weekly Taxes:</b> {taxesWeekly}</p>
          <p><b>Monthly Taxes:</b> {taxesMonthly}</p>
          <p><b>Yearly Taxes:</b> {taxesYearly}</p>

        </section>
      }

      {/* // * SAVINGS * // */}
      { !lostMoney && 
        <section>
  
          <h4>Savings</h4>
          <p><b>Weekly Savings:</b> ${savingsWeekly}</p>
          <p><b>Monthly Savings:</b> ${savingsMonthly}</p>
          <p><b>Yearly Savings:</b> ${savingsYearly}</p>
  
        </section>
      }
      {
        lostMoney &&
        <section id="qd-results-savings-lost">

          <div className="flex-col text-center content-center items-center icon-error">
            <img src={iconWarning} alt="" className="
              inline animate__animated animate__flip
              animate__slower animate__infinite
            "/>
            <h4>Savings</h4>

            <p><i>
              <b>Warning:</b> Income does not meet quota for expenses!
            </i></p>

          </div>

          <p><b>Weekly Savings:</b> ${savingsWeekly}</p>
          <p><b>Monthly Savings:</b> ${savingsMonthly}</p>
          <p><b>Yearly Savings:</b> ${savingsYearly}</p>
          <br />

          <p><i>
            You may want to look for alternatives that allow for
            either more income or less expenses.
          </i></p>
  
        </section>
      }
      

    </div>
  );
};

export default Results;