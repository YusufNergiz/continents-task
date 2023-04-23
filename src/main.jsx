import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './state/store'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Country from './pages/country/Country'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/country/:name",
    element: <Country />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
