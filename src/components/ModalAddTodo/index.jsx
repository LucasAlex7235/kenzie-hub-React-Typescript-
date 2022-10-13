import { ButtonFooterModal, Form, Modal, ModalBackground } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ApiBase } from "../../service/api";
import { toast, ToastContainer } from "react-toastify";
import { DashboardContext } from "../../context/Dashboard/DashboardContext";
import { useContext, useState } from "react";

export const ModalAddList = ({ setModal }) => {
  const {
    techs,
    setTechs,
    editTech,
    editDeletData,
    deletTechApi,
    setDeletTechApi,
  } = useContext(DashboardContext);

  const [modalError, setModalError] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmitModal = async (data) => {
    if (deletTechApi) {
      try {
        const deleteTech = await ApiBase.delete(
          `/users/techs/${editDeletData.id}`
        );
        const response = await ApiBase.get("/profile");

        const { techs: techsProfile } = response.data;

        setTechs(techsProfile);
        setModal(null);
        setDeletTechApi(false);

        toast.success("Tecnologia deletada com sucesso", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const responseAddTech = await ApiBase.post("/users/techs", data);

        const { data: dataBase } = responseAddTech;

        setTechs([...techs, dataBase]);
        setModal(null);

        toast.success("Tecnologia cadastrada com sucesso", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (err) {
        toast.error
          ? toast.error("Adicione um nome", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
          : console.error(err);
      }
    }
  };

  const closeModal = (e) => {
    e.target.id && setModal(null);
  };
  return (
    <ModalBackground id="backgroudModal" onClick={closeModal}>
      <Modal>
        <header>
          <h3>Cadastrar Tecnologia</h3>
          <AiOutlineClose
            onClick={() => {
              setModal(null);
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
              <button type="submit">Salvar alterações</button>
              <button
                type="submit"
                onClick={() => {
                  setDeletTechApi(true);
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
