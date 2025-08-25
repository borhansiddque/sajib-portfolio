import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Testimonials from "../Pages/Testimonials";
import NotFound from "../Pages/NotFound";

let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'services',
        Component: Services
      },
      {
        path: 'testimonials',
        Component: Testimonials
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: "/*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
