import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Dashboard from './Layout/Dashboard';
import UserProfile from './Components/Dashboard/UserProfile';
import TodoList from './Components/Dashboard/TodoList';
import Ongoing from './Components/Dashboard/Ongoing';
import Completed from './Components/Dashboard/Completed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/userProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/dashboard/todo",
        element: <TodoList></TodoList>
      },
      {
        path: "/dashboard/ongoing",
        element: <Ongoing></Ongoing>
      },
      {
        path: "/dashboard/completed",
        element: <Completed></Completed>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
