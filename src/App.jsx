import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Pizza from "./pages/Pizza.jsx";
import Profile from "./components/Profile.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext.jsx";

function App() {
  const { token } = useContext(UserContext);

  /* 
  
Soluciones provisorias: 

Login.jsx
Para el Login, el email "almacenado" es: 'email' y la contraseña: 'theSuperPassword'
   
 */

  // UserContext.jsx / Login.jsx
  //Para probar Login y Logout, cambiar estado token en userContext.jsx:
  //Para observar el profile protegido, cambiar estado para false;
  //Para observar redireccionamiento al home desde login y register mantener o cambiar para true;

  //Seguimiento de token en la consola
  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/"  />}
        ></Route>
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/"  />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/pizza/:pid" element={<Pizza />}></Route>
        <Route
          path={"/profile"}
          element={token ? <Profile /> : <Navigate to="/login"  />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
