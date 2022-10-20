import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ApiBase } from "../../service/api";
import { TodoListProgramming } from "../TodoList";
import {
  BorderBottom,
  Container,
  ContainerReload,
  Header,
  Main,
  ReloadPage,
  SectionTitle,
} from "./style";

interface iDashboardProps {
  children: React.ReactNode;
}

interface iProfileUser {
  name: string;
  course_module: string;
}

export const DashboardUser = ({ children }: iDashboardProps) => {
  const [profile, setProfile] = useState<iProfileUser>();
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
        <Navigate to="/login" replace />
      )}
    </>
  );
};
