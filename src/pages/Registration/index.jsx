import { Conatiner, Content, FormLogin, Header } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiBase } from "../../service/api";
// import { Link } from "react-router-dom";

const validationPasswordRegexLowerCase = /(?=.*[a-z])/;
const validationPasswordRegexUpperCase = /(?=.*[A-Z])/;
const validationPasswordRegexNumber = /(?=.*[1-9])/;
const validationPasswordRegexCharacter = /(?=.*[@$!%*#?&])/;

const validationSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigarória")
    .matches(
      validationPasswordRegexUpperCase,
      "Deve conter ao menos uma letra maiúscula"
    )
    .matches(
      validationPasswordRegexLowerCase,
      "Deve conter ao menos uma letra minuscula"
    )
    .matches(validationPasswordRegexNumber, "Conter ao menos um número")
    .matches(
      validationPasswordRegexCharacter,
      `Deve conter ao menos um caractere especial. ex: "*%&"`
    )
    .min(6, "Deve conter no mínimo de 6 caracteres"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigarória")
    .oneOf([yup.ref("password")], "Senha precisa ser a mesma"),
  name: yup.string().required("Nome obrigatório"),
  bio: yup.string().required("Biografia obrigarória"),
  contact: yup.string().required("Contato obrigarório"),
  course_module: yup.string().required("Contato obrigarório"),
});

export const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmitForm = (data) => {
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
        }, 3100);
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
    // console.log(data);
  };

  const errorToastify = () => {
    (errors.email ||
      errors.password ||
      errors.confirm_password ||
      errors.name ||
      errors.bio ||
      errors.contact) &&
      toast.error("Verifique os campos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };

  useEffect(errorToastify, [errors]);

  return (
    <Conatiner>
      <Content>
        <Header>
          <h1>Kenzie Hub</h1>
          <Link to="/login">Voltar</Link>
        </Header>
        <FormLogin onSubmit={handleSubmit(onSubmitForm)}>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
          <div>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors.name?.message && <span>{errors.name.message}</span>}
          </div>
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
          <div>
            <label>Confirmar Senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirm_password")}
            />
            {errors.confirm_password?.message && (
              <span>{errors.confirm_password.message}</span>
            )}
          </div>
          <div>
            <label>Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio?.message && <span>{errors.bio.message}</span>}
          </div>
          <div>
            <label>Contato</label>
            <input
              type="text"
              placeholder="Opções de contato"
              {...register("contact")}
            />
            {errors.contact?.message && <span>{errors.contact.message}</span>}
          </div>
          <div>
            <label>Selecionar módulo</label>
            <select {...register("course_module")}>
              <option value="Primeiro Módulo">
                Primeiro Módulo (Frontend iniciante)
              </option>
              <option value="Segundo Módulo">
                Segundo Módulo (Frontend intermediario)
              </option>
              <option value="Terceiro Módulo">
                Terceiro Módulo (Frontend avançado)
              </option>
            </select>
            <span>{errors.course_module?.message}</span>
          </div>
          <button type="submit">Cadastra-se</button>
        </FormLogin>
        <ToastContainer />
      </Content>
    </Conatiner>
  );
};
