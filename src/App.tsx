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
// import { Nopage } from "./pages/Nopage";
import { PersonalInfo } from "./pages/PersonalInfo";
import { CreatePin } from "./pages/CreatePin";
import NotFound from "./pages/NotFound";
import SwitchDevice from "./pages/SwitchDevice";

function App() {
  return (
    <ContextApi>
      <BrowserRouter>
        <SwitchDevice />
        <main className="md:hidden">
          <Routes>
            <Route path="/" element={<SplashScreen />}></Route>
            <Route path="/intro" element={<Intro />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up">
              <Route index element={<SignUp />}></Route>
              <Route path="verification" element={<Verification />} />
            </Route>
            <Route path="/sign-up/personalinfo" element={<PersonalInfo />} />
            <Route path="/rema" element={<Remark show={false} setshow={function (): void {
              throw new Error("Function not implemented.");
            }} />} />
            <Route path="/sign-up/personalinfo/createpin" element={<CreatePin />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ContextApi>

  )
}

export default App
