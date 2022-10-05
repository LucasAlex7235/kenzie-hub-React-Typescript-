import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  background-color: var(--black);
`;

export const Main = styled.main`
  width: 90%;
  margin: 0 auto;
  max-width: 1024px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 26px 0;

  position: relative;

  & h1 {
    color: var(--color-primary);

    font-size: var(--title1);
    font-weight: 700;
  }

  & a {
    padding: 10px 16px;

    background-color: var(--grey-3);
    color: var(--grey-0);

    text-decoration: none;
    font-size: var(--title2);
    font-weight: 500;

    border-radius: 4px;
  }
`;

export const BorderBottom = styled.div`
  border-bottom: 1px solid var(--grey-3);
  width: 100vw;
  margin: 0 auto;
  position: absolute;
  left: 0;
`;

export const SectionTitle = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 35px 0;

  line-height: 35px;

  & h2 {
    font-size: var(--title1);
    font-weight: 700;

    color: var(--grey-0);
  }

  & p {
    font-size: var(--title2);
    font-weight: 600;

    color: var(--grey-1);
  }
`;

export const SectionContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 35px 0;

  line-height: 35px;

  & h3 {
    font-size: var(--title1);
    font-weight: 700;

    color: var(--grey-0);
  }

  & p {
    font-size: var(--title2);
    font-weight: 600;

    color: var(--grey-1);
  }
`;
