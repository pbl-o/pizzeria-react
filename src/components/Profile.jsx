import { Card } from "react-bootstrap";
import MyButton from "./Button";
import { useNavigate } from "react-router-dom";
import emptyAvatar from "../assets/empty.jpeg";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

//Token False = Página no accesible, redirecciona al Login;
//Token True = Página accesible;
const Profile = () => {
  const { logOut } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <Card className="m-5 p-5 text-center">
        <Card.Img
          variant="top"
          src={emptyAvatar}
          className="w-25 mx-auto m-3"
        />
        <Card.Text className="fw-bolder">Usuario@Reactmail.com</Card.Text>
        <Card.Body>
          <MyButton
            btnColor="dark"
            btnText="Cerrar Sesión"
            clickAction={() => {
              logOut(), navigate("/");
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
