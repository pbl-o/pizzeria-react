import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MyButton from "./Button.jsx";
import conversor from "../utils/conversor.js";
import { Col, Row } from "react-bootstrap";

const CardPizzaDetail = ({
  name,
  img,
  price,
  ingredients,
  description,
  actionHome,
  actionAdd,
}) => {
  return (
    <>
      <Row className="row-cols-1 row-cols-md-2 pt-5 ">
        <Col className="d-flex align-items-stretch">
          <Card className="text-center w-100">
            <Card.Img className="img-fluid" variant="top" src={img} />
            <Card.Body>
              <Card.Title className="text-capitalize">{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Card.Text className="fw-bolder text-center">
                  Ingredientes
                </Card.Text>
                <Card.Body>
                  <ul className="text-capitalize m-0">{ingredients}</ul>
                </Card.Body>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Text className="fw-bolder">{conversor(price)}</Card.Text>
                <Card.Body>
                  <div className=" d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-2">
                    <MyButton
                      btnText="Volver al Incio"
                      btnColor="dark"
                      clickAction={actionHome}
                    />

                    <MyButton
                      btnText="Aãndir al carrito"
                      btnColor="dark"
                      clickAction={actionAdd}
                    />
                  </div>
                </Card.Body>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col className="d-flex align-items-stretch">
          <Card className="text-center w-100 d-flex flex-column border-0">
            <ListGroup className="list-group-flush my-auto">
              <ListGroup.Item>
                <Card.Text className="fs-4 text-start">*{description}*</Card.Text>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CardPizzaDetail;
