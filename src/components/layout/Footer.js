import React from "react";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";

const Footer = ({
  mobileSmaller = "flex justify-between items-start",
  grid = "grid grid-cols-3 gap-32",
  mobile = "px-12 py-8",
}) => {
  return (
    <footer
      className={`flex flex-col justify-between bg-darkudemy w-full ${mobile} text-white`}
    >
      <div className={`mb-10 ${mobileSmaller}`}>
        <div className={`${grid}`}>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
              Udemy Business
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              Teach on Udemy
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Get the app</li>
            <li className="mb-2 hover:underline cursor-pointer">About us</li>
            <li className="mb-2 hover:underline cursor-pointer">Contact us</li>
          </ul>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Careers</li>
            <li className="mb-2 hover:underline cursor-pointer">Blog</li>
            <li className="mb-2 hover:underline cursor-pointer">
              Help and Support
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Affiliate</li>
            <li className="mb-2 hover:underline cursor-pointer">Investors</li>
          </ul>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Terms</li>
            <li className="mb-2 hover:underline cursor-pointer">
              Privacy policy
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              Cookie settings
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Sitemap</li>
            <li className="mb-2 hover:underline cursor-pointer">
              Accessibility statement
            </li>
          </ul>
        </div>
        <Button
          className="flex items-center gap-1 border border-white pr-12 hover:bg-neutral-900"
          borderNone
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
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt=""
            className="w-[90px] cursor-pointer"
          />
        </NavLink>
        <span className="text-xs">© 2023 Udemy, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
