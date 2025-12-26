import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

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
      <Header />
      <div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-2 my-1 mx-auto">
        {pizzaArray.map((item) => {
          return (
            <CardPizza
              key={item.id}
              name={item.name}
              description={item.desc}
              price={item.price}
              img={item.img}
              ingredients={item.ingredients.map((ing) => {
                return (
                  <li className="list-group-item border-0" key={ing}>
                    {ing}
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
          );
        })}
      </div>
    </>
  );
};

export default Home;
