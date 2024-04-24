import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SplashScreen from './pages/SpashScreen';
import Intro from "./pages/Intro";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import VerifyPage from "./pages/VerifyPage";
import CreatePassword from "./pages/CreatePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify-page" element={<VerifyPage />} />
        <Route path="/create-password" element={<CreatePassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
