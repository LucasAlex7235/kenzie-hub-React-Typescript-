import { Conatiner, Content, FormLogin, Header } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { Link } from "react-router-dom";

export const RegisterUser = () => {
  const { register, handleSubmit } = useForm();

  const validationSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigarória"),
    confirm_password: yup.string().required("Senha obrigarória"),
    name: yup.string().required("Nome obrigatório"),
    bio: yup.string().required("Biografia obrigarória"),
    contact: yup.string().required("Contato obrigarório"),
    course_module: yup.string().required("Contato obrigarório"),
  });

  // {
  //   "email": "johndoe@email.com",
  //   "password": "123456",
  //   "name": "John Doe",
  //   "bio": "Lorem ipsum dolor emet",
  //   "contact": "linkedin/in/johndoe",
  //   "course_module": "Segundo Módulo (Frontend avançado)"
  // }

  const onSubmitForm = (data) => {
    console.log(data);
  };

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
          </div>

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

          <div>
            <label>Confirmar Senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirm_password")}
            />
          </div>

          <div>
            <label>Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
          </div>

          <div>
            <label>Contato</label>
            <input
              type="text"
              placeholder="Opções de contato"
              {...register("contact")}
            />
          </div>

          <div>
            <label>Selecionar módulo</label>
            <select {...register("course_module")}>
              <option value="select">Selecione o módulo</option>
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
          </div>
          <button type="submit">Cadastra-se</button>
        </FormLogin>
      </Content>
    </Conatiner>
  );
};
