import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
  );
}
export default Header;
