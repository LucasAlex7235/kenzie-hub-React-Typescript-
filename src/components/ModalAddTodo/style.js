import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: #00000090;

  display: flex;
  align-items: center;
  justify-content: center;

  /* & div {
    background-color: white;

    width: 379px;
  } */
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-3);

  width: 379px;
  border-radius: 4px;

  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--grey-2);

    width: 100%;

    border: 1px solid var(--grey-2);
    border-radius: 4px 4px 0 0;

    padding: 12px 20px;

    & h3 {
      font-size: var(--title2);
    }

    & svg {
      color: var(--grey-1);

      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  padding: 0 20px;

  & label {
    display: flex;
    flex-direction: column;

    font-size: var(--headline);

    color: var(--grey-0);

    & div {
      background-color: var(--grey-2);

      padding: 2px 16px;

      border-radius: 4px;

      & p {
        color: var(--grey-0);
      }
    }

    & input {
      outline: none;

      color: var(--grey-0);
      background-color: var(--grey-2);

      border: 2px solid var(--grey-0);
      border-radius: 4px;

      padding: 0 16px;
      ::placeholder {
        color: var(--grey-0);
      }
    }

    & select {
      outline: none;

      height: 39px;

      background-color: var(--grey-2);

      color: var(--grey-0);

      padding: 0 16px;

      border: 2px solid var(--grey-0);
      border-radius: 4px;
    }
  }

  & button {
    margin-bottom: 32px;

    background-color: var(--color-primary);

    color: var(--grey-0);

    font-weight: 500;

    border: 1px solid transparent;
    border-radius: 4px;

    padding: 1px 0;

    cursor: pointer;
  }
`;

export const ButtonFooterModal = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0px;
  width: 100%;

  & button {
    color: var(--grey-0);
    background-color: var(--color-primary-negative);

    padding: 1px 36px;

    width: auto;
  }

  & button + button {
    color: var(--grey-0);
    background-color: var(--grey-1);

    padding: 1px 23px;
  }
`;
