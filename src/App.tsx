import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
    <Navbar/>
    <Home/>
    <Footer/>

  </>
  )
}

export default App;
