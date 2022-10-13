import { ToastContainer } from "react-toastify";
import { AuthValidation } from "./context/Auth/AuthContext";
import { DashboardModal } from "./context/Dashboard/DashboardContext";
import { RoutesUrl } from "./Routes";
const App = () => {
  return (
    <>
      <AuthValidation>
        <DashboardModal>
          <RoutesUrl />
        </DashboardModal>
      </AuthValidation>
      <ToastContainer />
    </>
  );
};

export default App;
