import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";

const Home = () => {
  //Elementos a usar del context (array de todas las pizzas)
  const { pizzaArray, apiFetcher, addToCart } = useContext(CartContext);
  let navigateToPizza = useNavigate();

  //se hace un fecth para recibir los datos de las pizzas al montar el componente.
  useEffect(() => {
    apiFetcher("https://backendpizza-bk.onrender.com/api/pizzas");
  }, []);

  return (
    <>
      <div className="container-fluid px-5 py-2 mb-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mx-auto">
          {pizzaArray.map((item, index) => {
            return (
              <Col key={item.id} className="py-3">
                <CardPizza
                  key={item.id}
                  name={item.name}
                  description={item.desc}
                  price={item.price}
                  img={item.img}
                  ingredients={item.ingredients.map((ing) => {
                    return (
                      <li className="list-group-item border-0 py-1" key={ing}>
                        <div>
                          <div className="text-start">
                            <span className="pizza-icon">🍕</span>
                            {ing}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  actionAdd={() => {
                    addToCart(item);
                  }}
                  actionDetail={() => {
                    navigateToPizza(`/pizza/${item.id}`);
                  }}
                />
              </Col>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
