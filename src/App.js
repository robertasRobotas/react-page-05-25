import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import RealEstate from "./pages/realEstate/RealEstate";
import Contacts from "./pages/contacts/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/estate" element={<RealEstate />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
