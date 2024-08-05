import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from "../components/Rating";
import products from "../products"

const ProductScreen = () => {
const { id:productId } = useParams();
const product = products.find((p) => p._id === productId)
 
  return 
   <> 
    <Link className="btn btn-light my-3" to="/">
    Go Back
    </Link>
    <Row>
     <Col md={5}>
<img src={product.image} alt={product.name} fiuid/>
     </Col> 
     <Col md={34}>
     </Col> 
     <Col md={3}>
<ListGroup variant="flush">

</ListGroup>

     </Col> 
    </Row>
    
    </>;
  
}

export default ProductScreen;