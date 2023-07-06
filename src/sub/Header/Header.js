// imported direct css file
import "./Header.css";
// imported bootstrap components below;
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
// image imported from within src file
import Logo from "./Logo.png";


/*Welcome and SignUp components return a div
Added both components to a div tag so I can handle similarly in css
each component is displayed based on props
props has boolean value
 */
function Welcome(props) {
  return <div><h3 className="welcome">Welcome back {props.name} </h3></div>;
}

function SignUp() {
  return <div><Button className="sign-up">Sign Up</Button></div>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const username = props.name;
  if (isLoggedIn) {
    return <Welcome name={username} />;
  } else {
    return <SignUp />;
  }
}

function Header() {
  return (
    <Container fluid="md" class="container">
    <Row>
      <Col class="col-md-4">
        {/* Company logo */}
        <img src={Logo} className="header-logo" alt="logo"></img>
        {/* Company name with slogan */}
        <div className="title">
          <h1 className="company-name">SNKR L<span>V</span>RS</h1>
          <p className="slogan">Kicks to live by</p>
        </div>
        {/* props boolean value can be edited below */}
        <Greeting isLoggedIn={true} name="Moose" />
      </Col>
    </Row>
  </Container>

  );
}

export default Header;

/*
 How to Import Bootstrap in React [The Beginner's Guide], HubSpot Blog, Retrieved on 19 May 2023 from https://blog.hubspot.com/website/react-bootstrap-css
*/
