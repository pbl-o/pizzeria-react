import { useState } from "react";

//En este componente decidí controlar el rellenado de campos por medio de condiciones. En el componenet Login, está controlado por el atributo 'required'.

const Register = () => {
  //estados de input:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //estados de error
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleValidation = (e) => {
    e.preventDefault();

    if (
      password.length < 6 ||
      password !== confirmPassword ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError(true);
      password.length < 6 &&
        setErrorMessage("Tu contraseña debe tener más de 6 caracteres");
      password !== confirmPassword &&
        setErrorMessage("Tu contraseña debe coincidir con la confirmación");
      (!email.trim() || !password.trim() || !confirmPassword.trim()) &&
        setErrorMessage("Todos los campos deben ser rellenados");
      return;
    }

    setError(false);
    setErrorMessage("");
    alert("Succesfully Registered");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <h2 className="text-center pt-3">Register</h2>
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
        className="border rounded py-5 mx-auto d-flex flex-column justify-conntent-center align-items-center w-50 my-4 gap-4"
      >
        {/* email inout */}
        <div className="form-group ">
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control my-2"
            value={email}
            //required
            placeholder="Enter your email"
          />
        </div>
        {/* password input */}
        <div className="form-group ">
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control my-2"
            value={password}
            //required
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
            //required
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
