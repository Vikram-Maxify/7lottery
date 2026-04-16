import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import JilliPopup from "../../../components/JilliPopup";
import { Link } from "react-router-dom";

const casinoData = [
  {
    img: "https://i.ibb.co/67prjsPw/vendorlogo-dec4.jpg",
    name: "PA Casino",
    id: "8405541014f364b7dc59657aa6892446",
    iconId: "icon-AG",
  },
  {
    img: "https://i.ibb.co/39pj1SJW/vendorlogo-m.jpg",
    name: "WM Casino",
    id: "724eebd5cbe7555b01ed60279cb59e5a",
    iconId: "icon-WM",
  },
  {
    img: "https://i.ibb.co/h1Tk6kJG/vendorlogo-3v.jpg",
    name: "Sexy Casino",
    id: "9b25f8d744859c6840d16ff6103dc5a6",
    iconId: "icon-SEXY",
  },
  {
    img: "https://i.ibb.co/G4ZJZcK4/vendorlogo-jyfp.jpg",
    name: "EVO Casino",
    id: "8ef39602e589bf9f32fc351b1cbb338b",
    iconId: "icon-EVO",
  },
  {
    img: "https://i.ibb.co/6R74Bg4q/vendorlogo-dwek.jpg",
    name: "SA Casino",
    id: "1fd20a344c9f147cdef85bbaa7447dcd",
  },
];

const CasinoLiveGame = () => {
  const [gameId, setGameId] = useState();

  const handleJilliOpen = (data) => {
    setGameId(data);
  };

  return (
    <>
      {gameId && <JilliPopup gameId={gameId} />}

      <div className="lottery-game-section">
        {/* Header Section */}
        {/* <div className="flex justify-between items-center">
          <h1 className="border-after mt-2 text-whites font-bold text-lg border-l-4 border-[#f95959] pl-1">
            Casino
          </h1>
        </div> */}
        {/* <p className="text-whites text-[10px] mt-1">
          The games are independently developed by our team, fun, fair, and
          safe.
        </p> */}

        {/* Game Grid */}
        <div className="slider-container mt-3">
          <div className="grid grid-cols-3 gap-2">
            {casinoData.map((game, index) => (
              <div
                key={index}
                className="rounded-md cursor-pointer hover:shadow-md transition-shadow flex-col"
                onClick={() => handleJilliOpen(game.id)}
              >
                <img
                  src={game.img}
                  alt={game.name}
                  className="w-full rounded-lg h-[26vh]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CasinoLiveGame;
