import { Route, Routes } from "react-router-dom"
import Navbar from "./componennts/navbar"



function App():React.ReactNode {

  return (
    
    <div className="flex flex-col">
      <Routes >
        <Navbar />
        <Route path="/" element={<div>hello world</div>} />
      </Routes>
    </div>
    
  )
}

export default App
