import { useState, useRef, useEffect } from "react";

// Black Icons
import blackIcon1 from "../../../assets/NewImg/slotsicons/black/JILI ICON.png";
import blackIcon2 from "../../../assets/NewImg/slotsicons/black/CQ9.png";
import blackIcon3 from "../../../assets/NewImg/slotsicons/black/JDB ICON.png";
import blackIcon4 from "../../../assets/NewImg/slotsicons/black/mg fish icon.png";
import blackIcon5 from "../../../assets/NewImg/slotsicons/black/evo_electronic icon.png";
import blackIcon6 from "../../../assets/NewImg/slotsicons/black/G9 ICON.png";
import blackIcon7 from "../../../assets/NewImg/slotsicons/black/PG.png";
import PopularIcon from "../../../assets/bdgimg/popularicon.png";
import LotteryIcon from "../../../assets/bdgimg/lotteryicon.png";
import popularbg from "../../../assets/bdgimg/bgpopular.png";
import lotterybg from "../../../assets/bdgimg/bglottery.png";
import slotbg from "../../../assets/bdgimg/bgslot.png";
import SlotsIcon from "../../../assets/bdgimg/slotsicon.png";
import SportsIcon from "../../../assets/bdgimg/sportsicon.png";
import CasinoIcon from "../../../assets/bdgimg/casinoicon.png";
import RummyIcon from "../../../assets/bdgimg/rummyicon.png";
import FishingIcon from "../../../assets/bdgimg/chickenpng.png";
import OriginalIcon from "../../../assets/bdgimg/originalicon.png";
import { rechargeList2 } from "../../../store/reducer/userReducer";

// White Icons
import whiteIcon1 from "../../../assets/NewImg/slotsicons/white/JILI ICON WHITE.png";
import whiteIcon2 from "../../../assets/NewImg/slotsicons/white/CQ9 WHITE.png";
import whiteIcon3 from "../../../assets/NewImg/slotsicons/white/JDB ICON WHITE.png";
import whiteIcon4 from "../../../assets/NewImg/slotsicons/white/mg video WHITE.png";
import whiteIcon5 from "../../../assets/NewImg/slotsicons/white/EVO ELECTRONIC WHITE ICON.png";
import whiteIcon6 from "../../../assets/NewImg/slotsicons/white/G9 WHITE ICON.png";
import whiteIcon7 from "../../../assets/NewImg/slotsicons/white/pg white icon.png";

import PVCSection from "./PVCSection";

import SportsComponent from "./SportsComponent";
import CasinoSection from "../newgame/CasinoSection";

import { useDispatch } from "react-redux";
import { notification } from "../../../store/reducer/activityReducer";

import LotterSection from "../newgame/LotterSection";
import JilliGame from "../newgame/JilliGame";
import Cq9Game from "../newgame/Cq9Game";
import JDBGame from "../newgame/JDBGame";
import MGGame from "../newgame/MGGame";
import EVOGame from "../newgame/EVOGame";
import G9Game from "../newgame/G9Game";
import PGGame from "../newgame/PGGame";
import MGfishGame from "../newgame/MGfishGame";
import OriginalGame from "../newgame/OriginalGame";
import FishingGame from "../newgame/FishingGame";
import CasinoLiveGame from "../newgame/CasinoLiveGame";
import SuperJackportGame from "../newgame/SuperJackportGame";
import { useNavigate } from "react-router-dom";
import Rummy from "../newgame/Rummy";
import Popular from "../newgame/Popular";
import Slots from "../newgame/Spots";
import RecommendSlider from "../newgame/RecommendSlider";
import ChikenRoad from "./ChikenRoad";
import SuperJackpots from "./SuperJackpots";

const jackpot = "https://i.ibb.co/cSfQ63hD/gamecategory-20240722092600jsn4.png";
const lottery = "https://i.ibb.co/qF5pybkQ/gamecategory-20240722092542sh85.png";
const slot = "https://i.ibb.co/t02yBnw/gamecategory-20240722092552pj7d.png";
const original =
  "https://i.ibb.co/FL5Cgn80/gamecategory-20240722092452swfv.png";
const fishing = "https://i.ibb.co/ycwGgRFG/gamecategory-20240722092502uryl.png";
const sports = "https://i.ibb.co/sJ2RLb6q/gamecategory-20240722092533461f.png";
const pvc = "https://i.ibb.co/4wnPM29p/gamecategory-20240722092510alv1.png";
const casino = "https://i.ibb.co/pDq8CR8/gamecategory-20240722092524eyc6.png";

