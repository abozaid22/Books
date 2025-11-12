import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import Home from './Pages/Home/Home'
import Cart from './Components/Cart/Cart'

function App() {
  
  const router = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path:'Cart', element: <Cart/>},
      {path: '*', element: <NotFound/>}
    ]},
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
