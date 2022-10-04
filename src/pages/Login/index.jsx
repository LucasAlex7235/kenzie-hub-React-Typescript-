import { Conatiner, FormLogin } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const LoginUser = () => {
  const { register, handleSubmit } = useForm();

  const validationSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigarória"),
  });

  const onSubmitForm = (data) => {
    console.log(data);
  };

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
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
        </div>

        <button type="submit">Entrar</button>
        <span>Ainda não possui uma conta?</span>
        {/* <button type="submit">Cadastre-se</button> */}
        <Link to="/register">Cadastra-se</Link>
      </FormLogin>
    </Conatiner>
  );
};
