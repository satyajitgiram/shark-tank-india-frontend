import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Tables from "./pages/tables/Tables";
import { useSelector } from "react-redux";
import AddPitch from "./pages/add-pitch/AddPitch";
import RequestPitch from "./pages/request-pitch/RequestPitch";
import Cards from './pages/cards/cards'
import Sharks from './pages/sharks/sharks'
import SharkDetail from "./pages/sharks/sharkDetail";
import PitchTable from "./pages/piches/PitchTable";
import PitchDetail from "./pages/piches/PitchDetail";


function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
            <Route path="table" element={<Tables />}  />
            <Route path="add-pitch" element={<AddPitch />}  />
            <Route path="request-pitch" element={<RequestPitch />}  />
            <Route path="cards" element={<Cards />}  />
            <Route path="sharks" element={<Sharks />}  />
            <Route path="shark/:id" element={<SharkDetail/>} />
            <Route path="pitches" element={<PitchTable/>} />
            <Route path="pitches/:id" element={<PitchDetail/>} />
            <Route path="dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
          </Route>
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