const slotCategories = [
  {
    name: "Popular",
    icon: PopularIcon,
    layout: "absolute",
    id: "popular",
    img: popularbg,
  },
  {
    name: "Lottery",
    icon: LotteryIcon,
    layout: "absolute",
    id: "lottery",
    img: lotterybg,
  },
  {
    name: "Mini Game",
    icon: SlotsIcon,
    layout: "absolute",
    id: "mini game",
    img: slotbg,
  },
  { name: "Slots", icon: FishingIcon, layout: "side", id: "slots" },
  { name: "Fishing", icon: OriginalIcon, layout: "side", id: "orignal" },
  { name: "PVC", icon: RummyIcon, layout: "center", id: "pvc" },
  { name: "Sports", icon: SportsIcon, layout: "center", id: "sports" },
  { name: "Casino", icon: CasinoIcon, layout: "center", id: "casino" },
];

const slotCategories2 = [
  { name: "JILI", blackIcon: blackIcon1, whiteIcon: whiteIcon1, id: "jili" },
  { name: "CQ9", blackIcon: blackIcon2, whiteIcon: whiteIcon2, id: "cq9" },
  { name: "JDB", blackIcon: blackIcon3, whiteIcon: whiteIcon3, id: "jdb" },
  // { name: "MG", blackIcon: blackIcon4, whiteIcon: whiteIcon4, id: "mg" },
  {
    name: "EVO_Electronic",
    blackIcon: blackIcon5,
    whiteIcon: whiteIcon5,
    id: "evo_ele",
  },
  // { name: "G9", blackIcon: blackIcon6, whiteIcon: whiteIcon6, id: "g9" },
  // { name: "PG", blackIcon: blackIcon7, whiteIcon: whiteIcon7, id: "pg" },
  // {
  //   name: "MG_Fish",
  //   blackIcon: blackIcon8,
  //   whiteIcon: whiteIcon8,
  //   id: "mg_fish",
  // },
];

