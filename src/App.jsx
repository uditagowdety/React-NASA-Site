import {useState} from 'react'
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
    <Main/>
    {showModal && (<SideBar/>)}
    <Footer/>
    </>
  )
}

export default App
