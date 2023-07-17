import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"


//Layouts imports
import RootLayout from './layouts/RootLayout'

//Pages imports
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Route>
  )
)



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
