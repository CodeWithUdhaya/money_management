import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/PublicModules/Login";
import Dashboard from "./modules/UserModules/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
