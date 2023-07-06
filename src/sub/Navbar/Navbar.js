// imported direct css file
import "./Navbar.css";
// imported bootstrap components below;
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Calculator } from "react-bootstrap-icons";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

/*Below component create CustomLink components that will populate the navbar 
>First used Link hook to create a link to the home page
>Then using CustomLink comp to create links 
*/

export default function Navbar() {
  return (
    <Container>
      <Row>
        <nav className="nav">
          <Link to="/" className="home">
            Home
          </Link>
          <ul>
            <CustomLink to="/product">Shop</CustomLink>
            <CustomLink to="/profile">Profile</CustomLink>
            <CustomLink to="/policy">Delivery Policy</CustomLink>
            {/* Interest calculator link added below as an icon */}
            <CustomLink to="/interest"> <Calculator /> </CustomLink>
          </ul>
        </nav>
      </Row>
    </Container>
  );
}

/*CustomLink comp
This comp uses useResolvedPath hooks to determine value of path to link
Uses useMatch, to toggle className from active to '' (active class will be highlighted)
Link comp is returned in list tag. li className to be toggled 
*{...props} allows use of other props
 */

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

/*
How To Create A Navbar In React With Routing, Web Dev Simplified, Youtube Retrieved on 25 May 2023 from https://www.youtube.com/watch?v=SLfhMt5OUPI&t=929s
 */
