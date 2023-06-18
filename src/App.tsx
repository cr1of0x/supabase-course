import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MessageBoard from './MessageBoard'
import AllPosts from './AllPosts'
import PostView from './PostView'
import Welcome from './Welcome'
import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <MessageBoard/>,
          children: [
            {
              path: ':pageNumber',
              element: <AllPosts/>
            },
            {
              path: 'post/:postId',
              element: <PostView/>
            }
          ]
        }
      ]
    },
    {
      path: 'welcome',
      element: <Welcome/>
    }
  ])

  return (
   <RouterProvider router={router}/>
  )
}

export default App

const Layout = () => {
  return (
      <>
      <NavBar/>
      <Outlet/>
      </>
  )
}