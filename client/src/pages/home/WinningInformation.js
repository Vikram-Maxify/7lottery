// src/Slider.js
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Avatar1 from "../../assets/avatar.png";
import Avatar2 from "../../assets/avatar.png";
import Avatar3 from "../../assets/avatar.png";
import Avatar4 from "../../assets/avatar.png";
import Avatar5 from "../../assets/avatar.png";

import EarningImg from "../../assets/tiranga/DailyProfitRank.png";

import WinImg1 from "../../assets/winimg1.png";
import WinImg2 from "../../assets/wingimg2.png";
import WinImg3 from "../../assets/winimg3.png";
import WinImg4 from "../../assets/wingo.png";
import WinImg5 from "../../assets/trx.png";

import Crown2 from "../../assets/tiranga/crown2.png";
import Place2 from "../../assets/tiranga/place2.png";
import Crown1 from "../../assets/tiranga/crown1.png";
import Place1 from "../../assets/tiranga/place1.png";
import Crown3 from "../../assets/tiranga/crown3.png";
import Place3 from "../../assets/tiranga/place3.png";
import { AvatarData } from "../main/AvatarData";

const earnings = [
  {
    id: 1,
    name: "Mem***UEW",
    rank: "NO1",
    amount: "100,992",
    highlight: true,
    image: Avatar1,
  },
  {
    id: 2,
    name: "Mem***CBJ",
    rank: "NO2",
    amount: "70,866",
    highlight: true,
    image: Avatar2,
  },
  {
    id: 3,
    name: "Mem***ZWS",
    rank: "NO3",
    amount: "69087",
    highlight: true,
    image: Avatar4,
  },
  {
    id: 4,
    name: "Mem***SUG",
    rank: "NO4",
    amount: "60560",
    highlight: false,
    image: Avatar5,
  },
  {
    id: 5,
    name: "Mem***HOG",
    rank: "NO5",
    amount: "58933",
    highlight: false,
    image: Avatar3,
  },
];

