import styled from "styled-components";

export const HeaderTodo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  & button {
    background-color: var(--grey-3);
    color: var(--grey-0);

    font-weight: 700;
    font-size: 18px;

    height: 32px;
    width: 32px;

    border: 1px solid transparent;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: 0.4s;

    :hover {
      transition: 0.4s;

      opacity: 0.7;
    }
  }
`;

export const UlTodo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  height: 328px;

  @media (min-width: 768px) {
    height: 408px;
  }

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: var(--grey-0);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    -webkit-box-shadow: inset 0 0 7px var(--grey-1);
  }

  border-radius: 4px;

  padding: 23px 22px;

  background-color: var(--grey-3);

  .animate__fadeIn {
    animation-duration: 2s;
  }

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 4px;

    padding: 13px 22px;

    background-color: var(--grey-4);
    color: var(--grey-0);

    font-weight: 700;

    cursor: pointer;

    transition: 0.4s;

    :hover {
      background-color: var(--black);
      transition: 0.4s;
    }

    & span {
      color: var(--grey-1);

      font-weight: 400;
      font-size: var(--title2);
    }
  }
`;
