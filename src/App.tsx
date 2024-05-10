import { Outlet, Route, Routes } from "react-router-dom"
import Navbar from "./componennts/navbar"
import HomePage from "./pages/home"
import AllNFTPage from "./pages/all-nft"
import TeamPage from "./pages/team"
import TearmsPage from "./pages/tearms"
import ContactsPage from "./pages/contact"



function App():React.ReactNode {

  return (

    <Routes >
      <Route path="/" element={<OutLayer />}>
        <Route index path="/" element={<HomePage />} />
        <Route  path="/all-nfts" element={<AllNFTPage />} />
        <Route  path="/team" element={<TeamPage />} />
        <Route  path="/terms" element={<TearmsPage />} />
        <Route  path="/contact" element={<ContactsPage />} />
      </Route>
    </Routes> 
  )
}


function OutLayer() {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default App
