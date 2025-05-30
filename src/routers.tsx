import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <>Home</>,
      },
      {
        path: '/cart',
        element: <>Cart</>,
      },
      {
        path: '/order/:orderId/success',
        element: <>Sucess</>,
      },
    ],
  },
])