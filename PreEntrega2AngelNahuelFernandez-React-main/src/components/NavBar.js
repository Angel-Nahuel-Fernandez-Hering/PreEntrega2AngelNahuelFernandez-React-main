import { useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-semibold  italic text-2xl cursor-pointer flex items-center">
          <span className="text-3xl mr-3">
            <Link onClick={() => setOpen(false)} to={"/"}>
              <img
                className="p-1 rounded-full border border-gray-950"
                src="/favicon.ico"
                alt=""
              />
            </Link>
          </span>
          <Link onClick={() => setOpen(false)} to={"/"}>
            MAAP
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z - [-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
            open ? "top-16 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              onClick={() => setOpen(false)}
              to={"/category/new"}
              className="text-gray-800 hover:text-gray-400 duration-500"
              href=""
            >
              NEW SEASON
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              onClick={() => setOpen(false)}
              to={"/category/man"}
              className="text-gray-800 hover:text-gray-400 duration-500"
              href=""
            >
              MAN
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              onClick={() => setOpen(false)}
              to={"/category/woman"}
              className="text-gray-800 hover:text-gray-400 duration-500"
              href=""
            >
              WOMAN
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              onClick={() => setOpen(false)}
              to={"/category/accessories"}
              className="text-gray-800 hover:text-gray-400 duration-500"
              href=""
            >
              ACCESSORIES
            </Link>
          </li>
          <CartWidget setOpen={() => setOpen(false)} />
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
