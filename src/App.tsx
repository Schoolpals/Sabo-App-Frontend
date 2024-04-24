import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SplashScreen from './pages/SpashScreen';
import { Intro } from "./pages/Intro";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { ContextApi } from "./Provider/ContextApi";
import { Verification } from "./pages/Verification";
import { Remark } from "./pages/Remark";
import { Nopage } from "./pages/Nopage";
import { PersonalInfo } from "./pages/PersonalInfo";

function App() {
  return (
    <ContextApi>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up">
            <Route index element={<SignUp/>}></Route>
            <Route path="verification" element={<Verification/>}/>
          </Route>
          <Route path="/sign-up/personalinfo" element={<PersonalInfo/>}/>
          <Route path="/rema" element={<Remark show={false} setshow={function (show: boolean): void {
            throw new Error("Function not implemented.");
          } } />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Nopage/>}/>
        </Routes>
      </BrowserRouter>
    </ContextApi>
  )
}

export default App
