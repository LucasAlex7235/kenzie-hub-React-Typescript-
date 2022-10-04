import { Routes, Route, Navigate } from "react-router-dom";
import { LoginUser } from "../../pages/Login";
import { RegisterUser } from "../../pages/Registration";
export const RoutesUrl = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginUser />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
