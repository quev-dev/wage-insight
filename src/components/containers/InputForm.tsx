// * IMPORTS
// Icons
import iconClipboard      from '../../theme/images/icons/clipboard-check.svg';
import iconDollar         from '../../theme/images/icons/dollar-sign.svg';
import iconHousing        from '../../theme/images/icons/expHousing.svg';
import iconUtilities      from '../../theme/images/icons/expUtilities.svg';
import iconFuel           from '../../theme/images/icons/expFuel.svg';
import iconFood           from '../../theme/images/icons/expFood.svg';
import iconOther          from '../../theme/images/icons/expOther.svg';
import iconCarInsurance   from '../../theme/images/icons/expCarInsurance.svg';
import iconHealthInsurance  from '../../theme/images/icons/expHealthInsurance.svg';
import iconPhoneBill      from '../../theme/images/icons/expPhoneBill.svg';

// Form Validation / Pass Form Data
import { useState } from 'react';
import { useForm, SubmitHandler }  from 'react-hook-form';
import FormError from '../messages/FormError';

// Results Component
import Results from './Results';

// Prepare Regex Checks
const REGEX_NUM = /^\d+(,\d{3})*(\.\d+)?$|^\d+(\.\d+)?$/
const REGEX_NUM_OLD = /^(\s*|\d+(?:\.\d+)?)$/;

// * Prepare Results to Compute
// Functions
import { incomeTax, calculateStateTax, computeIncome } from '../../tools/calculateSavings';

// Data to Fetch
type FormValues = {
  state:      string,
  filingType: string,
  incomeType: string,

  income: number,

  housingExpense:         number,
  utilitiesExpense:       number,
  fuelExpense:            number,
  carInsuranceExpense:    number,
  healthInsuranceExpense: number,
  phoneBillExpense:       number,
  foodExpense:            number,
  otherExpense:           number,
};

