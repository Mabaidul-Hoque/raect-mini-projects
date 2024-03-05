import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExpandingCards from "./pages/ExpandingCards.jsx";
import ProgressSteps from "./pages/ProgressSteps.jsx";
import RotatingNavigation from "./pages/RotatingNavigation.jsx";
import HiddenSearchWidget from "./pages/HiddenSearchWidget.jsx";
import BlurryLoading from "./pages/BlurryLoading.jsx";
import SoundBoard from "./pages/SoundBoard.jsx";
import SplitLandingPage from "./pages/SplitLandingPage.jsx";
import ScrollAnimation from "./pages/ScrollAnimation.jsx";
import FormWave from "./pages/FormWave.jsx";
import DadJokes from "./pages/DadJokes.jsx";

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
      {
        path: "/rotatingNavigation",
        element: <RotatingNavigation />,
      },
      {
        path: "/hiddenSearchWidget",
        element: <HiddenSearchWidget />,
      },
      {
        path: "/blurryLoading",
        element: <BlurryLoading />,
      },
      {
        path: "/scrollAnimation",
        element: <ScrollAnimation />,
      },
      {
        path: "/splitLandingPage",
        element: <SplitLandingPage />,
      },
      {
        path: "/formWave",
        element: <FormWave />,
      },
      {
        path: "/soundBoard",
        element: <SoundBoard />,
      },
      {
        path: "/dadJokes",
        element: <DadJokes />,
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
