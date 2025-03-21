import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Useraccount from "./Pages/Useraccount/Useraccount";
import Clientlogin from "./Pages/Login/Clientlogin";
import FirstDisplay from "./Pages/FD/FirstDisplay";
import Registration from "./Pages/Login/Registration";
import Accountinformation from "./Components/UserAccount/Accountinformation";
import Homelinks from "./Pages/Frontpagelinks/Homelinks";
import Aboutdevs from "./Pages/Frontpagelinks/Aboutdevs";
import Investpage from "./Pages/Frontpagelinks/Investpage";
import Nopage from "./Pages/404";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Edit from "./Pages/Useraccount/Edit";



function App() {

  const queryClient = new QueryClient();

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstDisplay />} />
        <Route path="/login" element={<Clientlogin />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user_account/:activepage" element={<Useraccount />} />
        <Route path="/user_account/account-information" element={<Accountinformation />} />
        <Route path="/user_account/account-information/:editpage" element={<Edit />} />
        <Route path="/invest/:segmentpage" element={<Investpage />} />
        <Route path="/about-devs/:sectionpage" element={<Aboutdevs />} />
        <Route path="/about-us/:accessedpage" element={<Homelinks />} />



        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
    
    </QueryClientProvider>
  );
}

export default App;
