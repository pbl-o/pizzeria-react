import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogIn } = useContext(UserContext);

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          userLogIn(e, email, password);
        }}
        className="border rounded py-5 mx-auto d-flex flex-column align-items-center w-50 my-4 gap-5"
      >
        {/* email input */}
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
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
          <label htmlFor="Password">Password</label>
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
