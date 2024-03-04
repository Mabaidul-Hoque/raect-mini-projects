import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExpandingCards from "./pages/ExpandingCards.jsx";
import ProgressSteps from "./pages/ProgressSteps.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/expandingCards",
        element: <ExpandingCards />,
      },
      {
        path: "/progressSteps",
        element: <ProgressSteps />,
      },
    ],
  },
]);

const Routes = () => {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
};

export default Routes;
