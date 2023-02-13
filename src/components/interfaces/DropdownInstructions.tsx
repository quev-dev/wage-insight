export default function DropdownInstructions() {
  return (
    <div id="qd-dropdown-instructions" className="
      bg-white drop-shadow-md rounded-xl
      animate__animated animate__fadeIn animate__faster
      text-left p-4
    ">
      <ol type="1" id="qd-instructions-list">
        <li>
          Provide details on your income - you can choose to calculate
          with <b>weekly</b> pay, <b>bi-weekly</b> pay, <b>monthly </b>
          pay, or your <b>yearly</b> salary.
        </li>
        <li>
          Next, fill out the input boxes for how much money you're
          spending <b>per month</b> for the given expense. You can 
          leave it as <b>0</b> if you aren't paying for it.
        </li>
        <li>
          Finally, click the 'Submit' button to get details on your
          expenses and savings each week, month and year.
        </li>
      </ol>
    </div>
  );
} 