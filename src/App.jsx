import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Clientlogin from "./Login/Clientlogin";
import FirstDisplay from "./FD/FirstDisplay";
import Registration from "./Login/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstDisplay />} />
        <Route path="/login" element={<Clientlogin />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="*" element />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
