import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MyButton from "./Button.jsx";
import conversor from "../utils/conversor.js";
import Accordion from "react-bootstrap/Accordion";

//Descripción va en CardDetalle al hacer click en ver más
const CardPizza = ({
  name,
  img,
  price,
  ingredients,
  actionAdd,
  actionDetail,
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
              <Card.Text className="fw-bolder text-center pt-1 px-4">
                Ingredientes
              </Card.Text>
              <Card.Body>
                <ul className="d-flex flex-wrap justify-content-center align-items-center fw-bolder text-center text-capitalize">
                  🍕 {ingredients}
                </ul>
              </Card.Body>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="fw-bolder">{conversor(price)}</Card.Text>
              <Card.Body>
                <div className=" d-flex justify-content-around">
                  <MyButton
                    btnText="Ver Más"
                    btnColor="light"
                    clickAction={actionDetail}
                  />
                  <MyButton
                    btnText="Añadir"
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

export default CardPizza;
