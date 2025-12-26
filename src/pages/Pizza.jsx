import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import CardPizzaDetail from "../components/CardPizzaDetail.jsx";

const Pizza = () => {
  const { apiPizza, setApiPizza, addToCart } = useContext(CartContext);
  const { pid } = useParams();
  let navigateHome = useNavigate();

  const apiFetcherDetail = async (id) => {
    if (apiPizza.id === id) return;

    try {
      const res = await fetch(`https://backendpizza-bk.onrender.com/api/pizzas/${id}`);
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
      <div className="container-fluid col-12 col-md-8  col-lg-7 col-xl-5 mx-auto m-2">
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
      </div>
    </>
  );
};

export default Pizza;
