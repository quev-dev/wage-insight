// * IMPORTS
// Icons
import iconCaretUp from '../../theme/images/icons/caret-up.svg';

// Scroll Functionality
import { Link } from 'react-scroll';

// * NAVIGATION
export default function Nav() {
  return (
    <nav id="qd-nav" className="
      fixed top-2 left-2
      z-50
    ">
      

      <Link className="qd-nav-link" to="qd-site-header"
      spy={true} smooth={true} offset={-100} duration={500}>
        <img src={iconCaretUp} alt=""/>
      </Link>

    </nav>
  );
}