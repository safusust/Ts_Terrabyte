import React, { useContext, useState } from "react";
import { MdMenuOpen, MdClose, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "/icons/logo.png";
import { AuthContext } from "../context/authContext";
import { auth } from "../../firebaseConfig";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useContext(AuthContext);
  const toggleMenu = () => {
    setShowMenu((p) => !p);
  };
  return (
    <div
      className={`flex flex-col md:flex-row py-4 px-10 items-center md:justify-evenly md:sticky top-0 left-0 w-screen ${
        showMenu ? "h-screen fixed" : "h-fit"
      } md:h-fit bg-white border-b-cyan-700 border-b-4 z-50`}
    >
      <div className="left flex items-center justify-center py-5">
        <img src={logo} width={70} height={75} alt="aquaflow" />
        <p className="font-bold text-3xl">Aquaflow BD</p>
      </div>
      <div
        className={`right transition-all ease-out w-full md:w-fit text-center ${
          !showMenu
            ? "h-0 overflow-y-hidden pointer-events-none opacity-0 md:h-full md:opacity-100 md:pointer-events-auto"
            : "h-full mt-10 opacity-100"
        } md:mt-0`}
      >
        <ul
          className="flex flex-col md:flex-row items-center gap-4"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <li className="p-2 w-full md:w-fit py-3 text-xl hover:border-b-cyan-700 border-b border-transparent">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {/* <li className="p-2 w-full md:w-fit py-3 text-xl hover:border-b-cyan-700 border-b border-transparent">
            <NavLink to={"/about"}>About</NavLink>
          </li> */}
          <li className="p-2 w-full md:w-fit py-3 text-xl hover:border-b-cyan-700 border-b border-transparent">
            <NavLink to={"/services"}>Quiz & Article</NavLink>
          </li>
          <li className="p-2 w-full md:w-fit py-3 text-xl hover:border-b-cyan-700 border-b border-transparent">
            <NavLink to={"/reports"}>Report</NavLink>
          </li>
          <li className="p-2 w-full md:w-fit py-3 text-xl">
            <ul className="grid gap-4 w-full font-medium text-xl">
              <li className="text-white bg-cyan-600 rounded-full w-full px-5">
                {!user ? (
                  <NavLink
                    className={"removeBorder"}
                    to={"/account/login?type=public"}
                  >
                    Login
                  </NavLink>
                ) : (
                  <button
                    type="button"
                    className="flex justify-center items-center gap-2 mx-auto"
                    onClick={() => {
                      auth.signOut().then(() => {
                        window.location.href("/");
                      });
                    }}
                  >
                    {user?.displayName} <MdLogout />
                  </button>
                )}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="md:hidden absolute top-10 right-10">
        <button
          className="bg-white rounded-full px-4 py-2 shadow-md hover:bg-cyan-700 hover:text-white"
          onClick={toggleMenu}
        >
          {showMenu ? <MdClose /> : <MdMenuOpen />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
