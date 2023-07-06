import "./Product.css";
// imported bootstrap components below;
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// installed and imported bootstrap icons
import { HandThumbsUp } from "react-bootstrap-icons";

/*Product component will return a container displaying an image, shoe title and price
  display values are in an array of objects 
  using mapping method, each object is added to div 
 */


function Product() {

  // array of objects to be displayed 
  const Products = [
    {
      img: "https://static.nike.com/a/images/t_default/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-1PhQRw.png",
      title: "Nike Dunk Retro Men's Shoes",
      price: "2.999.95",
    },
    {
      img: "https://static.nike.com/a/images/t_default/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoes-rWtqPn.png",
      title: "Nike Air Force 1 '07",
      price: "R2.099.95",
    },
    {
      img: "https://static.nike.com/a/images/t_default/d7277d5b-77b6-4932-92b5-d5fe740f0b69/air-force-1-07-se-womens-shoes-cjvcc9.png",
      title: "Nike Air Force 1 SE Team Red",
      price: "R2.099.95",
    },
  ];

  return (
    <Container fluid="md">
      <Row>
        
        {Products.map((Products) => (
          <Col class="col-md-4">
            <div className="products">
              {/* src,alt ,h3 and span values retrieved by destructuring array */}
              <img src={Products.img} className="product-image" alt={Products.title}></img>
              <h3 className="product-title">{Products.title}</h3>
              <span className="product-price">{Products.price}</span>
              <HandThumbsUp className="thumbsup" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;

/*
 How to Import Bootstrap in React [The Beginner's Guide], HubSpot Blog, Retrieved on 19 May 2023 from https://blog.hubspot.com/website/react-bootstrap-css
*/
