
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { myContext } from "./Context";
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from "./Components/NavBar/NavBar";
import './globalStyles.css'
import { IUser } from "./types/maintypes";

function App() {
  const userObject = useContext(myContext) as IUser;
  console.log("userObject", userObject)

  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
