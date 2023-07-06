import "./Interest.css";
// imported bootstrap components below including icons
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*Interest comp will return a form allowing user input
IntButton comp has an event handling function that:
>Imports user input from DOM elements 
>Calculates based on these figures
>Alerts user */

export default function Interest() {
  return (
    <Container fluid="md">
      <Row id="interest">
        <Col>
          <div>
            {" "}
            <h1 className="header-title">
              SNKR LV<span>R</span>S
            </h1>
            <h3>Credit Calculator</h3>
            <form>
              <label for="amount">Purchase Amount:</label>
              <br />
              <input type="text" id="amount" name="amount" />
              <br />
              <label for="months">Months:</label>
              <br />
              <input type="text" id="months" name="months" />
            </form>
            {/* Comp below will help calculate interest */}
            <IntButton />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function IntButton() {
  function handleSubmitInt() {
    // Input values from user
    const amount = document.getElementById("amount").value;
    const months = document.getElementById("months").value;

    let monthly = (amount / months) * 1.2;
    let total = monthly * months;
    //if statment accounts for empty inputs
    if (amount === '') {
      alert("Invalid input");
    } else {
      alert(`Monthly repayment: R${monthly.toFixed(2)}
              Total repayment: R${total.toFixed(2)}`);
    }
  }

  return (
    // A button is returned with event handler
    <button className="submit" onClick={handleSubmitInt}>
      submit
    </button>
  );
}

/*
 How to Import Bootstrap in React [The Beginner's Guide], HubSpot Blog, Retrieved on 19 May 2023 from https://blog.hubspot.com/website/react-bootstrap-css
*/
