import "./Footer.css";
// imported bootstrap components below including icons
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// installed and imported bootstrap icons
import { Facebook, Twitter, Instagram, Pinterest } from "react-bootstrap-icons";

/*Footer comp will be added at the bottom of every page
Made use of bootstrap icons */

function Footer() {
  return (
    <Container fluid="md">
      <Row>
        <Col className="footer">
          <p>
            Contact us <br></br>
            Join our Newsletter <br></br>
            Delivery Policy <br></br>
            FAQ
          </p>
          <div className="social">
            <Facebook />
            <Twitter />
            <Instagram />
            <Pinterest />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

/*
 How to Import Bootstrap in React [The Beginner's Guide], HubSpot Blog, Retrieved on 19 May 2023 from https://blog.hubspot.com/website/react-bootstrap-css
*/
