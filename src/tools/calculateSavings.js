
// ! WARNING
/*
The data in this file uses statistics from 2022, and
should NOT be considered accurate. 

Every situation is different, and this app is meant 
to provide rough estimates on what you can expect 
your expenses to be.
*/

// * ----------------------------------- HELPER FUNCTIONS
// * Income Tax Computation
export function incomeTax(income, filingStatus, state) {

  // Skip code if no tax is desired
  if(filingStatus === 'skip') return 0;

  const TAX_BRACKETS = [
    { threshold: 0, rate: 0.10 },
    { threshold: 9701, rate: 0.12 },
    { threshold: 39476, rate: 0.22 },
    { threshold: 84201, rate: 0.24 },
    { threshold: 160751, rate: 0.32 },
    { threshold: 204100, rate: 0.35 },
    { threshold: 510300, rate: 0.37 }
  ];

  let taxableIncome = income;
  let standardDeduction = 0;
  let personalExemption = 0;

  if (filingStatus === 'single') {
    standardDeduction = 12000;
    personalExemption = 4050;
  } else if (filingStatus === 'headOfHousehold') {
    standardDeduction = 18000;
    personalExemption = 4050;
  } else if (filingStatus === 'marriedFilingJointly') {
    standardDeduction = 24000;
    personalExemption = 8100;
  } else if (filingStatus === 'marriedFilingSeparately') {
    standardDeduction = 12000;
    personalExemption = 4050;
  }

  taxableIncome -= standardDeduction;
  taxableIncome -= personalExemption;

  // Stop calculating taxes if number is negative (no tax is owed)
  if(taxableIncome <= 0) return 0;

  let taxesOwed = 0;
  for (let i = 0; i < TAX_BRACKETS.length; i++) {
    if (taxableIncome > TAX_BRACKETS[i].threshold) {
      if (i === 0) {
        taxesOwed += taxableIncome * TAX_BRACKETS[i].rate;
      } else {
        taxesOwed += (TAX_BRACKETS[i].threshold - TAX_BRACKETS[i - 1].threshold) * TAX_BRACKETS[i].rate;
      }
    } else {
      taxesOwed += (taxableIncome - TAX_BRACKETS[i - 1].threshold) * TAX_BRACKETS[i].rate;
      break;
    }
  }

  taxesOwed += calculateStateTax(taxesOwed, state);

  return taxesOwed;
}

// * State Tax Computation
export function calculateStateTax(income, state) {
  const STATE_TAX_RATES = {
    'AL': 0.05,
    'AK': 0,
    'AZ': 0.04,
    'AR': 0.06,
    'CA': 0.093,
    'CO': 0.0463,
    'CT': 0.0699,
    'DE': 0,
    'FL': 0,
    'GA': 0.0575,
    'HI': 0.0244,
    'ID': 0.0693,
    'IL': 0.0499,
    'IN': 0.0323,
    'IA': 0.0609,
    'KS': 0.05,
    'KY': 0.05,
    'LA': 0.06,
    'ME': 0.05,
    'MD': 0.0575,
    'MA': 0.051,
    'MI': 0.0425,
    'MN': 0.0289,
    'MS': 0.05,
    'MO': 0.068,
    'MT': 0,
    'NE': 0.0684,
    'NV': 0,
    'NH': 0,
    'NJ': 0.1075,
    'NM': 0.0476,
    'NY': 0.0882,
    'NC': 0.0575,
    'ND': 0.0406,
    'OH': 0.04997,
    'OK': 0.05,
    'OR': 0.0994,
    'PA': 0.0307,
    'RI': 0.0599,
    'SC': 0.0697,
    'SD': 0,
    'TN': 0,
    'TX': 0,
    'UT': 0.0498,
    'VT': 0.0802,
    'VA': 0.0575,
    'WA': 0,
    'WV': 0.06,
    'WI': 0.0475,
    'WY': 0
  };

  let stateTaxRate = STATE_TAX_RATES[state];

  if (typeof stateTaxRate === undefined) {
    return 0;
  }

  return income * stateTaxRate;
}

