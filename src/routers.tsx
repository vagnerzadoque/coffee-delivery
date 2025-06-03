import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import Checkout from "./Pages/Checkout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout/>,
      },
      {
        path: '/order/:orderId/success',
        element: <Success/>,
      },
    ],
  },
])