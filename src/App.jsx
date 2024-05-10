import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ListCoworkingsPage from "./pages/ListCoworkingsPage";
import DetailsCoworkingsPage from "./pages/DetailsCoworkingsPage";
import LoginFormPage from "./pages/LoginFormPage";
import AdminListCoworkingsPage from "./pages/admin/AdminCoworkingsListPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminCreateCoworkingsPage from "./pages/admin/AdminCreateCoworkingsPage";
import AdminUpdateCoworkingsPage from "./pages/admin/AdminUpdateCoworkingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<ListCoworkingsPage/>} />
        <Route path="/coworkings-details/:coworkingId" element={<DetailsCoworkingsPage/>} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/admin/coworkings" element={<AdminListCoworkingsPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/coworkings/create" element={<AdminCreateCoworkingsPage />} />
        <Route path="/admin/coworkings/:id/update" element={<AdminUpdateCoworkingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
