import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login.jsx';
import Acceuil from './acceuil.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="login/acceuil" element={<Acceuil />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App