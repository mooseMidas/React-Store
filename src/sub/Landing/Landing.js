import "./Landing.css";
// imported bootstrap components below including icons
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*Landing component esentially returns a body of text*/

function Landing() {
  return (
    <Container fluid="md">
      <Row id="landing">
        <Col>
          <div className="post-text">
            {" "}
            <h1 className="header-title">
              SNKR LV<span>R</span>S
            </h1>
            <h3>Join us in creating excitement!</h3>
            “Commodi sequi non animi ea dolor molestiae, quisquam iste”.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            repellendus quasi fuga nesciunt dolorum nulla magnam veniam
            sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
            quisquam iste, maiores. Nulla. Commodi sequi non animi ea dolor
            molestiae, quisquam iste, maiores. Nulla. Commodi sequi non animi ea
            dolor molestiae, quisquam iste, maiores. Nulla.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            repellendus quasi fuga nesciunt dolorum nulla magnam veniam
            sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
            quisquam iste, maiores. Nulla.
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
