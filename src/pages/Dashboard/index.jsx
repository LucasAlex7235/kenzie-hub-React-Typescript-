import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import { ApiBase } from "../../service/api";
import { TodoListProgramming } from "../TodoList";
import {
  BorderBottom,
  Container,
  ContainerReload,
  Header,
  Main,
  ReloadPage,
  SectionContent,
  SectionTitle,
} from "./style";

export const DashboardUser = ({ children }) => {
  const [profile, setProfile] = useState("");
  const [reload, setReload] = useState(true);

  const token = window.localStorage.getItem("@KenzieHub:");

  useEffect(() => {
    token ? setReload(false) : setReload(true);

    const userDash = async () => {
      const response = await ApiBase.get("/profile");

      const { data } = response;
      setProfile(data);
    };

    token && userDash();
  }, []);

  return (
    <>
      {token ? (
        <Container>
          <Main>
            {reload ? (
              <ContainerReload>
                <ReloadPage>
                  <div></div>
                </ReloadPage>
              </ContainerReload>
            ) : (
              <>
                <Header>
                  <h1>Kenzie Hub</h1>
                  <Link to={"/login"}>Sair</Link>
                </Header>
                <BorderBottom />
                <SectionTitle>
                  <h2>{profile ? `Olá, ${profile.name}` : "Aguarde"} </h2>
                  <p>{profile?.course_module}</p>
                </SectionTitle>
                <BorderBottom />

                <TodoListProgramming />
              </>
            )}
          </Main>
        </Container>
      ) : (
        // <Navigate to="/login" replace /> Dando erro de carregamento no vercel
        window.history.back()
      )}
    </>
  );
};
