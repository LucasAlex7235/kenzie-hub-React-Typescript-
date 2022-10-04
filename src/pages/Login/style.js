import styled from "styled-components";
import { Form } from "react-router-dom";

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background-color: var(--black);
  color: var(--grey-0);

  & h1 {
    font-size: var(--title1);
    font-weight: 700;

    color: var(--color-primary);

    margin-bottom: 19px;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: var(--grey-3);

  height: 404px;
  width: 90%;

  padding: 33px 13px;

  border-radius: 4px;

  @media (min-width: 595px) {
    width: 535px;
    height: 504px;

    padding: 33px 20px;
  }

  & h2 {
    font-size: var(--title2);
    font-weight: 700;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    color: var(--grey-0);

    width: 100%;

    & label {
      font-size: var(--headline);
    }

    & input {
      outline: none;

      border: 1px solid transparent;
      /* border: 2px solid var(--grey-0); */
      border-radius: 4px;

      background-color: var(--grey-2);

      padding: 8px 13px;

      color: var(--grey-0);

      &::-webkit-input-placeholder {
        color: var(--grey-0);
      }
    }
  }

  & button {
    padding: 10px;

    border: 1px solid transparent;
    border-radius: 4px;

    width: 100%;

    background-color: var(--color-primary);
    color: var(--white);

    font-weight: 500;
  }

  & a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    border: 1px solid transparent;
    border-radius: 4px;

    width: 100%;

    background-color: var(--grey-2);

    color: var(--white);

    font-weight: 500;
    text-decoration: none;
  }

  & span {
    font-size: var(--headline);
  }
`;
