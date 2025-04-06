import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  AddJob,
  Admin,
  AllJobs, DashbordLayout, DeleteJob, EditJob, Error, HomeLayout, Landing, Login, Profile, Register, Stars
} from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <DashbordLayout />
      },
    ]
  },



])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App