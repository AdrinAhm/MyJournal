
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Auth from "./Auth"
import Push from "./Push"



function App() {

  // const navigate = useNavigate();

  // function navigateToPush(event) {

  //   navigate('/push');
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="push" element={<Push/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
