import React, { useState } from "react";
import JilliPopup from "../../../components/JilliPopup";

const SportsComponent = () => {
  const [gameId, setGameId] = useState();

  const handleJilliOpen = (data) => {
    setGameId(data);
  };

  // sportsData tumhare API se aa raha hai ya props se, yaha sirf design change kiya gaya hai:
  const sportsData = [
    // Dummy data for example. Tum API response ya props use karna.
    {
      id: 1,
      name: "WICKET",
      image: "https://i.ibb.co/PskNZV7M/wicket.jpg",
    },
    {
      id: 2,
      name: "CMD",
      image: "https://i.ibb.co/PvvWdmdk/cmd.jpg",
    },
    {
      id: 3,
      name: "SABA",
      image: "https://i.ibb.co/ghtbtDv/saba.jpg",
    },
    // {
    //   id: 2,
    //   name: "Basketball",
    //   image: "https://i.ibb.co/G4ZJZcK4/vendorlogo-jyfp.jpg",
    // },
    // {
    //   id: 1,
    //   name: "Baseball",
    //   image: "https://i.ibb.co/6R74Bg4q/vendorlogo-dwek.jpg",
    // },
  ];

  return (
    <div className="container mx-auto py-3">
      {gameId && <JilliPopup gameId={gameId} />}

      {/* <div className="flex justify-between items-center mb-2">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="border-after pl-1 mt-2 text-blue font-bold text-lg border-l-4 border-[#f95959]">
              Sports
            </h2>
            <button className="text-xs bg-[#f95959] rounded p-1 text-white">
              More 3
            </button>
          </div>
          <p className="text-white text-xs mt-1">
            Latest sports events, rich gameplay
          </p>
        </div>
      </div> */}

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {sportsData.map((sport, index) => (
            <div
              key={index}
              className="rounded-md cursor-pointer hover:shadow-md transition-shadow flex-col"
              onClick={() => {
                index === 0 && handleJilliOpen(229);
                index === 1 && handleJilliOpen(51);
                index === 2 && handleJilliOpen(109);
              }}
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full rounded-lg h-[26vh]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsComponent;
