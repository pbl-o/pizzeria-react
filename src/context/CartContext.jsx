import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Array de pizzas Lista Home (desde la api)
  const [pizzaArray, setPizzaArray] = useState([]);
  // Array de Pizzas Cart (array dinámico que acumula pedidos)
  const [cartArray, setCartArray] = useState([]);
  //selectedPizza (al apretar Añadir)
  const [selectedPizza, setSelectedPizza] = useState({});
  // valor total pizzas
  const [total, setTotal] = useState(0);

  //Pizza Detalle (pizza específica al apretar Ver Más)
  const [apiPizza, setApiPizza] = useState({});

  //////////////////////
  //API
  const apiFetcher = async (url) => {
    if (pizzaArray.length > 0) return;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setPizzaArray(data);
    } catch (error) {
      console.error("Fetching error", error);
    }
  };

  //HOMEJ.JSX
  //arrayCarrito = cartArray / setCartArray
  const addToCart = (pizzaSel) => {
    //Actualizar el array cada vez que se aprieta un botón
    setCartArray((currentArray) => {
      //para identificar la existencia de la misma pizza, se comparan id de la lista de prueba y de la pizza sleccionada.
      const isPizza = currentArray.find((pizza) => pizza.id === pizzaSel.id);

      //Si la pizza es encontrada, es porque ya existe en el array. Esto significa que a la lista actual (la cual ya tiene contador) se aumenta su cuenta en 1.
      if (isPizza) {
        return currentArray.map((item) =>
          item.id === pizzaSel.id ? { ...item, count: item.count + 1 } : item
        );
      }
      //caso contrario no existe, por lo que se agrega el element completo y se crea un contador de unidad (count: 1)
      return [...currentArray, { ...pizzaSel, count: 1 }];
    });
  };

  /////////////////////
  //CART.JSX
  //Para el Cálculo del total carrito, se suman todos los prodcutos entre precio y contador de cada elemento del array. Se asocial el resultado al estado total, en la medida que el carrito se actualize.

  const updateCalc = (array) =>
    setTotal(
      array.reduce(
        (sum, item) => sum + Number(item.price || 0) * Number(item.count || 0),
        0
      )
    );

  useEffect(() => {
    updateCalc(cartArray);
  }, [cartArray]);

  /* Intenté mantener esta función (adaptada y tal cual está de todas las maneras que investigué y se me ocurrieron en Cart.jsx, sin embargo no conseguí controlar/compartir el resultado más allá del alcance del componente y sin repetir la función en todos los componentes involucrados (Home.jsx Pizza.jsx) en la variación de pizzas en el carrito, por ello decidí dejar los cálculos en el context, controlados por el array dinámico del carrito a modo de dependencia para priorizar por lo que si sepodía cumplir de la rúbrica
  
  "El total de la compra debe ser -calculado- y
mostrado en la página Cart, además este
tiene que ser el mismo que se muestra en el
navbar."*/

  //PROVIDER
  return (
    <CartContext.Provider
      value={{
        total,
        setTotal,
        selectedPizza,
        setSelectedPizza,
        pizzaArray,
        setPizzaArray,
        apiFetcher,
        addToCart,
        cartArray,
        setCartArray,
        apiPizza,
        updateCalc,
        setApiPizza,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
