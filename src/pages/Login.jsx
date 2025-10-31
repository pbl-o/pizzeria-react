import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const {
    token,
    setToken,
    email,
    setEmail,
    password,
    setPassword,
    dummyEmail,
    dummyPassword,
  } = useContext(UserContext);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let navigateToProfile = useNavigate();

  const handleValidation = (e) => {
    e.preventDefault();

    if (
      dummyEmail !== email ||
      dummyPassword !== password ||
      password.length < 6
    ) {
      setError(true);
      dummyEmail !== email && setErrorMessage("Wrong email");
      dummyPassword !== password && setErrorMessage("Wrong Password");
      password.length < 6 && setErrorMessage("Password is too short");
      return;
    }

    setToken(true);
    setError(false);
    setErrorMessage("");
    alert("Login Succesful");
    setEmail("");
    setPassword("");

    navigateToProfile("/profile");
  };

  return (
    <>
      <h2 className="text-center pt-3">Login</h2>
      {error ? (
        <p className="text-center bg-danger text-light fw-bolder border w-50 rounded mx-auto">
          {errorMessage}
        </p>
      ) : (
        ""
      )}

      <form
        action=""
        onSubmit={handleValidation}
        className="border rounded py-5 mx-auto d-flex flex-column align-items-center w-50 my-4 gap-5"
      >
        {/* email input */}
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="form-control"
            placeholder="Enter your email"
            value={email}
          />
        </div>
        {/* password input */}
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="form-control"
            placeholder="Enter your password"
            value={password}
          />
        </div>

        <button className="btn btn-dark col-6 my-3 fw-bolder" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Login;
