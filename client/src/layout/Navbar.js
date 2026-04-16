import React, { useEffect, useState } from "react";
import "./navbar.css";
import { RiHomeSmileLine } from "react-icons/ri";
import {
  MdDiamond,
  MdOutlineAccountBox,
  MdOutlineLocalActivity,
} from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ServiceImg from "../assets/icon_sevice.png";
import WheelSpinImg from "../assets/wheelspin.8ec6f252ec6ce93fb9fd.8ec6f252ec6ce93fb9fd.png";
import dragonImg from "../assets/changlong.de82cd2c25a08dc22ccd.png";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("/");

  const { userInfo } = useSelector((state) => state.auth);

  const naviaget = useNavigate();
  const handleClick = (item) => {
    setActiveItem(item);
    naviaget(`/${item}`);
  };
  let location = useLocation();
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [activeItem]);
  return (
    <>
      <div
        style={{
          position: "fixed",
          // left: position.x,
          // top: position.y,
          zIndex: 500,
          // cursor: dragging ? "grabbing" : "pointer",
          // transition: dragging ? "none" : "all 0.2s ease-out",
        }}
        // onMouseDown={handleStartDragging}
        // onTouchStart={handleStartDragging}
        // onMouseMove={(e) => e.preventDefault()}
        className="flex flex-col right-0 bottom-20"
      >
        {/* <div
          onClick={() => handleClick("WheelSpin")}
          style={{ display: "inline-block" }}
        >
          <img src={WheelSpinImg} alt="Service" className="w-14  " />
        </div> */}
        <div style={{ display: "inline-block" }}>
          <img src={dragonImg} alt="Service" className="w-14 mb-2" />
        </div>

        {userInfo ? (
          <Link
            to={`https://h5-worker-7lottersupport.allinonedemo.live?token=${Cookies.get(
              "auth"
            )}`}
            style={{ display: "inline-block" }}
          >
            <img src={ServiceImg} alt="Service" className="w-14" />
          </Link>
        ) : (
          <div
            onClick={() => handleClick("main/CustomerService")}
            style={{ display: "inline-block" }}
          >
            <img src={ServiceImg} alt="Service" className="w-14" />
          </div>
        )}
      </div>
      <div className="navbar-section">
        <div
          className={`flex justify-center items-center flex-col p-2 pb-5 ${
            activeItem === "/" || activeItem === "//" ? "active" : ""
          }`}
          onClick={() => handleClick("/")}
        >
          <svg
            data-v-fb80cf49
            className={`size-6 ${
              activeItem === "/" || activeItem === "//"
                ? "svg-icon"
                : "svg-icons"
            }`}
          >
            <use
              xlinkHref={
                activeItem === "/" || activeItem === "//"
                  ? "#icon-p3_home_a" // active
                  : "#icon-p3_home" // inactive
              }
            />
          </svg>

          <span
            className={`text-[11px] font-medium ${
              activeItem === "/" || activeItem === "//"
                ? "text-[#f95959]"
                : "text-gray-600"
            }`}
          >
            Home
          </span>
        </div>

        <div
          className={`flex justify-center items-center flex-col p-2 pb-5 ${
            activeItem === "/activity" ? "active" : ""
          }`}
          onClick={() => handleClick("activity")}
        >
          <svg
            data-v-fb80cf49
            className={
              activeItem === "/activity"
                ? "svg-icon icon-p3_activity_a"
                : "svg-icon icon-p3_activity"
            }
          >
            <use
              xlinkHref={
                activeItem === "/activity"
                  ? "#icon-p3_activity_a"
                  : "#icon-p3_activity"
              }
            />
          </svg>

          <span
            className={`text-[11px] font-medium ${
              activeItem === "/activity" ? "text-[#f95959]" : "text-gray-600"
            }`}
          >
            Activity
          </span>
        </div>

        <div className="p-2 pb-4" onClick={() => handleClick("WheelSpin")}>
          <div className="nav-promotion relative flex flex-col items-center">
            <img
              src="https://i.ibb.co/3mbfsqPB/wheelImg.png"
              alt=""
              className="relative"
            />
            <span
              className={`absolute top-14 text-[14px] font-medium ${
                activeItem === "/WheelSpin" ? "active" : "text-[#f95959]"
              }`}
            >
              Get 200
            </span>
          </div>
        </div>

        <div
          className={`flex justify-center items-center flex-col p-2 pb-5 ${
            activeItem === "/wallet" ? "active" : ""
          }`}
          onClick={() => handleClick("promotion")}
        >
          <svg
            data-v-fb80cf49
            className={
              activeItem === "/promotion"
                ? "svg-icon icon-p3_promotion_a"
                : "svg-icon icon-p3_promotion"
            }
          >
            <use
              xlinkHref={
                activeItem === "/promotion"
                  ? "#icon-p3_promotion_a"
                  : "#icon-p3_promotion"
              }
            />
          </svg>

          <span
            className={`text-[11px] font-medium ${
              activeItem === "/promotion" ? "text-[#f95959]" : "text-gray-600"
            }`}
          >
            Promotion
          </span>
        </div>

        <div
          className={`flex justify-center items-center flex-col p-2 pb-5 ${
            activeItem === "/main" ? "active" : ""
          }`}
          onClick={() => handleClick("main")}
        >
          <svg
            data-v-fb80cf49
            className={
              activeItem === "/main"
                ? "svg-icon icon-p3_main_a"
                : "svg-icon icon-p3_main"
            }
          >
            <use
              xlinkHref={
                activeItem === "/main" ? "#icon-p3_main_a" : "#icon-p3_main"
              }
            />
          </svg>

          <span
            className={`text-[11px] font-medium ${
              activeItem === "/main" ? "text-[#f95959]" : "text-gray-600"
            }`}
          >
            Account
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
