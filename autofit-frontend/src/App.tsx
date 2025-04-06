import { BrowserRouter, Route, Routes } from "react-router-dom";
import '@fontsource/poppins';
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import { AnimatePresence } from "framer-motion";
import ForgotPassword from "@/features/auth/Pages/ForgotPasswordPage";

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path ='/login' element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
