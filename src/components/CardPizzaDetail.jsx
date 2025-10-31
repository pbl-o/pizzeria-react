import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MyButton from "./Button.jsx";
import conversor from "../utils/conversor.js";

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
      <div className="col">
        <Card className="text-center">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-capitalize">{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text>{description}</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="fw-bolder text-center">
                🍕 Ingredientes
              </Card.Text>
              <Card.Body>
                <ul className="d-flex justify-content-evenly fw-bolder text-center text-capitalize">
                  {ingredients}
                </ul>
              </Card.Body>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="fw-bolder">{conversor(price)}</Card.Text>
              <Card.Body>
                <div className=" d-flex justify-content-evenly align-items-center">
                  <MyButton
                    btnText="Volver al Incio"
                    btnColor="dark"
                    clickAction={actionHome}
                  />

                  <MyButton
                    btnText="Aãndir"
                    btnColor="dark"
                    clickAction={actionAdd}
                  />
                </div>
              </Card.Body>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default CardPizzaDetail;
