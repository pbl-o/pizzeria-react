import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  //Actualización de token
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  //Método para hacer login
  const userLogIn = async (e, email, password) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    console.log(user);

    try {
      const response = await fetch("https://backendpizza-bk.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log("token is : ");
      console.log(data.token);

      if (data.token) {
        setToken(data.token);
        console.log(email);

        alert("Sesión iniciada correctamente");
        navigate("/profile");
      } else {
        alert("Error de credenciales");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Método para registrar
  const userRegister = async (e, newEmail, newPassword) => {
    e.preventDefault();

    const response = await fetch("https://backendpizza-bk.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: newEmail,
        password: newPassword,
      }),
    });

    const data = await response.json();
    console.log(data);

    response.ok
      ? alert("creación de usuario exitosa")
      : alert(data.message || "Error al registrar");
  };
  //Método para acceder y obeneter informaciones de usuari@ específico
  const getUserProfile = async () => {
    if (!token) return;

    try {
      const response = await fetch("https://backendpizza-bk.onrender.com/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      /*console.log('the user data is:')
      console.log(data); */
      setUser(data);
    } catch (error) {
      alert("there is something wrong with your session");
    }
  };
  //Método logut
  const logOut = () => {
    if (!token) return;

    alert("Estamos cerrando su sesión...");
    localStorage.clear();
    setEmail("");
    setToken(null);
    setUser(null);
    // console.log(email ? email : "no email");
  };

  //PROVIDER
  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        userLogIn,
        logOut,
        getUserProfile,
        userRegister,
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
