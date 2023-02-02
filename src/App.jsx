
import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Error404 from './pages/error404'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home name="James Dhenvir" profession="FullStack React Developer"/>} />
          <Route path="/profile" element={<Profile name="James Dhenvir" address="Iligan City" profession="FullStack React Developer"/>} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
