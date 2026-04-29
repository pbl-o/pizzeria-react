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
            <Card.Title className="text-capitalize fs-3">{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text className="fw-bolder text-center m-0  px-4 fs-5">
                Ingredientes
              </Card.Text>
              <Card.Body >
                <ul className="text-capitalize m-0">
                  <div className="row row-cols-1 fs-5 g-1 w-100 p-1">
                  {ingredients}
                  </div>
                </ul>
              </Card.Body>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 mt-1 mb-3">
              <Card.Text className="fw-bolder">
                {conversor(price)}
              </Card.Text>
              <Card.Body className="py-2 m-0 d-flex justify-content-evenly align-items-center">
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

              </Card.Body>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default CardPizza;
