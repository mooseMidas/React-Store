import "./Policy.css";
// imported bootstrap components below including icons
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



/*Simple markup for the policy page */

function Policy() {
  return (
    <Container fluid="md">
      <Row id="policy">
        {/* Company logo */}
        <Col>
          <div className="policy-text">
            {" "}
            <h1 className="header-title">
              SNKR LV<span>R</span>S
            </h1>
            <h3>When to expect your order</h3>
            “Commodi sequi non animi ea dolor molestiae, quisquam iste”.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            repellendus quasi fuga nesciunt dolorum nulla magnam veniam
            sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
            quisquam iste, maiores. Nulla. Commodi sequi non animi ea dolor
            molestiae, quisquam iste, maiores. Nulla. Commodi sequi non animi ea
            dolor molestiae, quisquam iste, maiores. Nulla.
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

export default Policy;

