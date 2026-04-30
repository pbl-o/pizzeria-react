import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Col } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogIn } = useContext(UserContext);

  return (
    <>
      <Col xs={10} md={6} lg={5} xl={3} className="mx-auto py-5">
       <h2 className="text-center pt-3">Login</h2>
        <form
          action=""
          onSubmit={(e) => {
            userLogIn(e, email, password);
          }}
          className="border rounded py-5 mx-auto  d-flex flex-column justify-content-center align-items-center my-4 gap-5"
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
      </Col>
    </>
  );
};

export default Login;
