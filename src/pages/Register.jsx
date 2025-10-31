import { useContext, useState } from "react";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";


const Register = () => {
  const { userRegister } = useContext(UserContext);
  const [confirmPassword, setConfirmPassword] = useState("");

  const newEmail = useInput("");
  const newPassword = useInput("");

  return (
    <>
      <h2 className="text-center pt-3">Register</h2>

      <form
        action=""
        onSubmit={(e) => {
          userRegister(e, newEmail.value, newPassword.value);
        }}
        className="border rounded py-5 mx-auto d-flex flex-column justify-conntent-center align-items-center w-50 my-4 gap-4"
      >
        {/* email inout */}
        <div className="form-group ">
          <label htmlFor="">Email</label>
          <input
            type="text"
            {...newEmail}
            className="form-control my-2"
            required
            placeholder="Enter your email"
          />
        </div>
        {/* password input */}
        <div className="form-group ">
          <label htmlFor="">Password</label>
          <input
            type="password"
            {...newPassword}
            className="form-control my-2"
            required
            placeholder="Enter your password"
          />
        </div>
        {/* password confirm */}
        <div className="form-group ">
          <label htmlFor="">Password confirmation</label>
          <input
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            className="form-control my-2"
            value={confirmPassword}
            required
            placeholder="Confirm your Password"
          />
        </div>

        <button className="btn btn-dark col-6 mt-3" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Register;
