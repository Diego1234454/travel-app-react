import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
