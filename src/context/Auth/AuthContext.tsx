import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiBase } from "../../service/api";

interface iLoginRegister {
  children: React.ReactNode;
}

interface iLoginDataBase {
  email: string;
  password: string;
}

interface iRegisterDataBase {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface iAuthContext {
  eye: boolean;
  eyeRegister: boolean;
  eyePassword: () => void;
  eyePasswordRegister: () => void;
  eyeConfirm: boolean;
  eyePasswordConfirm: () => void;
  onSubmitFormLogin: (data: iLoginDataBase) => Promise<void>;
  onSubmitFormRegister: (data: iRegisterDataBase) => void;
}

interface iResponseApi {
  token: string;
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthValidation = ({ children }: iLoginRegister) => {
  const [eye, setEye] = useState(true);
  const [eyeRegister, setEyeRegister] = useState(true);
  const [eyeConfirm, setEyeConfirm] = useState(true);

  const eyePassword = () => {
    eye ? setEye(false) : setEye(true);
  };

  const eyePasswordRegister = () => {
    eyeRegister ? setEyeRegister(false) : setEyeRegister(true);
  };

  const eyePasswordConfirm = () => {
    eyeConfirm ? setEyeConfirm(false) : setEyeConfirm(true);
  };

  const navigate = useNavigate();

  const onSubmitFormLogin = async (data: iLoginDataBase) => {
    try {
      const response = await ApiBase.post("/sessions", data);

      const { token } = response.data;

      window.localStorage.setItem("@KenzieHub:", token);

      navigate("/dashboard", { replace: true });

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

  const onSubmitFormRegister = (data: iRegisterDataBase) => {
    console.log(data);
    ApiBase.post("/users", data)
      .then((res) => {
        res.data &&
          toast.success("Conta criada com sucesso", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      })
      .catch((err) => {
        err &&
          toast.error("Conta já existente!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      });
  };

  return (
    <AuthContext.Provider
      value={{
        eye,
        eyeRegister,
        eyePassword,
        eyePasswordRegister,
        eyeConfirm,
        eyePasswordConfirm,
        onSubmitFormLogin,
        onSubmitFormRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
