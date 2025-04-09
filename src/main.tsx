import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import Header from './Components/Header.tsx';
import Footer from './Components/Footer.tsx';
import About from './Components/About.tsx';

const AppLayout = () => {
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/about",
      element: <About />
    },
  ]

}])

import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
