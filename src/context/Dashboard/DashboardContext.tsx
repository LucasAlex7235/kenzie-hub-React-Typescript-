import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ApiBase } from "../../service/api";

interface iDashboardModalProps {
  children: React.ReactNode;
}

interface iTechs {
  id: string;
  title: string;
  status: string;
}

interface iEditDeletData {
  id: string;
  title: string;
  status: string;
}

interface iEditApiDataBase {
  status: string;
}

interface iAddTechDataBase {
  title: string;
  status: string;
}

interface iResponseApi {
  techs: iTechs[];
}

interface iDashboardContext {
  techs: iTechs[];
  setTechs: React.Dispatch<React.SetStateAction<iTechs[]>>;
  onSubmitModal: (data: iAddTechDataBase) => Promise<void>;
  modalAdd: boolean | null;
  setModalAdd: React.Dispatch<React.SetStateAction<boolean | null>>;
  editTech: boolean;
  setEditTech: React.Dispatch<React.SetStateAction<boolean>>;
  editDeletData: iEditDeletData;
  setEditDeletData: React.Dispatch<React.SetStateAction<iEditDeletData>>;
  deletTechModal: boolean;
  setDeletTechModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTechModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardContext = createContext({} as iDashboardContext);

export const DashboardModal = ({ children }: iDashboardModalProps) => {
  const [techs, setTechs] = useState<iTechs[]>([]);
  const [modalAdd, setModalAdd] = useState<null | boolean>(null);
  const [editTech, setEditTech] = useState(false);
  const [editDeletData, setEditDeletData] = useState<iEditDeletData>(
    {} as iEditDeletData
  );
  const [deletTechModal, setDeletTechModal] = useState<boolean>(false);
  const [editTechModal, setEditTechModal] = useState<boolean>(false);

  useEffect(() => {
    const token = window.localStorage.getItem("@KenzieHub:");
    const userDash = async () => {
      const response = await ApiBase.get<iResponseApi>("/profile");

      try {
        const { techs } = response.data;
        setTechs(techs);
      } catch (err) {
        console.error(err);
      }
    };

    token && userDash();
  }, []);

  const editTechApi = async (data: iEditApiDataBase) => {
    try {
      await ApiBase.put(`/users/techs/${editDeletData.id}`, data);

      const response = await ApiBase.get<iResponseApi>("/profile");

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
      await ApiBase.delete(`/users/techs/${editDeletData.id}`);

      const response = await ApiBase.get<iResponseApi>("/profile");

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

  const onSubmitModal = async (data: iAddTechDataBase) => {
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
