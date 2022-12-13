import { Main } from "Layout";
import { Home, List } from "Pages";
// import { Home, List } from "Pages";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hotels",
        element: <List />,
      },
    ],
  },
]);

// export default routes;
