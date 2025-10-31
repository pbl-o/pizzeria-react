import Button from "react-bootstrap/Button";

const MyButton = ({ btnColor, clickAction, btnText, isDisabled }) => {
  return (
    <Button
      className="fw-bolder"
      variant={btnColor}
      onClick={clickAction}
      disabled={isDisabled}
    >
      {btnText}
    </Button>
  );
};

export default MyButton;
