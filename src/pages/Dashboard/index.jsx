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
  // const [techs, setTechs] = useState("");

  const token = window.localStorage.getItem("@KenzieHub:");

  useEffect(() => {
    const userDash = async () => {
      const response = await ApiBase.get("/profile");

      token ? setReload(false) : setReload(true);
      const { data } = response;
      setProfile(data);
      // setTechs(data.techs);

      console.log(data);
    };

    userDash();
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
        <Navigate to="/login" />
      )}
    </>
  );
};

/*
export const DashboardUser = () => {
    return(
        <div>
            <header>
                <h1></h1>
                <Link></Link>
            </header>
        </div>
    )
}
*/
