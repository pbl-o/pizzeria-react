import { Card } from "react-bootstrap";
import MyButton from "./Button";
import emptyAvatar from "../assets/empty.jpeg";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { logOut, getUserProfile, user } = useContext(UserContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <Card className="m-5 p-5 text-center">
        <Card.Img
          variant="top"
          src={emptyAvatar}
          className="w-25 mx-auto m-3"
        />
        <Card.Text className="fw-bolder">
          Email : {user ? user.email : "No user"}
        </Card.Text>
        '
        <Card.Text className="fw-bolder">
          ID : {user ? user.id : "No ID"}
        </Card.Text>
        <Card.Body>
          <MyButton
            btnColor="dark"
            btnText="Cerrar Sesión"
            clickAction={() => {
              logOut();
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