// * INPUT FORM
export default function InputForm() {

  // Prepare data to pass from form
  const [formData, setFormData] = useState({});
  const [resultsActivated, setResultsActivated] = useState(false);

  function interpretForm(data: any){
    // Pass output to form data
    const output = computeIncome(data);
    setFormData(output)

    // Activate boolean (only once)
    if(!resultsActivated){
      setResultsActivated(true);
    }

    // Return Output
    return output;
  }

  // Prepare Form Validation
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => interpretForm(data);

  // Render Input Form
  return (
    <main id="qd-input-form" className="
      qd-site-section
      flex-col justify-center items-center text-center
      m-4 p-4
    ">

    {/* FORM */}
    <form onSubmit={handleSubmit(onSubmit)}>
      
      {/* State */}
      <section>
        <h5>Which state do you reside in?</h5>
        <select required id="state" defaultValue=""
          {...register('state')}
        >
          <option value="" disabled >--- Select a State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </section>

      {/* Tax Type */}
      <section className="px-2">
        <h5>How do you plan to file your taxes?</h5>
        <p className="px-4 opacity-75"><i>
          <b>Note:</b> It is recommended that you select "Skip 
          tax estimates" to skip tax calculations, as this app
          uses the 2022 income tax model, and it does NOT account
          for every detail in your situation.
        </i></p>
        <select required id="filingType" defaultValue="" {...register('filingType')}>
          <option value="" disabled>--- Select a filing type</option>
          <option value="skip">Skip tax (recommended)</option>
          <option value="single">Single</option>
          <option value="headOfHousehold">Head of household</option>
          <option value="marriedFilingJointly">Married, filing jointly</option>
          <option value="marriedFilingSeparately">Married, filing separately</option>
        </select>
      </section>

      {/* Income Type */}
      <section id="qd-form-section-radio">
        <h5>What type of income would you like to use?</h5>
        <div className="
          flex flex-wrap items-center text-center justify-center
        ">
          <div>
            <input required type="radio" id="weekly" {...register('incomeType')}
            value="Weekly"/>
            <label htmlFor="weekly">Weekly</label>
          </div>
          <div>
            <input required type="radio" id="bi-weekly" {...register('incomeType')}
            value="Bi-Weekly"/>
            <label htmlFor="bi-weekly">Bi-Weekly</label>
          </div>
          <div>
            <input required type="radio" id="monthly" {...register('incomeType')}
            value="Monthly"/>
            <label htmlFor="monthly">Monthly</label>
          </div>
          <div>
            <input required type="radio" id="yearly" {...register('incomeType')}
            value="Yearly"/>
            <label htmlFor="yearly">Yearly</label>
          </div>
        </div>
      </section>

      {/* Income Amount */}
      <h5>Provide your income here.</h5>
      <section>

        {/* Income Input */}
        <input {...register('income', { pattern: REGEX_NUM })}
        type="text" placeholder="Income Amount" required
        className="qd-input-income" id="income"/>

        {/* Income Error */}
        { errors.income && <FormError text="Provide a valid number."/> }

      </section>

      {/* Expenses */}
      <h5>
        How much of each expense are you paying
        <b> per month?</b>
      </h5>

      {/* Expenses Section */}
      <section className="
        flex flex-wrap align-center justify-center
      ">
        
        {/* Housing Expense */}
        <div className="qd-expense-container">
          <div className="qd-input-expense-container flex flex-col">

            {/* Label */}
            <label htmlFor="housingExpense" className="qd-expense-label">Housing</label>

            {/* Input Box */}
            <div className="qd-input-expense-container flex flex-row">
              <img className="qd-icon-expense" src={iconHousing} alt="Dollar Icon"/>
              <input {...register('housingExpense', { pattern: REGEX_NUM })}
              type="text" placeholder="Housing Expense" required
              className="qd-input-expense" id="housingExpense"
              />
            </div>
          </div>

          {/* Error Message */}
          { errors.housingExpense && <FormError text="Provide a valid number."/> }
          
        </div>

        {/* Utilities Expense */}
        <div className="qd-expense-container">
          <div className="qd-input-expense-container flex flex-col">

            {/* Label */}
            <label htmlFor="utilitiesExpense" className="qd-expense-label">Utilities</label>

            {/* Input Box */}
            <div className="qd-input-expense-container flex flex-row">
              <img className="qd-icon-expense" src={iconUtilities} alt="Dollar Icon"/>
              <input {...register('utilitiesExpense', { pattern: REGEX_NUM })}
              type="text" placeholder="Utilities Expense" required
              className="qd-input-expense" id="utilitiesExpense"
              />
            </div>
          </div>

          {/* Error Message */}
          { errors.utilitiesExpense && <FormError text="Provide a valid number."/> }
          
        </div>
        
        {/* Fuel Expense */}
        <div className="qd-expense-container">
          <div className="qd-input-expense-container flex flex-col">

            {/* Label */}
            <label htmlFor="fuelExpense" className="qd-expense-label">Fuel</label>

            {/* Input Box */}
            <div className="qd-input-expense-container flex flex-row">
              <img className="qd-icon-expense" src={iconFuel} alt="Dollar Icon"/>
              <input {...register('fuelExpense', { pattern: REGEX_NUM })}
              type="text" placeholder="Fuel Expense" required
              className="qd-input-expense" id="fuelExpense"
              />
            </div>
          </div>

          {/* Error Message */}
          { errors.fuelExpense && <FormError text="Provide a valid number."/> }
          
        </div>

        {/* Car Insurance Expense */}
        <div className="qd-expense-container">
          <div className="qd-input-expense-container flex flex-col">

            {/* Label */}
            <label htmlFor="carInsuranceExpense" className="qd-expense-label">Car Insurance</label>

            {/* Input Box */}
            <div className="qd-input-expense-container flex flex-row">
              <img className="qd-icon-expense" src={iconCarInsurance} alt="Dollar Icon"/>
              <input {...register('carInsuranceExpense', { pattern: REGEX_NUM })}
              type="text" placeholder="Car Insurance Expense" required
              className="qd-input-expense" id="carInsuranceExpense"/>
            </div>
          </div>

          {/* Error Message */}
          { errors.carInsuranceExpense && <FormError text="Provide a valid number."/> }
          
        </div>

        {/* Health Insurance Expense */}
        <div className="qd-expense-container">
          <div className="qd-input-expense-container flex flex-col">

            {/* Label */}
            <label htmlFor="healthInsuranceExpense" className="qd-expense-label">Health Insurance</label>

            {/* Input Box */}
            <div className="qd-input-expense-container flex flex-row">
              <img className="qd-icon-expense" src={iconHealthInsurance} alt="Dollar Icon"/>
              <input {...register('healthInsuranceExpense', { pattern: REGEX_NUM })}
              type="text" placeholder="Health Insurance Expense" required
              className="qd-input-expense" id="healthInsuranceExpense"/>
            </div>
          </div>

          {/* Error Message */}
          { errors.healthInsuranceExpense && <FormError text="Provide a valid number."/> }
          
        </div>

        {/* Phone Bill Expense */}
        <div className="qd-expense-container">
          <div className="qd-input-expense-container flex flex-col">

            {/* Label */}
            <label htmlFor="phoneBillExpense" className="qd-expense-label">Phone Bill</label>

            {/* Input Box */}
            <div className="qd-input-expense-container flex flex-row">
              <img className="qd-icon-expense" src={iconPhoneBill} alt="Dollar Icon"/>
              <input {...register('phoneBillExpense', { pattern: REGEX_NUM })}
              type="text" placeholder="Phone Bill Expense" required
              className="qd-input-expense" id="phoneBillExpense"/>
            </div>
          </div>

          {/* Error Message */}
          { errors.phoneBillExpense && <FormError text="Provide a valid number."/> }
          
        </div>


        {/* Food Expense */}
        <div className="qd-expense-container">
          <div className="qd-input-expense-container flex flex-col">

            {/* Label */}
            <label htmlFor="foodExpense" className="qd-expense-label">Food</label>

            {/* Input Box */}
            <div className="qd-input-expense-container flex flex-row">
              <img className="qd-icon-expense" src={iconFood} alt="Dollar Icon"/>
              <input {...register('foodExpense', { pattern: REGEX_NUM })}
              type="text" placeholder="Food Expense" required
              className="qd-input-expense" id="foodExpense"
              />
            </div>
          </div>

          {/* Error Message */}
          { errors.foodExpense && <FormError text="Provide a valid number."/> }
          
        </div>

        {/* Other Expense */}
        <div className="qd-expense-container">
          <div className="qd-input-expense-container flex flex-col">

            {/* Label */}
            <label htmlFor="otherExpense" className="qd-expense-label">Other</label>

            {/* Input Box */}
            <div className="qd-input-expense-container flex flex-row">
              <img className="qd-icon-expense" src={iconOther} alt="Dollar Icon"/>
              <input {...register('otherExpense', { pattern: REGEX_NUM })}
              type="text" placeholder="Other Expense" required
              className="qd-input-expense" id="otherExpense"
              />
            </div>
          </div>

          {/* Error Message */}
          { errors.otherExpense && <FormError text="Provide a valid number."/> }
          
        </div>
        
      </section>

      {/* Submit Button */}
      { !resultsActivated && 
        <button>
          <img src={iconClipboard} alt="Checked Clipboard Icon" />
          <p>Submit</p>
        </button>
      }
      { resultsActivated && 
        <button>
          <img src={iconClipboard} alt="Checked Clipboard Icon" />
          <p>Update</p>
        </button>
      }

    </form>

    {/* RESULTS */}
    { resultsActivated && <section>
      <Results formData={formData}></Results>
    </section> }

    </main>
  );
};