// * ----------------------------------- MAIN FUNCTION
// * Total Income Computation
export function computeIncome(formData) {
  // * ---------- Grab Form Data
  // State, Married, & Income
  const state       = formData.state;
  const filingType  = formData.filingType;
  const incomeType  = formData.incomeType;

  // Income (Value will be altered later)
  let income = +formData.income.toString().replace(/,/g, '');

  // Expenses (convert text input to number)
  const expenseHousing = +formData.housingExpense.toString().replace(/,/g, '');
  const expenseUtilities = +formData.utilitiesExpense.toString().replace(/,/g, '');
  const expenseFood = +formData.foodExpense.toString().replace(/,/g, '');
  const expensePhoneBill = +formData.phoneBillExpense.toString().replace(/,/g, '');
  const expenseFuel = +formData.fuelExpense.toString().replace(/,/g, '');
  const expenseCarInsurance = +formData.carInsuranceExpense.toString().replace(/,/g, '');
  const expenseHealthInsurance = +formData.healthInsuranceExpense.toString().replace(/,/g, '');
  const expenseOther = +formData.otherExpense.toString().replace(/,/g, '');


  // Parse data into strings (remove commas)
  


  // * ---------- Initialize constants
  // Average weeks in a month (more accurate data, as opposed to just using 4)
  const averageWeeksInMonth = 4.348;

  // Compute monthly expense total
  const expenseTotal = (
    expenseHousing + expenseUtilities + expenseFood + expensePhoneBill + 
    expenseFuel + expenseCarInsurance + expenseHealthInsurance + expenseOther
  );
  
  // Set expense totals for each time type
  const monthlyExpenses = expenseTotal;
  const yearlyExpenses = monthlyExpenses * 12;
  const weeklyExpenses = monthlyExpenses / averageWeeksInMonth;

  // * ---------- Convert income to monthly
  // Convert income depending on given income type
  if (incomeType === 'Weekly')          income *= averageWeeksInMonth;
  else if (incomeType === 'Bi-Weekly')  income *= averageWeeksInMonth / 2;
  else if (incomeType === 'Yearly')     income /= 12;

  // Get different types of incomes
  const yearlyIncome  = income * 12;
  const monthlyIncome = income;
  const weeklyIncome  = income/averageWeeksInMonth;

  // ! ---------- Calculate Income Tax

  // Compute taxes owed
  const taxesOwed = incomeTax(yearlyIncome, filingType, state);

  // Get different tax-owed time things idPJWA
  let taxesOwedYearly   = taxesOwed;
  let taxesOwedMonthly  = taxesOwed/12;
  let taxesOwedWeekly   = taxesOwedMonthly/averageWeeksInMonth;

  // Deplete income from monthly taxes
  income -= taxesOwedMonthly;
  
  // * ---------- Compute savings for each time type
  const yearlySavings   = ( income * 12 ) - yearlyExpenses;
  const monthlySavings  = ( income ) - monthlyExpenses;
  const weeklySavings   = ( income / averageWeeksInMonth ) - weeklyExpenses;

  // * ---------- Return Data
  // Add commas to numbers where necessary
  function insertCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Expenses, Taxes & Savings
  return {
    'Incomes': [
      insertCommas(weeklyIncome.toFixed(2)),
      insertCommas(monthlyIncome.toFixed(2)),
      insertCommas(yearlyIncome.toFixed(2)),
    ],
    'Expenses': [
      insertCommas(weeklyExpenses.toFixed(2)),
      insertCommas(monthlyExpenses.toFixed(2)),
      insertCommas(yearlyExpenses.toFixed(2))
    ],
    'Taxes': [
      insertCommas(taxesOwedWeekly.toFixed(2)),
      insertCommas(taxesOwedMonthly.toFixed(2)),
      insertCommas(taxesOwedYearly.toFixed(2)),
    ],
    'Savings': [
      insertCommas(weeklySavings.toFixed(2)),
      insertCommas(monthlySavings.toFixed(2)),
      insertCommas(yearlySavings.toFixed(2))
    ]
  };
}

// TODO | Testing: Set Form Data & Run File


const exampleFormData = {
  
  // State
  state: 'IN',

  // Filing Type
  filingType: 'marriedFilingJointly',

  // Income & Income Type
  income:     600.00,
  incomeType: 'Monthly',

  // Expenses (Monthly)
  housingExpense:         1189.00,
  utilitiesExpense:       208.00,
  foodExpense:            400.00,
  phoneBillExpense:       100.00,
  fuelExpense:            200.00,
  carInsuranceExpense:    450.00,
  healthInsuranceExpense: 400.00,
  otherExpense:           500.00,

};

console.log(computeIncome(exampleFormData));
