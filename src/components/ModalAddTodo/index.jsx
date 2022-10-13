import { ButtonFooterModal, Form, Modal, ModalBackground } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { DashboardContext } from "../../context/Dashboard/DashboardContext";
import { useContext, useState } from "react";
import "animate.css";

export const ModalAddList = () => {
  const {
    techs,
    setTechs,
    editTech,
    onSubmitModal,
    editDeletData,
    setDeletTechModal,
    setEditTechModal,
    setModalAdd,
  } = useContext(DashboardContext);

  const [modalError, setModalError] = useState(false);

  const { register, handleSubmit } = useForm();

  const closeModal = (e) => {
    e.target.id && setModalAdd(null);
  };
  return (
    <ModalBackground id="backgroudModal" onClick={closeModal}>
      <Modal>
        <header>
          <h3>Cadastrar Tecnologia</h3>
          <AiOutlineClose
            onClick={() => {
              setModalAdd(null);
            }}
          />
        </header>

        <Form onSubmit={handleSubmit(onSubmitModal)}>
          <label>
            {editTech ? (
              <>
                Nome do projeto
                <div>
                  <p>{editDeletData.title}</p>
                </div>
              </>
            ) : (
              <>
                Nome
                <input
                  type="text"
                  placeholder="TypeScript"
                  {...register("title")}
                />
              </>
            )}
          </label>

          <label>
            Selecionar status
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </label>
          {editTech ? (
            <ButtonFooterModal>
              <button
                type="submit"
                onClick={() => {
                  setEditTechModal(true);
                }}
              >
                Salvar alterações
              </button>
              <button
                type="submit"
                onClick={() => {
                  setDeletTechModal(true);
                }}
              >
                Excluir
              </button>
            </ButtonFooterModal>
          ) : (
            <button type="submit">Cadastrar Tecnologia</button>
          )}
        </Form>
        <ToastContainer />
      </Modal>
    </ModalBackground>
  );
};
