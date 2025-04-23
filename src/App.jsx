import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Create from "./components/Create"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Login from './components/Login'
import ProtectedRoutes from "./common/ProtectedRoutes"

  
function App() {
 
  return <>
  <div id="wrapper">
  <BrowserRouter>
   <Routes>
    <Route path="/dashboard"  element = {<><Sidebar/><ProtectedRoutes><Dashboard/></ProtectedRoutes> </> }   />
    <Route path="/create"  element={  <Create/>}  />
    <Route path="/login"  element={<Login/>} />
    <Route path="/" element={<Navigate  to={'/login'} />}/>
   </Routes>
  </BrowserRouter>
  </div>
  </>
}

export default App
