import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login';
import Push from './Pages/Push';
import Layout from "./Pages/Layout"

// export default function App() {
//   return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Push />} />
    //       <Route path="login" element={<Login />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = ReactDOM.render(<MyApp />, document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Push />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// root.render(<MyApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
