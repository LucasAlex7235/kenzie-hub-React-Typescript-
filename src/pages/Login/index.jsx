import { Conatiner, FormLogin } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { ApiBase } from "../../service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido!"),
  password: yup.string().required("Senha obrigarória"),
});

export const LoginUser = () => {
  const clearToken = window.localStorage.clear();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmitForm = (data) => {
    // console.log(data);
    ApiBase.post("/sessions", data)
      .then((res) => {
        console.log(res.data);
        //ss@ggggggg.com Teste1@
        navigate("/dashboard");
        window.localStorage.clear();
        window.localStorage.setItem("@KenzieHub:", res.data.token);
      })
      .catch((err) => {
        err &&
          toast.error("Email ou senha incorretos!", {
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
  console.log(errors);

  return (
    <Conatiner>
      <h1>Kenzie Hub</h1>
      <FormLogin onSubmit={handleSubmit(onSubmitForm)}>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email?.message && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password?.message && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Entrar</button>
        <span>Ainda não possui uma conta?</span>
        {/* <button type="submit">Cadastre-se</button>  */}
        <Link to="/register">Cadastra-se</Link>
      </FormLogin>
      <ToastContainer />
    </Conatiner>
  );
};
