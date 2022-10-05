import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiBase } from "../../service/api";
import {
  BorderBottom,
  Container,
  Header,
  Main,
  SectionContent,
  SectionTitle,
} from "./style";

export const DashboardUser = () => {
  const [profile, setProfile] = useState({});
  const token = window.localStorage.getItem("@KenzieHub:");

  useEffect(() => {
    ApiBase.get("/profile").then((res) => setProfile(res.data));
  }, [token]);

  return (
    <Container>
      <Main>
        <Header>
          <h1>Kenzie Hub</h1>
          <Link to={"/login"}>Sair</Link>
        </Header>
        <BorderBottom />
        <SectionTitle>
          <h2>Olá, {profile.name} </h2>
          <p>{profile.course_module}</p>
        </SectionTitle>
        <BorderBottom />

        <SectionContent>
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </SectionContent>
      </Main>
    </Container>
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
