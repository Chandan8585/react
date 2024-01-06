import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/body/Body';
import About from './pages/about/About';
import ErrorPage from './pages/error/ErrorPage';
import IndividualHotel from './pages/individualHotel/IndividualHotel';
const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        element: <Body/>,
      },
      // {
      //   path: "/about",
      //   element: <About/>,
      // },
      {
        path: "/hotels/:_id",
        element: <IndividualHotel/>,
      }
    ]
  },
])  
root.render(<RouterProvider router= {appRouter} />);

