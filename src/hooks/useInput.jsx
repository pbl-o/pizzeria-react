import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
