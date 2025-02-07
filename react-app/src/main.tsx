import ReactDOM from "react-dom/client"; 
import React from 'react'
import Counter from './components/Counter'
import './index.css'
import App from './App.js'
import { createBrowserRouter, RouterProvider } from 'react-router'
import store from './store'
import { Provider } from 'react-redux'
import Users from './components/Users'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Users /> },
      { path: '/counter', element: <Counter />},
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);