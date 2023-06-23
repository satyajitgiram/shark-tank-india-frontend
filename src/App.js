import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import AddPitch from "./pages/add-pitch/AddPitch";
import RequestPitch from "./pages/request-pitch/RequestPitch";
import Sharks from './pages/sharks/sharks'
import SharkDetail from "./pages/sharks-detail/shark-detail";
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
            <Route path="add-pitch" element={access_token ? <AddPitch /> : <Navigate to="/login" />} />  />
            <Route path="request-pitch" element={access_token ? <RequestPitch /> : <Navigate to="/login" />} />
            <Route path="sharks" element={<Sharks />}  />
            <Route path="shark/:id" element={<SharkDetail/>} />
            <Route path="pitches" element={<PitchTable/>} />
            <Route path="pitch/:id" element={<PitchDetail/>} />
            <Route path="dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
          </Route>
          <Route path="*" element={<h1 className='text-center'>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
