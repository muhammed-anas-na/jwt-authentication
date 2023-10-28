import Header from "./Components/Header"
import { Outlet } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header/>
      <ToastContainer/>
      <Outlet/>
    </div>
  )
}

export default App
