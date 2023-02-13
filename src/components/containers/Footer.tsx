// * IMPORTS
// Icons
import iconCompactDown from '../../theme/images/icons/compact-down.svg';
import iconCompactUp from '../../theme/images/icons/compact-up.svg';

// React Hooks
import { useState } from 'react';

// * CREATE FOOTER COMPONENT
export default function Footer() {
  // Init Dropdown Properties
  const [showLinks, setShowLinks] = useState(false);

  // Render Footer
  return (
    <footer id="qd-footer" className="
      flex-col justify-center items-center text-center
      px-4 py-16
    ">

      {/* Copyright */}
      <section id="qd-copyright">
        <p>&copy; QuevDev, 2023</p>
      </section>

      {/* Button to display resources */}
      <button onClick={ () => setShowLinks(!showLinks)} 
      className="qd-dropdown-button">
        { !showLinks && <img src={iconCompactDown} alt="Arrow Down Icon"/> }
        { showLinks && <img src={iconCompactUp} alt="Arrow Up Icon"/> }
        <p>View Site Resources</p>
      </button>

      {/* Resources Used */}
      { showLinks && 
        <section id="qd-resources-used" className="
          flex-col align-center justify-center
        ">
          <br />
          <ul>
            <p>Technologies</p>
            <li><a target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/">TypeScript</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://vitejs.dev/">Vite</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://reactjs.org/">React</a></li>
            <br/>

            <p>npm Packages</p>
            <li><a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-animation-on-scroll">react-animation-on-scroll</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-hook-form">react-hook-form</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-scroll">react-scroll</a></li>
            <br/>

            <p>CSS Tools</p>
            <li><a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">Tailwind CSS</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://necolas.github.io/normalize.css/">normalize.css</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://animate.style/">animate.css</a></li>
          </ul>
        </section>
      }

    </footer>
  );
};
