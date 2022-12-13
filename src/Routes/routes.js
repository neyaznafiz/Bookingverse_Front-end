import { Main } from "Layout";
import { Home, HotelsInfo, HotelsList } from "Pages";
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
        element: <HotelsList />,
        },
        {
            path: "/hotels/:id",
            element: <HotelsInfo />,
          },
    ],
  },
]);

// export default routes;
