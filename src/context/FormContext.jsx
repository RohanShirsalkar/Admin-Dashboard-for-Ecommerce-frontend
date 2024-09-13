import { useContext, createContext, useState } from "react";
import { useForm } from "react-hook-form";

const FormContext = createContext();
export default FormContext;

export const FormContextProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    setValue,
    getValues,
    watch,
    reset,
  } = useForm();

  const [state, setState] = useState(10);

  const value = {
    state,
    setState,
    register,
    handleSubmit,
    control,
    errors,
    setError,
    setValue,
    getValues,
    watch,
    reset,
  };

  return <FormContext.Provider value={value}>{children} </FormContext.Provider>;
};