const SlotComponents = () => {
  const dispatch = useDispatch();
  const [scrollKey, setScrollKey] = useState(0);
  const [activeCategory, setActiveCategory] = useState("jili");
  const [alertsuccess, setAlertsuccess] = useState(false);
  const [activeTab, setActivetab] = useState("Popular");
  const [isScrolled, setIsScrolled] = useState(false);
  const categoryRef = useRef();
  const contentRef = useRef(null);

  const [repopup, setRepopup] = useState(false);
  const navigate = useNavigate();

  const data = localStorage.getItem("topup");
  const data22 = localStorage.getItem("topup22");
  const [tabs, setTabs] = useState("lottery");

  const handleCategoryClick = (category) => {
    setTabs(category.id); // 👈 active tab update karega
    const element = document.getElementById(category.id);
    if (element) {
      const yOffset = -150;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const categoryChunks = [
    slotCategories.slice(0, 3), // row 1
    slotCategories.slice(3, 8), // row 2
  ];

  const handleTabClick = (id) => {
    setTabs(id);
    setScrollKey((prev) => prev + 1);

    const topSection = document.querySelector("#top-category-section");
    if (topSection) {
      const topPos = topSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    dispatch(notification());
  }, []);

  const handleWingo = (path) => {
    dispatch(rechargeList2()).then((res) => {
      if (res.payload.data2?.length === 0) {
        setRepopup(true);
      } else {
        navigate(path);
      }
    });
  };
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const section = document.getElementById(tabs);
    if (section) {
      const yOffset = -130;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [tabs]);

  const handleCloseRecharge = () => {
    navigate("/wallet/Recharge");
    setRepopup(false);
  };

  return (
    <div className="container-section mt-5 relative">
      <div className="bg-white">
        <div className={`place-bet-popup z-40 ${alertsuccess ? "active" : ""}`}>
          <div className="text-lg">
            {"Need first recharge to Play the Game"}
          </div>
        </div>
      </div>

      {/* lottery tabs  */}
      <div className="mt-5">
        {/* Row 1: Top 3 category cards */}
        <div className="grid grid-cols-3 gap-4 mt-3">
          {categoryChunks[0].map((category) => (
            <div
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className="overflow-hidden cursor-pointer relative rounded-xl shadow-md"
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Icon and Name */}
              <div className="relative flex flex-col items-center justify-center p-1">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-20 h-20 mb-1"
                />
                <p className="text-white text-xl font-semibold">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Bottom 5 icons with background */}
        <div className="relative mt-8 rounded-xl z-10 bg-nav h-[75px]">
          <div className="absolute -top-2 left-0 w-full h-full grid grid-cols-5 gap-2 py-2 z-50">
            {categoryChunks[1].map((category, index) => (
              <div
                key={category.id}
                className="flex flex-col items-center justify-center cursor-pointer relative px-2"
                onClick={() => handleTabClick(category.id)} // 👈 yaha bhi
              >
                {/* ICON */}
                <img
                  src={category.icon}
                  alt={category.name}
                  className="h-auto w-24 object-contain"
                />

                {/* NAME */}
                <p className="text-white text-base font-medium leading-tight text-center">
                  {category.name}
                </p>

                {/* Slimmer & Lower Divider */}
                {index !== categoryChunks[1].length - 1 && (
                  <div className="absolute right-0 top-[10%] h-12 w-px bg-white bg-opacity-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ... */}
      <div
        className={`bg-[#F1F2F5] overflow-x-auto z-[2] sticky top-11 mr-[-3px] transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        {isScrolled && (
          <div className="flex border-none my-2">
            {slotCategories.map((category, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setTabs(category.id); // 👈 active tab set
                  const element = document.getElementById(category.id);
                  if (element) {
                    const yOffset = -130; // header height adjust
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;

                    // 👇 scrollIntoView smooth karega
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });

                    // fallback extra offset ke liye thoda delay
                    setTimeout(() => {
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }, 100);
                  }
                }}
                className={`whitespace-nowrap w-full flex-col px-3 py-1 mx-1 rounded-lg text-sm flex items-center ${
                  category.id === tabs
                    ? "opacity-100 text-white"
                    : "opacity-80 text-gray-500"
                }`}
                style={{
                  background:
                    category.id === tabs
                      ? "linear-gradient(90deg, #F95A5A 0%, #FF8E8A 50.37%, #FFA178 100%)"
                      : "#fff",
                  // padding: "2px",
                }}
              >
                <div className="w-20 flex flex-col justify-center items-center">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-[80px] h-[30px] object-contain"
                  />
                </div>
                <span className="text-[14px]">{category.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* lottery Section*/}
        {tabs === "lottery" && (
          <div id="lottery" className="lottery-game-section mt-3">
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/tT3mD2D5/ball-8-14f99c7a.webp"
                  alt=""
                  className="w-5 h-5 mt-1"
                />
                <h1 className="mt-2 text-whites text-lg pl-1">Lottery</h1>
              </div>
            </div>
            <div className="mt-3">
              <div className="grid grid-cols-3 gap-4">
                {gameData.map((game, index) => (
                  <div
                    key={game.id}
                    onClick={() => handleWingo(game.link)}
                    className="lotterySlotItem rounded-xl overflow-hidden"
                  >
                    <img
                      src={game.image}
                      alt={game.name}
                      className={`w-full rounded ${
                        game.id >= 1 && game.id <= 5 ? "h-full" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/*  */}
        {tabs === "mini game" && (
          // <div className="" id="slots">
          //   <h1 className="border-after mt-2 text-whites font-[500] text-base">
          //     Slot
          //   </h1>
          //   <p className="text-whites text-[11px] mt-1">
          //     Online real-time game dealers, all verified fair games
          //   </p>

          //   <div className="relative overflow-x-auto scrollbar-hide rounded bg-light">
          //     <div ref={categoryRef} className="flex border-none">
          //       {slotCategories2.map((category, index) => (
          //         <div
          //           key={index}
          //           data-id={category.id}
          //           onClick={() => handleCategoryClick(category.id)}
          //           className={`flex flex-col items-center whitespace-nowrap py-2 px-1 rounded ${
          //             activeCategory === category.id
          //               ? "blue-linear2 text-white shadow-lg"
          //               : "bg-[#fff] text-[#606877] border-gray-300"
          //           }`}
          //         >
          //           <div className="w-20 flex flex-col justify-center items-center">
          //             <img
          //               src={
          //                 activeCategory === category.id
          //                   ? category.whiteIcon
          //                   : category.blackIcon
          //               }
          //               alt={category.name}
          //               className="h-[15px] w-auto object-contain"
          //             />
          //           </div>
          //           <span>{category.name}</span>
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          //   <div className=" overflow-hidden">
          //     <div ref={contentRef} className="transition-all duration-300">
          //       {activeCategory === "jili" && (
          //         <div>
          //           <JilliGame />
          //         </div>
          //       )}
          //       {activeCategory === "cq9" && <Cq9Game />}
          //       {activeCategory === "jdb" && <JDBGame />}
          //       {activeCategory === "mg" && <MGGame />}
          //       {activeCategory === "evo_ele" && <EVOGame />}
          //       {activeCategory === "g9" && <G9Game />}
          //       {activeCategory === "pg" && <PGGame />}
          //       {activeCategory === "mg_fish" && <MGfishGame />}
          //     </div>
          //   </div>
          // </div>
          <div id="mini game">
            <div className="flex justify-between items-center"></div>
            {/* <Slots /> */}
            <SuperJackpots />
          </div>
        )}
        {/*  */}
        {/* <div className=" overflow-hidden">
          <div ref={contentRef} className="transition-all duration-300">
            {activeCategory === "jili" && (
              <div>
                <JilliGame />
              </div>
            )}
            {activeCategory === "cq9" && <Cq9Game />}
            {activeCategory === "jdb" && <JDBGame />}
            {activeCategory === "mg" && <MGGame />}
            {activeCategory === "evo_ele" && <EVOGame />}
            {activeCategory === "g9" && <G9Game />}
            {activeCategory === "pg" && <PGGame />}
            {activeCategory === "mg_fish" && <MGfishGame />}
          </div>
        </div> */}
        {tabs === "popular" && (
          <div id="popular" className="mt-2">
            <div className="flex justify-between items-center"></div>
            {/* <CasinoSection /> */}
            <RecommendSlider />
            <Popular />
          </div>
        )}

        {tabs === "casino" && (
          <div id="casino" className="mt-2">
            <div className="flex justify-between items-center"></div>
            <CasinoLiveGame />
          </div>
        )}

        {tabs === "orignal" && (
          <div id="orignal" className="lottery-game-section">
            {/* <OriginalGame /> */}
            <FishingGame />
          </div>
        )}
        {tabs === "slots" && (
          <div id="slots" className="lottery-game-section">
            {/* <FishingGame /> */}
            <Slots />
          </div>
        )}
        {tabs === "sports" && (
          <div>
            <SportsComponent />
          </div>
        )}
        {tabs === "pvc" && (
          <div>
            {/* <PVCSection /> */}
            <Rummy />
          </div>
        )}

        {/* orignal */}

        {/* <div id="orignal" className="mt-4">
          <div className="flex justify-between items-center"></div>
          <OriginalGame />
        </div> */}
        {/* fishing */}

        {/* <div id="fishing" className="mt-2">
          <div className="flex justify-between items-center"></div>
          <FishingGame />
        </div> */}
        {/* casino */}

        {/* sports & pvc */}

        {/* <div id="sports" className="mt-2">
          <div className="flex justify-between items-center"></div>
          <SportsComponent />
        </div>
        <div id="pvc" className="mt-2">
          <div className="flex justify-between items-center"></div>
          <PVCSection />
        </div> */}
        {/* jackpot */}
        {/* <div id="jackpot" className="mt-2">
          <div className="flex justify-between items-center"></div>
          <SuperJackportGame />
        </div> */}
      </div>
      <div
        className={repopup ? "overlay-section block z-[50]" : "hidden"}
      ></div>
      {repopup && (
        <div className="fixed top-0 z-[60] bottom-0 pb-2 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] bg-light rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm text-whites mt-2">
            First need to recharge for this game
          </p>

          <div className="w-full mt-5">
            <button
              className=" text-gray-400 p-2 w-[50%]  rounded-bl-lg "
              onClick={() => setRepopup(false)}
            >
              Cancel
            </button>
            <button
              className="p-2 text-blue rounded-br-lg  w-[50%]"
              onClick={handleCloseRecharge}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlotComponents;
const gameData = [
  {
    id: 1,
    name: "Win Go",
    image: "https://i.ibb.co/pjq0GhfY/lotterycategory-wingo.jpg",
    description1: "Guess Number",
    description2: "Green/Red/Violet to win",
    link: "/wingo",
  },
  {
    id: 2,
    name: "K3",
    image: "https://i.ibb.co/3YrDDmnd/lotterycategoryk3.jpg",
    description1: "Guess Number",
    description2: "Big/Small/Odd/Even",
    link: "/k3",
  },
  {
    id: 3,
    name: "5D",
    image: "https://i.ibb.co/tTJ5Y3Xw/lotterycategory-5d.jpg",
    description1: "Guess Number",
    description2: "Big/Small/Odd/Even",
    link: "/5d",
  },
  {
    id: 4,
    name: "Trx Win Go",
    image: "https://i.ibb.co/Qj3r6Z20/lotterycategory-moto.jpg",
    description1: "Guess Number",
    description2: "Green/Red/Violet to win",
    link: "/trx",
  },
];
