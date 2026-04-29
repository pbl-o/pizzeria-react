import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import CardPizzaDetail from "../components/CardPizzaDetail.jsx";
import { Col, Row } from "react-bootstrap";

const Pizza = () => {
  const { apiPizza, setApiPizza, addToCart } = useContext(CartContext);
  const { pid } = useParams();
  let navigateHome = useNavigate();
  const VITE_URL = import.meta.env.VITE_URL;

  const apiFetcherDetail = async (id) => {
    if (apiPizza.id === id) return;

    try {
      const res = await fetch(`${VITE_URL}/${id}`);
      const data = await res.json();
      setApiPizza(data);
    } catch (error) {
      console.error("Fetching error", error);
    }
  };

  //Realiza el pedido con el id obetnido vía useParams()
  useEffect(() => {
    apiFetcherDetail(pid);
  }, [pid]);

  return (
    <>
      <Row className="d-flex justify-content-center w-100 mb-5">
        <Col className="mx-auto" xs={12} md={8} lg={6} xl={4}>
          <CardPizzaDetail
            name={apiPizza.name}
            img={apiPizza.img}
            price={apiPizza.price}
            ingredients={apiPizza.ingredients?.map((item, index) => (
              <li className="list-group-item border-0" key={index}>
                {item}
              </li>
            ))}
            description={apiPizza.desc}
            actionHome={() => {
              navigateHome("/");
            }}
            actionAdd={() => {
              addToCart(apiPizza);
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Pizza;