// Random text and number generators
const generateRandomText = () => {
  const prefix = "MEM***";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = prefix;
  for (let i = 0; i < 3; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const getRandomINumber = () => {
  return (Math.random() * 1000).toFixed(2);
};
const data = [
  {
    text: generateRandomText(),
    image: Avatar1,
    img: WinImg1,
    number: getRandomINumber(),
    name: "K3 1 min",
  },
  {
    text: generateRandomText(),
    image: Avatar2,
    img: WinImg2,
    number: getRandomINumber(),
    name: "Jilli",
  },
  {
    text: generateRandomText(),
    image: Avatar3,
    img: WinImg3,
    number: getRandomINumber(),
    name: "TB Chess",
  },
  {
    text: generateRandomText(),
    image: Avatar4,
    img: WinImg4,
    number: getRandomINumber(),
    name: "5D 1 min",
  },
  {
    text: generateRandomText(),
    image: Avatar5,
    img: WinImg5,
    number: getRandomINumber(),
    name: "WinGo 30 sec",
  },
];
// Function to pick a random item from the data array
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Component for showing winning information
const WinningInformation = () => {
  const [currentEarnings, setCurrentEarnings] = useState(earnings);
  const [slides, setSlides] = useState(data.slice(0, 5));

  // Function to generate a random earning entry
  const generateRandomEarning = () => {
    const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];
    const randomAmount = Math.floor(Math.random() * (100000 - 50000) + 50000);

    return {
      id: Math.random(),
      name: generateRandomText(),
      rank: `NO${Math.floor(Math.random() * 5) + 1}`,
      amount: randomAmount.toLocaleString(),
      highlight: Math.random() > 0.5,
      image: avatars[Math.floor(Math.random() * avatars.length)],
    };
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const randomItem = getRandomItem(data);
      const newSlide = { ...randomItem, id: uuidv4() };

      // Add new slide and keep the last 5 slides
      setSlides((prevSlides) => {
        const updatedSlides = [newSlide, ...prevSlides];
        return updatedSlides.slice(0, 5); // Keep only the last 5 slides
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a new random earning
      const newEarning = generateRandomEarning();

      // Update the earnings list, keeping only the last 5 entries
      setCurrentEarnings((prev) => {
        const updated = [newEarning, ...prev.slice(0, 4)];
        return updated;
      });
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);
  return (
    <>
      <h3 className="border-after mt-2 text-whites font-bold">
        Winning Information
      </h3>

      <div className="winning-item w-full overflow-hidden">
        <div className="slider-container">
          <div className="slider flex flex-col gap-2 divide-y divide-[#E1E1E1]">
            {/* Header row */}
            <div className="grid grid-cols-3 text-black rounded-lg p-2 font-medium text-sm text-left">
              <p className="pl-2">Game</p>
              <p className="pl-10">User</p>
              <p className="text-right pr-2">Winning Amount</p>
            </div>

            {/* Data rows */}
            <div className="slider flex flex-col divide-y divide-[#E1E1E1]">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="slide grid grid-cols-3 items-center bg-blues rounded-lg p-2 py-4  w-full"
                >
                  {/* 1st col: Game (Image + Name) */}
                  <div className="flex items-center gap-2">
                    <img
                      src={slide.image}
                      alt={slide.text}
                      className="rounded-full w-5 h-5 object-cover"
                    />
                    <span className="text-[12px] text-gray-700">
                      {slide.name}
                    </span>
                  </div>

                  {/* 2nd col: User (Text) */}
                  <p className="uppercase text-[12px] pl-8 text-gray-700">
                    {slide.text}
                  </p>

                  {/* 3rd col: Winning Amount (Number) */}
                  <h4 className="text-[#f95959] text-xs text-right">
                    ₹{slide.number}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-black">
        {/* <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center ">
              <FaChartBar className="text-[#4266f3] text-3xl" />
            </div>
            <h2 className="text-base font-medium text-black">
              Winning information
            </h2>
          </div>
        </div> */}
        <div className="divide-y">
          {/* {earnings.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 gap-3 bg-[#fff]"
            >
              <div className="flex-shrink-0 w-[40px] h-[50px] object-cover overflow-hidden">
                <img
                  src="https://i.ibb.co/MxjNY9RP/vendorlogo-20240727121204p7ke.png"
                  alt="profile"
                  className="w-[40px] h-[50px] object-cover overflow-hidden "
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col justify-center gap-2 text-[#768096]">
                  <span className=" text-sm">User</span>
                  <span
                    className={`text-sm `}
                  >
                    Winning amount
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col justify-between text-end gap-2">
                  <span className=" text-sm text-[#020d37]">{item.name}</span>
                  <span
                    className={`text-[12px] ${
                      item.highlight ? "text-[#1ab266]" : "text-[#1ab266]"
                    }`}
                  >
                    {item.amount}
                  </span>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center mt-2  border-l-4 border-color-green text-sm mb-2">
          {" "}
          <h1 className="heading-h3 font-bold ml-1 text-whites">
            Today's earning chart
          </h1>
        </div>

        <div
          style={{ backgroundImage: `url(${EarningImg})` }}
          className="w-full mt-20 h-32 bg-cover "
        >
          <div className="flex items-center justify-around w-full">
            <div>
              <div className="relative top-[15px]">
                {/* <img
                  src={Crown2}
                  alt=""
                  className="absolute w-12 left-[-20px] top-[-20px]"
                /> */}
                <img
                  src={AvatarData[4]}
                  alt=""
                  loading="lazy"
                  className="w-10 rounded-full h-10"
                />
                {/* <img src={Place2} alt="" className="absolute bottom-[-10px]" /> */}
              </div>
              <div className="absolute left-4 pt-9 flex flex-col items-center space-x-1">
                <p className="text-sm px-2 pt-3 text-[#ff772a] font-extrabold">
                  Mem**SLH
                </p>
                <span className="text-xs px-2 text-[#b75c36]">
                  ₹220,499,518.82
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="relative  top-[-30px]">
                {/* <img
                  src={Crown1}
                  alt=""
                  className="absolute w-12 left-[-20px] top-[-20px]"
                /> */}
                <img
                  src={AvatarData[4]}
                  alt=""
                  loading="lazy"
                  className="w-14 rounded-full h-14"
                />
                {/* <img src={Place1} alt="" className="absolute bottom-[-10px]" /> */}
              </div>
              <div className="absolute pt-5 flex flex-col items-center left-[-15px]">
                <p className="text-sm pt-3 text-[#ff2d5f] font-extrabold">
                  Mem**FXI
                </p>
                <span className="text-xs text-center text-[#bc2958]">
                  ₹1,272,332,040.00
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="relative top-[15px]">
                {/* <img
                  src={Crown3}
                  alt=""
                  className="absolute w-12 left-[-20px] top-[-20px]"
                /> */}
                <img
                  src={AvatarData[4]}
                  alt=""
                  loading="lazy"
                  className="w-10 rounded-full h-10"
                />
                {/* <img src={Place3} alt="" className="absolute bottom-[-10px]" /> */}
              </div>
              <div className="left-[-15px] absolute pt-9 flex flex-col items-center">
                <p className="text-sm pt-3 text-[#ffb628] font-extrabold">
                  Mem**IAP
                </p>
                <span className="text-xs text-center text-[#b58735]">
                  ₹97,990,200.00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex py-1 items-center justify-between my-2 rounded-md bg-light">
            <div className="flex items-center ps-1">
              <h1 className="text-whites w-14 flex justify-center">4</h1>
              <img
                src={AvatarData[6]}
                alt=""
                className="rounded-full w-[40px] h-[40px] mr-2"
              />
              <p className="fs-sm text-whites">Mem***WJA</p>
            </div>
            <div className="relative flex items-center">
              <button className=" text-sm mt-1 px-2 rounded-3xl p-1 mr-2 text-[#fb5755]">
                ₹78,976,308.99
              </button>
            </div>
          </div>
          <div className="py-1 flex items-center justify-between my-2 rounded-md bg-light">
            <div className="flex items-center ps-1">
              <h1 className="text-whites w-14 flex justify-center">5</h1>
              <img
                src={AvatarData[7]}
                alt=""
                className="rounded-full w-[40px] h-[40px] mr-2"
              />
              <p className="fs-sm text-whites">Mem***GOP</p>
            </div>
            <div className="relative flex items-center">
              <button className=" text-sm mt-1 rounded-3xl p-1 px-2 text-[#fb5755] mr-2">
                ₹61,692,960.00
              </button>
            </div>
          </div>
          <div className="py-1 flex items-center justify-between my-2 rounded-md bg-light">
            <div className="flex items-center ps-1">
              <h1 className="text-whites w-14 flex justify-center">6</h1>
              <img
                src={AvatarData[2]}
                alt=""
                className="rounded-full w-[40px] h-[40px] mr-2"
              />
              <p className="fs-sm text-whites">Mem***IIS</p>
            </div>
            <div className="relative flex items-center">
              <button className=" text-sm mt-1 rounded-3xl p-1 px-2 text-[#fb5755] mr-2">
                ₹59,543,123.00
              </button>
            </div>
          </div>
          <div className="py-1 flex items-center justify-between my-2 rounded-md bg-light">
            <div className="flex items-center ps-1">
              <h1 className="text-whites w-14 flex justify-center">7</h1>
              <img
                src={AvatarData[5]}
                alt=""
                className="rounded-full w-[40px] h-[40px] mr-2"
              />
              <p className="fs-sm text-whites">Mem***MIK</p>
            </div>
            <div className="relative flex items-center">
              <button className=" text-sm mt-1 rounded-3xl p-1 px-2 text-[#fb5755] mr-2">
                ₹48,632,770.00
              </button>
            </div>
          </div>
          <div className="py-1 flex items-center justify-between my-2 rounded-md bg-light">
            <div className="flex items-center ps-1">
              <h1 className="text-whites w-14 flex justify-center">8</h1>
              <img
                src={AvatarData[1]}
                alt=""
                className="rounded-full w-[40px] h-[40px] mr-2"
              />
              <p className="fs-sm text-whites">Mem***BRU</p>
            </div>
            <div className="relative flex items-center">
              <button className=" text-sm mt-1 rounded-3xl p-1 px-2 text-[#fb5755] mr-2">
                ₹43,692,960.00
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WinningInformation;
