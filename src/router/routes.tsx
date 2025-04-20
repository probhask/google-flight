import { createBrowserRouter, redirect } from "react-router-dom";

import App from "@/App";
import NotFound from "@/components/404NotFound";
import ROUTES from "@/constants/pageRoutes";
import { Flights } from "@/pages";

type PageKey = keyof typeof ROUTES;

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () => {
          return redirect(ROUTES.FLIGHTS);
        },
      },
      {
        path: ROUTES.FLIGHTS,
        element: <Flights />,
      },
      ...(Object.keys(ROUTES) as PageKey[])
        .filter((key) => ROUTES[key] !== ROUTES.FLIGHTS)
        .map((key) => ({
          path: ROUTES[key],
          element: <div>Page is not active yet</div>,
        })),
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
