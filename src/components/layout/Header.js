import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import Search from "../search/Search";
import useHover from "../../hooks/useHover";
import useClickOutSide from "../../hooks/useClickOutSide";
import SearchMobile from "../search/SearchMobile";

const Header = ({
  hiddenMultiple = false,
  hiddenUdemyBusiness = false,
  btnMenu = false,
  between = false,
  widthSearch,
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const { show: showSearchMobile, setShow: setShowSearchMobile } =
    useClickOutSide();
  const { hovered, nodeRef: nodeRefHover } = useHover();
  const { hovered: hoverCategories, nodeRef: nodeRefCategories } = useHover();
  // const [cart, setCart] = useState(false);
  // const handleHover = () => {
  //   setCart(true);
  // };
  // const handleUnHover = () => {
  //   setCart(false);
  // };
  return (
    <header
      className={`header relative flex items-center ${
        between ? "justify-between px-5" : ""
      } justify-center gap-x-5 bg-white shadow-md z-50`}
    >
      {btnMenu && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
          ref={nodeRef}
          onClick={() => setShow(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
      {show && (
        <div className="fixed inset-0 bg-opacity-80 bg-darkudemy">
          <div className="w-[250px] h-screen bg-white border border-slate-200">
            <p className="px-4 py-2 text-purple-700">Log in</p>
            <p className="px-4 py-2 text-purple-700">Sign up</p>
            <ul className="border border-transparent border-y-slate-200 py-2">
              <NavLink
                to="/courses/development/"
                className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700"
              >
                Development
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </NavLink>
              <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                Business
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                Finance & Accounting
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                IT & Software
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                Office Productivity
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
            </ul>
            <div>
              <p className="font-bold py-2 px-4">More from Udemy</p>
              <p className="py-2 px-4">Udemy Business</p>
              <p className="py-2 px-4">Get the app</p>
              <p className="py-2 px-4">Invite friends</p>
              <p className="py-2 px-4">Help</p>
              <Button
                className="w-[150px] flex items-center gap-2 mx-4"
                square="py-2 px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                English
              </Button>
            </div>
            <div
              className="absolute top-5 left-[280px] flex items-center justify-center w-10 h-10 bg-white rounded-full"
              onClick={() => setShow(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      <NavLink to="/">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt=""
          className="w-[90px] h-[70px] cursor-pointer"
        />
      </NavLink>
      {!hiddenMultiple && (
        <div className="py-[24px] cursor-pointer" ref={nodeRefCategories}>
          <p className="hover:text-purple-700">Categories</p>
          {hoverCategories && (
            <div className="absolute left-32 top-[100%] bg-transparent  shadow-xl">
              <div className="flex bg-white border border-slate-200 mt-1">
                <ul className="w-[250px] h-[500px]">
                  <NavLink
                    to="/courses/development/"
                    className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700"
                  >
                    Development
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </NavLink>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                    Business
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                    Finance & Accounting
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                    IT & Software
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                    Office Productivity
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </li>
                </ul>
                <ul className="w-[250px] h-screen border border-transparent border-l-slate-200">
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                    Web Development
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purple-700">
                    Data Science
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
      {!hiddenMultiple && <Search width={widthSearch}></Search>}
      {!hiddenUdemyBusiness && (
        <NavLink
          to="/user/:userId"
          className="cursor-pointer hover:text-purple-700"
        >
          Udemy Business
        </NavLink>
      )}
      {!hiddenMultiple && (
        <NavLink
          to="/teaching"
          className="cursor-pointer hover:text-purple-700"
        >
          Teach on Udemy
        </NavLink>
      )}
      {showSearchMobile && (
        <SearchMobile onClick={() => setShowSearchMobile(false)}></SearchMobile>
      )}
      <div className="flex items-center gap-5">
        {btnMenu && (
          <div onClick={() => setShowSearchMobile(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        )}
        <div
          // onMouseEnter={handleHover}
          // onMouseLeave={handleUnHover}
          ref={nodeRefHover}
        >
          <div className="py-[23px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div
            className={`flex items-end justify-center absolute top-[95%] right-[270px] w-[250px] h-[100px] ${
              hovered ? "" : "hidden"
            } shadow-xl z-10 cursor-pointer`}
          >
            <div className="flex flex-col items-center justify-center h-[92px] bg-white w-full">
              <p>Your cart is empty.</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3899/3899767.png"
                alt=""
                className="w-6 h-6 mt-2"
              />
            </div>
          </div>
        </div>
      </div>
      {!hiddenMultiple && (
        <div className="flex items-center gap-2">
          <Button className="font-bold">Log in</Button>
          <Button
            className="bg-black text-white font-bold border border-black"
            borderNone
          >
            Sign up
          </Button>
          <Button className="" square="py-2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
