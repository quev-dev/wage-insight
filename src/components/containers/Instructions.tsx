// * IMPORTS
// Icons
import iconCompactDown from '../../theme/images/icons/compact-down.svg';
import iconCompactUp from '../../theme/images/icons/compact-up.svg';

// React Functions
import { useState } from 'react';

// Components
import DropdownInstructions from '../interfaces/DropdownInstructions';

// * INSTRUCTIONS
export default function Instructions() {

  // Handle Dropdown
  const [open, setOpen] = useState(false);

  // Render Instructions
  return (
    <div className="
      relative
      flex-col justify-center items-center text-center
      p-4 m-4 mb-12
    ">

      <h2>Instructions</h2>
      <p>
        If you'd like to read the <i>instructions</i>, you can click
        the box below to view them.
      </p>

      {/* Dropdown Button (flip open boolean) */}
      <button onClick={ () => setOpen(!open) }>

        { !open && <img src={iconCompactDown} alt="Arrow Down Icon"/> }
        { open && <img src={iconCompactUp} alt="Arrow Up Icon"/> }

        <p>Instructions</p>

      </button>

      {/* Show Dropdown Contents */}
      <aside>
        { open && <DropdownInstructions/> }
      </aside>

    </div>
  );
};