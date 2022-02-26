import { useState } from "react";

const useInput = (validatorFn) => {
  const [value, setValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsvalid = validatorFn(value);
  const hasError = !inputIsvalid && inputIsTouched;

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurhandler = (event) => {
    setInputIsTouched(true);
  };
  return {
    value,
    isValid: inputIsvalid,
    error: hasError,
    changeHandler,
    blurhandler
  };
};
export default useInput;
