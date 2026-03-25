import './App.css'
import Main from './component/Main'
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import Registration from './component/Registration'
// import FetchData from './component/FetchData'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>

      <h2 className="text-center mt-3">Student Registration App</h2>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        {/* <Route path="/fetchdata" element={<FetchData />} /> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App