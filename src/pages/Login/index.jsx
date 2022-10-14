import { Conatiner, ContainerPassword, FormLogin } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido!"),
  password: yup.string().required("Senha obrigarória"),
});

export const LoginUser = () => {
  const { eye, eyePassword, onSubmitFormLogin } = useContext(AuthContext);

  window.localStorage.clear();
  // window.location.reload();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <Conatiner>
      <h1>Kenzie Hub</h1>
      <FormLogin onSubmit={handleSubmit(onSubmitFormLogin)}>
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

          <main>
            <input
              type={eye ? "password" : "text"}
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <p onClick={eyePassword}>
              {eye == true ? <AiFillEye /> : <AiFillEyeInvisible />}
            </p>
          </main>

          {errors.password?.message && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Entrar</button>
        <span>Ainda não possui uma conta?</span>

        <Link to="/register">Cadastra-se</Link>
      </FormLogin>
      <ToastContainer />
    </Conatiner>
  );
};
