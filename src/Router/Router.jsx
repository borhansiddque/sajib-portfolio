import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Testimonials from "../Pages/Testimonials";
import Resume from "../Pages/Resume";

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
        path: 'resume',
        Component: Resume
      },
      {
        path: 'contact',
        Component: Contact
      },
    ],
  },
]);

export default router;
