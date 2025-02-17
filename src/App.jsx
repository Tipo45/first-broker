import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Useraccount from "./Pages/Useraccount/Useraccount";
import Clientlogin from "./Pages/Login/Clientlogin";
import FirstDisplay from "./Pages/FD/FirstDisplay";
import Registration from "./Pages/Login/Registration";
import Accountinformation from "./Components/UserAccount/Accountinformation";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstDisplay />} />
        <Route path="/login" element={<Clientlogin />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user_account/:activepage" element={<Useraccount />} />
        <Route path="/user_account/account-information" element={<Accountinformation />} />


        <Route path="*" element />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
