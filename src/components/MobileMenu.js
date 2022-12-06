import { Link } from "react-router-dom";

const MobileMenu = ({ closeMethod }) => {
  return (
    <div id="mobile-menu">
      <ul>
        <li>
          <Link to="/" onClick={closeMethod}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={closeMethod}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/aboutme" onClick={closeMethod}>
            About Me
          </Link>
        </li>
        {/* <li>
          <Link onClick={closeMethod}>Contact</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default MobileMenu;
