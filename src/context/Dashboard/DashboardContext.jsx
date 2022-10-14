import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ApiBase } from "../../service/api";

export const DashboardContext = createContext({});

export const DashboardModal = ({ children }) => {
  const [techs, setTechs] = useState("");
  const [modalAdd, setModalAdd] = useState(null);
  const [editTech, setEditTech] = useState(false);
  const [editDeletData, setEditDeletData] = useState({});
  const [deletTechModal, setDeletTechModal] = useState(false);
  const [editTechModal, setEditTechModal] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("@KenzieHub:");
    const userDash = async () => {
      const response = await ApiBase.get("/profile");

      try {
        const { techs } = response.data;
        setTechs(techs);
      } catch (err) {
        console.error(err);
      }
    };

    token && userDash();
  }, []);

  const editTechApi = async (data) => {
    try {
      const deleteTech = await ApiBase.put(
        `/users/techs/${editDeletData.id}`,
        data
      );
      const response = await ApiBase.get("/profile");

      const { techs: techsProfile } = response.data;

      setTechs(techsProfile);
      setModalAdd(null);
      setEditTechModal(false);

      toast.success("Alterações realizadas com sucesso", {
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
  };

  const deleteTechApi = async () => {
    try {
      const deleteTech = await ApiBase.delete(
        `/users/techs/${editDeletData.id}`
      );
      const response = await ApiBase.get("/profile");

      const { techs: techsProfile } = response.data;

      setTechs(techsProfile);
      setModalAdd(null);
      setDeletTechModal(false);

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
  };

  const onSubmitModal = async (data) => {
    if (deletTechModal) {
      deleteTechApi();
    } else if (editTechModal) {
      editTechApi(data);
    } else {
      try {
        const responseAddTech = await ApiBase.post("/users/techs", data);

        const { data: dataBase } = responseAddTech;

        setTechs([...techs, dataBase]);
        setModalAdd(null);

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

  return (
    <DashboardContext.Provider
      value={{
        techs,
        setTechs,
        onSubmitModal,
        modalAdd,
        setModalAdd,
        editTech,
        setEditTech,
        editDeletData,
        setEditDeletData,
        deletTechModal,
        setDeletTechModal,
        setEditTechModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
