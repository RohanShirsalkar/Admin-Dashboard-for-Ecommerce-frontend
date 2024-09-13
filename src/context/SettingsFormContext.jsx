import { createContext, useState } from "react";
import { useForm } from "react-hook-form";

const SettingsFormContext = createContext();
export default SettingsFormContext;

const defaultValues = {
  city: "New York",
  credit_card: true,
  debit_card: true,
  description:
    "Explore the latest trends in fashion at our store. We offer a wide selection of stylish clothing, accessories, and footwear for all occasions. Shop with confidence and find your perfect look with us.",
  email: "info@fashionhub.com",
  pay_on_delivery: false,
  phone: "123-456-7890",
  pinCode: "10001",
  razorpay: true,
  state: "New York",
  storeName: "Fashion Hub",
  street: "123 Fashion Street",
};

export const SettingsFormContextProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    setValue,
    getValues,
    watch,
  } = useForm({
    defaultValues,
  });

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
  };

  return (
    <SettingsFormContext.Provider value={value}>
      {children}
    </SettingsFormContext.Provider>
  );
};
