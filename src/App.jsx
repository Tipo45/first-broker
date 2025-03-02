import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Useraccount from "./Pages/Useraccount/Useraccount";
import Clientlogin from "./Pages/Login/Clientlogin";
import FirstDisplay from "./Pages/FD/FirstDisplay";
import Registration from "./Pages/Login/Registration";
import Accountinformation from "./Components/UserAccount/Accountinformation";
import Namesettings from "./Components/UserAccount/Namesettings";
import Usernamesettings from "./Components/UserAccount/Usernamesettings";
import Changeofpassword from "./Components/UserAccount/Changeofpassword";
import Verificationupload from "./Components/UserAccount/Verificationupload";
import Homelinks from "./Pages/Frontpagelinks/Homelinks";
import Aboutdevs from "./Pages/Frontpagelinks/Aboutdevs";
import Investpage from "./Pages/Frontpagelinks/Investpage";
import Nopage from "./Pages/404";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstDisplay />} />
        <Route path="/login" element={<Clientlogin />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user_account/:activepage" element={<Useraccount />} />
        <Route path="/user_account/account-information" element={<Accountinformation />} />
        <Route path="/user_account/account-information/user-account/change-name" element={<Namesettings />} />
        <Route path="/user_account/account-information/user-account/change-username" element={<Usernamesettings />} />
        <Route path="/user_account/account-information/user-account/change-password" element={<Changeofpassword />} />
        <Route path="/user_account/account-information/user-account/ID-upload" element={<Verificationupload />} />
        <Route path="/invest/:segmentpage" element={<Investpage />} />
        <Route path="/about-devs/:sectionpage" element={<Aboutdevs />} />
        <Route path="/about-us/:accessedpage" element={<Homelinks />} />



        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
