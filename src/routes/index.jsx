import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import App from './Home/App.jsx'
import About from "./WhatIs/index.jsx";
import HowItWorks from "./HowItWorks/index.jsx";
import NavigationTypes from "./NavigationTypes/index.jsx";
import RoutesComponent from "./Routes/index.jsx";
import SimpleRoutes from "./Routes/SimpleRoutes/index.jsx";
import DinamicRoutes from "./Routes/DynamicRoutes/index.jsx";
import NestedRoutes from "./Routes/NestedRoutes/index.jsx";
import Nested1 from "./Routes/NestedRoutes/nested1/index.jsx";
import FirstNestedView from "./Routes/NestedRoutes/first/index.jsx";
import PrivateRoute from "./Routes/PrivateRoutes/index.jsx";
import Login from "./Login/index.jsx";
import PrivateRouteExplanation from "./Routes/PrivateRoutes/privateRouteExplanation.jsx";
import NavigateExplanation from "./NavigationTypes/Navigate/index.jsx";
import LinkExplanation from "./NavigationTypes/Link/index.jsx";
import NavLinkExplanation from "./NavigationTypes/NavLink/index.jsx";
import UseNavigateExplanation from "./NavigationTypes/useNavigate/index.jsx";
import UseLocationExplanation from "./NavigationTypes/UseLocation/index.jsx";

export const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/start",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/howitworks",
    element: <HowItWorks />,
  },
  {
    path: "/routes",
    element: <RoutesComponent />,
    children: [
      {
        path: "",
        element: <SimpleRoutes />
      },
      {
        path: "dinamic/:id",
        element: <DinamicRoutes />
      },
      {
        path: "nested",
        element: <NestedRoutes />,
        children: [
          {
            path: "",
            element: <FirstNestedView />
          },
          {
            path: "example1",
            element: <Nested1 />,
            children: [
              {
                path: "example2",
                element: <div>Ejemplo 2</div>
              }
            ]
          },
        ]
      },
      {
        path: "private",
        element: <PrivateRouteExplanation />,
      }
    ]
  },
  {
    path: '/navigationtypes',
    element: <NavigationTypes />,
    children: [
      {
        path: 'navigate/:id',
        element: <NavigateExplanation />,
      },
      {
        path: 'navigate',
        element: <NavigateExplanation />,
      },
      {
        path: 'link',
        element: <LinkExplanation />,
      },
      {
        path: 'link/:id',
        element: <LinkExplanation />,
      },
      {
        path: 'navLink',
        element: <NavLinkExplanation />,
      },
      {
        path: 'navLink/:id',
        element: <NavLinkExplanation />,
      },
      {
        path: 'useNavigate',
        element: <UseNavigateExplanation />,
      },
      {
        path: 'useLocation',
        element: <UseLocationExplanation />,
      },

    ]
  },
  {
    path: 'thanks',
    element: <h1>¡Gracias por su atención!
      ¿Preguntas?
    </h1>,

  }

])
