import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // token de validación de sesión (provisorio)
  /* Las rutas están protegidas, en la medida que se acceda a ellas bajo el token pertinente,
  se llega a los endpoits mencionados en el desafío. No obstante no da para almacenar los estados
  al momento de ingresar las rutas directamente en la barra del browser (vía teclado) las solucione que encontré (localStorage)
  escapan de los contenidos de la clase.
  
  Por ello simplemente dejaré comentado a modo de instrucciones lo que es preciso
  para conseguir el comportamiento pedido*/

  //Para observar el profile protegido, cambiar estado para false;
  //Para observar redireccionamiento al home desde login y register dejar true;
  const [token, setToken] = useState(true);

  const logOut = () => {
    // if (!token) return; (token null)

    alert("Estamos cerrando su sesión...");
    setToken(false);
  };

  // Dummy de validación provisorio.
  //Colocar estas credencailes en el Login acceder al profile sin cambiar estado.
  let dummyEmail = "email";
  let dummyPassword = "theSuperPassword";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //

  //PROVIDER
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        email,
        setEmail,
        password,
        setPassword,
        dummyEmail,
        dummyPassword,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
