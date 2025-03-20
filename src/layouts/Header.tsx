import { useLocation } from "react-router-dom";
import logoIcon from "../assets/shared/logo.svg";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <header>
      <img src={logoIcon} alt="logo" />
      <hr className="hr-line" />
      <nav className="nav-container">
        <ul>
          <li>
            <a className={`${path === "/" && "active"}`} href="/">
              <strong>00</strong> HOME
            </a>
          </li>
          <li>
            <a
              className={`${path === "/destination" && "active"}`}
              href="/destination"
            >
              <strong>01</strong> DESTINATION
            </a>
          </li>
          <li>
            <a className={`${path === "/crew" && "active"}`} href="/crew">
              <strong>02</strong> CREW
            </a>
          </li>
          <li>
            <a
              className={`${path === "/technology" && "active"}`}
              href="/technology"
            >
              <strong>03</strong> TECHNOLOGY
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
