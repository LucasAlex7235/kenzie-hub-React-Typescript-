import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiBase } from "../../service/api";

export const AuthContext = createContext({});

export const AuthValidation = ({ children }) => {
  const [eye, setEye] = useState(true);
  const [eyeConfirm, setEyeConfirm] = useState(true);

  const eyePassword = () => {
    eye ? setEye(false) : setEye(true);
  };
  const eyePasswordConfirm = () => {
    eyeConfirm ? setEyeConfirm(false) : setEyeConfirm(true);
  };

  const navigate = useNavigate();

  const onSubmitForm = async (data) => {
    try {
      const response = await ApiBase.post("/sessions", data);

      const { token } = response.data;

      window.localStorage.setItem("@KenzieHub:", token);

      navigate("/dashboard");
      window.location.reload();
    } catch {
      toast.error("Email ou senha incorretos!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        eye,
        eyePassword,
        eyeConfirm,
        eyePasswordConfirm,
        onSubmitForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
