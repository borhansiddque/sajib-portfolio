import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold ${isActive && "text-green-600"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `font-semibold ${isActive && "text-green-600"}`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/services"}
          className={({ isActive }) =>
            `font-semibold ${isActive && "text-green-600"}`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/testimonials"}
          className={({ isActive }) =>
            `font-semibold ${isActive && "text-green-600"}`
          }
        >
          Testimonials
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `font-semibold ${isActive && "text-green-600"}`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-[1500px] mx-auto p-5 flex justify-between items-center">
      <div className="">
        <Link to={"/"} className="font-bold text-3xl relative">
          <p className="">Oahidul Islam</p>
          <div className="bg-green-500 w-2 h-2 rounded-full absolute bottom-1.5 -right-3.5 animate-ping"></div>
        </Link>
      </div>
      <div className="">
        <ul className="flex items-center gap-5">{links}</ul>
      </div>
      <div className="">
        <Button>Contact Me</Button>
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AlignJustify } from "lucide-react";

// const Navbar = () => {
  
//   return (
//     <nav className="">
//       <div className="navbar max-w-6xl mx-auto">
//         <div className="navbar-start  gap-4 w-fit">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className=" lg:hidden">
//               <AlignJustify size={25} />
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               {links}
//             </ul>
//           </div>
//           <Link to={"/"} className="font-bold text-3xl relative">
//             <p className="">Oahidul Islam</p>
//             <div className="bg-green-500 w-2 h-2 rounded-full absolute bottom-1.5 -right-3.5 animate-ping"></div>
//           </Link>
//         </div>
//         <div className="navbar-end gap-10 flex-1">
//           <div className="hidden lg:flex">
//             <ul className="flex items-center gap-5">{links}</ul>
//           </div>
//           <a
//             href="https://3s-soft.com/"
//             target="_blank"
//             className="inline-block bg-green-600 text-white py-2 px-5 rounded-md hover:bg-green-700 transition font-medium"
//           >
//             3s-Soft
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
