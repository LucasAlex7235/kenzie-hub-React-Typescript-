import { createContext, useEffect, useState } from "react";
import { ApiBase } from "../../service/api";

export const DashboardContext = createContext({});

export const DashboardModal = ({ children }) => {
  const [techs, setTechs] = useState("");
  const [editTech, setEditTech] = useState(false);
  const [editDeletData, setEditDeletData] = useState({});
  const [deletTechApi, setDeletTechApi] = useState(false);

  useEffect(() => {
    const userDash = async () => {
      const response = await ApiBase.get("/profile");

      const { techs } = response.data;
      setTechs(techs);
    };

    userDash();
  }, []);

  const editTechApi = () => {};

  const deleteTechApi = () => {};

  return (
    <DashboardContext.Provider
      value={{
        techs,
        setTechs,
        editTech,
        setEditTech,
        editDeletData,
        setEditDeletData,
        deletTechApi,
        setDeletTechApi,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { ApiBase } from "../../service/api";

// export const AuthContext = createContext({});

// export const AuthValidation = ({ children }) => {
//   const [eye, setEye] = useState(true);
//   const [eyeConfirm, setEyeConfirm] = useState(true);

//   const eyePassword = () => {
//     eye ? setEye(false) : setEye(true);
//   };
//   const eyePasswordConfirm = () => {
//     eyeConfirm ? setEyeConfirm(false) : setEyeConfirm(true);
//   };

//   const navigate = useNavigate();

//   const onSubmitForm = (data) => {
//     ApiBase.post("/sessions", data)
//       .then((res) => {
//         setTimeout(() => {
//           navigate("/dashboard");
//           window.location.reload();
//         }, 200);
//         window.localStorage.setItem("@KenzieHub:", res.data.token);
//       })
//       .catch((err) => {
//         err &&
//           toast.error("Email ou senha incorretos!", {
//             position: "top-right",
//             autoClose: 1500,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//       });
//   };

//   return (
//     <AuthContext.Provider
//       value={{ eye, eyePassword, eyeConfirm, eyePasswordConfirm, onSubmitForm }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
