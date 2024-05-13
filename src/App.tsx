import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SplashScreen from './pages/SpashScreen';
import Intro from "./pages/Intro";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NotFound />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
