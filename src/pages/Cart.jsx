import Card from "react-bootstrap/Card";
import MyButton from "../components/Button.jsx";
import conversor from "../utils/conversor.js";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { UserContext } from "../context/UserContext.jsx";

const Cart = () => {
  const { cartArray, setCartArray, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  //Se actualiza el array sumando al contador o no se hace nada
  const updatePlus = (id) => {
    setCartArray((currentArray) =>
      currentArray.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  //Se actualiza el array restando al contador o no se hace nada
  const updateLess = (id) => {
    setCartArray((currentArray) =>
      currentArray
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => (item.count || 0) > 0)
    );
  };

  //Método para enviar carrito al backend
  const startPayment = async () => {
    const response = await fetch("https://backendpizza-bk.onrender.com/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cartArray,
      }),
    });
    const data = await response.json();

    if (cartArray.length === 0) {
      alert("Elige un producto para poder ejecutar una compra");
      return;
    }
    alert("Tu compra ha sido existosa");
    console.log("purchase: ");
    console.log(data.message);
    console.log(data);
  };

  /* El Método startPayment, envía el carrito por medio de la ruta /checkouts
   */

  return (
    <>
      <div className="container-fluid p-1">
        <Card className="row g-1 m-2 m-md-5 p-1 p-md-4 mx-auto">
          {cartArray.map((pizza) => {
            return (
              <Card.Body
                className="col-sm-10 col-md-12 col-lg-10 d-flex justify-content-evenly justify-content-md-around align-items-center px-3 border rounded  mx-auto"
                key={pizza.id}
              >
                <img className="w-25 rounded" src={pizza.img} alt="" />
                <p className="fw-bolder text-capitalize w-25 text-center mt-4 ">
                  {pizza.name}
                </p>

                <div className="d-flex w-50 justify-content-evenly justify-content-md-around">
                  <p className="fw-bolder text-center px-2 mt-4">
                    {conversor(pizza.price)}
                  </p>

                  <div className="d-flex align-items-center gap-2 w-25">
                    <button
                      className="btn btn-danger fw-bolder"
                      onClick={() => {
                        updateLess(pizza.id);
                      }}
                    >
                      -
                    </button>
                    <p className="fw-bolder mt-4">{pizza.count}</p>

                    <button
                      className="btn btn-primary fw-bolder"
                      onClick={() => {
                        updatePlus(pizza.id);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </Card.Body>
            );
          })}

          {/*Token True = botón Activado | Token False = botón inactivo (disabled)  */}
          <div className="text-center mt-3">
            <h3 className="">Total</h3>
            <p className=" fw-bolder fs-3">{conversor(total)}</p>
            <div className="col-7 mx-auto">
              <MyButton
                btnText="Pagar"
                btnColor="dark"
                isDisabled={token ? false : true}
                clickAction={startPayment}
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Cart;
