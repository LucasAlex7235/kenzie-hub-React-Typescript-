import { SectionContent } from "../Dashboard/style";
import { HeaderTodo, UlTodo } from "./style";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ModalAddList } from "../../components/ModalAddTodo";
import { useContext, useState } from "react";
import { DashboardContext } from "../../context/Dashboard/DashboardContext";
import "animate.css";

export const TodoListProgramming = () => {
  const { techs, setEditTech, setEditDeletData, modalAdd, setModalAdd } =
    useContext(DashboardContext);

  const onModalAdd = () => {
    setEditTech(false);
    modalAdd ? setModalAdd(null) : setModalAdd(true);
  };

  const editModal = () => {
    setEditTech(true);
    setModalAdd(true);
  };
  return (
    <SectionContent>
      <HeaderTodo>
        <h3>Tecnologias</h3>
        <button onClick={onModalAdd}>+</button>
      </HeaderTodo>
      <UlTodo>
        {modalAdd && <ModalAddList />}
        {techs &&
          techs.map((tech) => {
            return (
              <li
                class="animate__animated animate__fadeIn"
                onClick={() => {
                  editModal();
                  setEditDeletData(tech);
                }}
                key={tech.id}
              >
                {tech.title}

                <span>{tech.status}</span>
              </li>
            );
          })}
      </UlTodo>
    </SectionContent>
  );
};
