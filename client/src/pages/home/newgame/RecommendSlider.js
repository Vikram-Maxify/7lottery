import React, { useState, useEffect, useCallback } from "react";
import JilliPopup from "../../../components/JilliPopup";

const RecommendSlider = () => {
  const [gameId, setGameId] = useState();
  const [gameList, setGameList] = useState([]);

  const handleJilliOpen = (data) => {
    setGameId(data);
  };

  const fetchGameList = useCallback(() => {
    setGameList([
      {
        icon: "https://i.ibb.co/PGCDGq5v/Win-Go-30-S-20250804210516018.jpg",
        game_name: "Wingo",
        game_uid: "a04d1f3eb8ccec8a4823bdf18e3f0e84",
      },
      {
        icon: "https://i.ibb.co/1fHd0W0n/121.png",
        game_name: "Chiken Road",
        game_uid: "c68a515f0b3b10eec96cf6d33299f4e2",
      },
      {
        icon: "https://i.ibb.co/YTB8kF0Y/800.png",
        game_name: "Aviator",
        game_uid: "a04d1f3eb8ccec8a4823bdf18e3f0e84",
      },
       {
        icon: "https://i.ibb.co/5JLPdPq/810.png",
        game_name: "Cricket",
        game_uid: "a04d1f3eb8ccec8a4823bdf18e3f0e84",
      },
       {
        icon: "https://i.ibb.co/VWCH2nrV/100.png",
        game_name: "Mines",
        game_uid: "a04d1f3eb8ccec8a4823bdf18e3f0e84",
      },
      {
        icon: "https://i.ibb.co/sd4GMWGn/110.png",
        game_name: "Limbo",
        game_uid: "da0d973cee506257c900d18375883f2c",
      },
      {
        icon: "https://i.ibb.co/Z12wyvwj/105.png",
        game_name: "Cricket",
        game_uid: "c68a515f0b3b10eec96cf6d33299f4e2",
      },
      {
        icon: "https://i.ibb.co/4qkGcH0/125.png",
        game_name: "Mines 1",
        game_uid: "da0d973cee506257c900d18375883f2c",
      },
      {
        icon: "https://i.ibb.co/B5HTX2VS/14027.png",
        game_name: "Mines 2",
        game_uid: "4de0c305e78b77ab9b3714138299a36d",
      },
       {
        icon: "https://i.ibb.co/DPzCpks0/8210.png",
        game_name: "Tia Xiu",
        game_uid: "a04d1f3eb8ccec8a4823bdf18e3f0e84",
      },
      {
        icon: "https://i.ibb.co/7tXcBCL8/109-1.png",
        game_name: "Mines 3",
        game_uid: "a493bdd1bbe559f7a3fa5e5947982242",
      },
      {
        icon: "https://i.ibb.co/1Y9CJ2Wt/223.png",
        game_name: "Mines 4",
        game_uid: "1180fe0cde1d83f307d3db95883123d8",
      },
    ]);
  }, []);

  useEffect(() => {
    fetchGameList();
  }, [fetchGameList]);

  return (
    <>
      {gameId && <JilliPopup gameId={gameId} />}

      {/* <div className="mb-3">
        <h4 className="border-after text-black font-bold border-l-4 border-[#f95959] pl-1">
          Platform Recommended
        </h4>
      </div> */}

      <div className="grid grid-cols-12 gap-2 mt-2">
        {gameList.map((game, index) => (
          <div className="col-span-4 mb-2" key={index}>
            <div
              className="rounded-lg"
              onClick={() => handleJilliOpen(game.game_uid)}
            >
              <img
                src={game.icon}
                alt={game.game_name}
                loading="lazy"
                className="w-full rounded-lg h-[26vh]"
              />
            </div>
            {/* <p className="text-center text-black mt-1 font-semibold truncate">
              {game.game_name}
            </p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendSlider;
