import "./Profile.css";
// imported bootstrap components below including icons
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Profile() {
 
  const profilePic = "https://cdn-icons-png.flaticon.com/512/6596/6596121.png";


  const category = [
    "Account",
    "Wishlist",
    "Cart",
    "Help",
    "Contact us",
    "Reviews"
  ];


  return (
    <Container fluid="md">
      <Row id="profile">
        <Col>
          <h1 className="header-title">
            SNKR LV<span>R</span>S
          </h1>
          {/* Button comp imported below */}
          <Button />
          
        {/* Panel */}

        <Col className="panel">

          {/* Profile-pic */}
          <img src={profilePic} className="profile-pic" alt="profile-pic"></img>

          {/* category array is mapped below */}
          <ul>
            {category.map((category) => (
              <li className="category">{category}</li>
            ))}
          </ul>
        </Col>
        </Col>
      </Row>
    </Container>
  );
}

function Button() {
  // event handling funtion below will alert user
  function handleSubmit(e) {
    // used event object method to prevent page from reloading
    e.preventDefault();
    alert("Logged out");
  }

  return (   
// A form button is returned with event handler  
    <form onSubmit={handleSubmit}>
      <button type="submit" className="logout">
        Logout
      </button>
    </form>
  );
}
