import styled from "styled-components";
import { Form } from "react-router-dom";

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  overflow-y: hidden;

  background-color: var(--black);
  color: var(--grey-0);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 95%;
  width: 100%;
  overflow-y: auto;

  margin: 50px 0 20px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;

  margin-bottom: 19px;

  @media (min-width: 595px) {
    width: 535px;
  }

  & h1 {
    font-size: var(--title1);
    font-weight: 700;

    color: var(--color-primary);
  }

  & a {
    padding: 10px 25px;

    background-color: var(--grey-3);

    color: var(--grey-0);

    text-decoration: none;
    font-weight: 600;
    font-size: var(--title2);

    border-radius: 4px;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: var(--grey-3);

  gap: 20px;
  width: 90%;

  padding: 33px 13px;

  border-radius: 4px;

  @media (min-width: 595px) {
    width: 535px;
    /* height: 504px; */

    padding: 33px 20px;
  }

  & h2 {
    font-size: var(--title1);
    font-weight: 700;
  }

  & span {
    font-size: var(--headline);
    color: var(--grey-1);
  }

  & div span {
    font-size: var(--headline);
    font-weight: 600;
    color: var(--negative);
    animation: incorrect 0.3s ease-in-out;
    @keyframes incorrect {
      0% {
        transform: translateX(0);
      }
      20% {
        transform: translateX(-3px);
      }
      40% {
        transform: translateX(3px);
      }
      60% {
        transform: translateX(-1px);
      }
      80% {
        transform: translateX(1px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    color: var(--grey-0);

    width: 100%;
    height: 84px;

    & label {
      font-size: var(--headline);
    }

    & main {
      background-color: var(--grey-2);

      padding-right: 13px;

      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      & input {
        width: 89%;
        background-color: var(--grey-2);
      }
      svg {
        cursor: pointer;
      }
    }

    & input {
      outline: none;

      /* border: 2px solid var(--grey-0); */
      border: 1px solid transparent;
      border-radius: 4px;

      background-color: var(--grey-2);

      padding: 8px 13px;

      color: var(--grey-0);

      &::-webkit-input-placeholder {
        color: var(--grey-1);
      }
    }

    & select {
      padding: 8px 13px;

      color: var(--grey-1);

      background-color: var(--grey-2);

      outline: none;

      border-radius: 4px;
      /* border: 2px solid var(--grey-0); */
      border: 1px solid transparent;
    }
  }

  & button {
    padding: 10px;

    border: 1px solid transparent;
    border-radius: 4px;

    width: 100%;

    background-color: var(--color-primary-negative);

    color: var(--white);

    font-weight: 500;
    text-decoration: none;
    transition: 0.3s;

    cursor: pointer;

    :hover {
      opacity: 0.8;
      transition: 0.3s;
    }
  }
`;
