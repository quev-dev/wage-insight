// * IMPORTS
// Icons


// * HEADER
export default function Header() {
  // Render Header
  return (
    <div id="qd-site-header" className="
      flex-col justify-center items-center text-center
      mx-2 my-24 mb-2
      px-2 py-6 pt-3
    ">

      {/* Logo */}


      {/* Animated Header */}
      <h1 className="
        animate__animated animate__flipInX
      ">
        Wage Insight
      </h1>

      {/* Animated Description */}
      <p id="qd-header-text" className="
        animate__animated animate__flipInX
      ">
        Find out how much money you'll need to bring in by the week, 
        month and year based off of your expenses.
      </p>

    </div>
  );
}