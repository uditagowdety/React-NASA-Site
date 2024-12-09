import {useState} from 'react'
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {
  const NASA_KEY=import.meta.env.VITE_NASA_API_KEY
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal(){
    setShowModal(!showModal)
  }
  return (
    <>
    <Main/>
    {showModal && (
      <SideBar handleToggleModal={handleToggleModal} />
    )}
    <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
