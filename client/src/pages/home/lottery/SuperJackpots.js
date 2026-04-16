import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rechargeList2 } from "../../../store/reducer/userReducer";
import { useNavigate } from "react-router-dom";
import { launchGame } from "../../../store/reducer/spribeGameReducer";
import Loader from "../../../components/Loader";

const SuperJackpots = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const { loader } = useSelector((state) => state.spribeGame);

  // 👇 ab manual array banaya
  const [listData] = useState([
    {
      game_uid: "game1",
      icon: "https://i.ibb.co/k6z0H2HS/804-1.png",
    },
    {
      game_uid: "game2",
      icon: "https://i.ibb.co/1fHd0W0n/121.png",
    },
    {
      game_uid: "game3",
      icon: "https://i.ibb.co/ds8DCjqG/800-1.png",
    },
    {
      game_uid: "game4",
      icon: "https://i.ibb.co/5JLPdPq/810.png",
    },
    {
      game_uid: "game5",
      icon: "https://i.ibb.co/VWCH2nrV/100.png",
    },
    {
      game_uid: "game6",
      icon: "https://i.ibb.co/sd4GMWGn/110.png",
    },
    {
      game_uid: "game7",
      icon: "https://i.ibb.co/957Pfty/80002-20250814095206546.png",
    },
    {
      game_uid: "game8",
      icon: "https://i.ibb.co/1fBSNcKz/6-20250712151024159.png",
    },
    {
      game_uid: "game9",
      icon: "https://i.ibb.co/MyzMC60G/500.png",
    },
    {
      game_uid: "game10",
      icon: "https://i.ibb.co/fVf9qqdt/120.png",
    },
    {
      game_uid: "game11",
      icon: "https://i.ibb.co/v4GPhhmb/102.png",
    },
    {
      game_uid: "game12",
      icon: "https://i.ibb.co/6Rmj9Z8D/903.png",
    },
    {
      game_uid: "game13",
      icon: "https://i.ibb.co/B2FJ4PQ2/116.png",
    },
    {
      game_uid: "game14",
      icon: "https://i.ibb.co/Txd7KzMk/504.png",
    },
    {
      game_uid: "game15",
      icon: "https://i.ibb.co/TqPXLZLy/505.png",
    },
    {
      game_uid: "game16",
      icon: "https://i.ibb.co/3mJRGgTC/101.png",
    },
    {
      game_uid: "game17",
      icon: "https://i.ibb.co/gZ9PnM1R/115.png",
    },
    {
      game_uid: "game18",
      icon: "https://i.ibb.co/995YQ6WM/501.png",
    },
    {
      game_uid: "game19",
      icon: "https://i.ibb.co/vGFMCsz/9009-1.png",
    },
    {
      game_uid: "game20",
      icon: "https://i.ibb.co/hxRSvXGZ/419-1.png",
    },
     {
      game_uid: "game21",
      icon: "https://i.ibb.co/Nd8jw5PH/813.png",
    },
    {
      game_uid: "game22",
      icon: "https://i.ibb.co/5XT8d3mM/814.png",
    },
    {
      game_uid: "game23",
      icon: "https://i.ibb.co/JR3rqTQX/123.png",
    },
     {
      game_uid: "game24",
      icon: "https://i.ibb.co/PvFcgGRN/9016-1.png",
    },
    {
      game_uid: "game25",
      icon: "https://i.ibb.co/3mH9yN9q/9014-1.png",
    },
  ]);

  const [jilliPopup, setJilliPopup] = useState(false);
  const [repopup, setRepopup] = useState(false);
  const [betAlert, setBetAlert] = useState(false);
  const [gameId, setGameId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleJilliOpen = (game_uid) => {
    setGameId(game_uid);
    dispatch(rechargeList2()).then((res) => {
      const rechargeData = res.payload?.data2 ?? [];
      if (rechargeData.length === 0) {
        setRepopup(true);
      } else {
        setJilliPopup(true);
      }
    });
  };

  const handleJilliSubmit = () => {
    if (userInfo === undefined || userInfo === "") {
      navigate("/login");
    } else {
      if (userInfo?.isdemo === 0) {
        let playerid = userInfo?.phone_user;
        dispatch(launchGame({ playerid, gameId })).then((res) => {
          if (res.payload.status) {
            window.open(res.payload.data.launch_view_url, "_blank");
            setJilliPopup(false);
          }
        });
      } else {
        setBetAlert(true);
        setTimeout(() => {
          setBetAlert(false);
        }, 2000);
      }
    }
  };

  const handleCloseRecharge = () => {
    navigate("/wallet/Recharge");
    setRepopup(false);
  };

  return (
    <div className="relative">
      {loading && <Loader />}

      {/* Recharge Required Popup */}
      {repopup && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-[20rem] nav-bg rounded-lg text-center">
            <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
            <p className="text-sm gray-100 mt-2">
              First need to recharge for this game
            </p>
            <div className="w-full mt-5 flex">
              <button
                className="bg-[#ce0204] border-r p-2 w-1/2 rounded-bl-lg"
                onClick={() => setRepopup(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#ce0204] p-2 w-1/2 rounded-br-lg"
                onClick={handleCloseRecharge}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Jilli Game Confirmation */}
      {jilliPopup && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-[20rem] nav-bg rounded-lg text-center">
            <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
            <p className="text-sm gray-100 mt-2">
              Are you sure you want to join the game?
            </p>
            <div className="w-full mt-5 flex">
              <button
                className="text-gray-900 p-2 w-1/2 rounded-bl-lg"
                onClick={() => setJilliPopup(false)}
              >
                Cancel
              </button>
              <button
                disabled={loader}
                className="text-blue-500 p-2 w-1/2 rounded-br-lg"
                onClick={handleJilliSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert for demo users */}
      {betAlert && (
        <div className="fixed top-5 right-5 bg-red-500 text-white px-4 py-2 rounded shadow">
          Demo users cannot place bets.
        </div>
      )}

      {/* Game Section */}
      <div className="lottery-game-section">
        {/* <div className="flex justify-between items-center">
          <h4 className="border-after mt-2 text-black">Mini Games</h4>
        </div>
        <p className="text-gray-500 text-[10px] mt-1">
          The games are independently developed by our team—fun, fair, and safe.
        </p> */}

        <div className="slider-container mt-4">
          <div className="grid grid-cols-12 gap-2">
            {listData.map((item, i) => (
              <div className="col-span-4 rounded-lg" key={i}>
                <img
                  src={item.icon}
                  alt={`game-${i}`}
                  loading="lazy"
                  className="w-full rounded-lg p-[1px] h-[26vh] cursor-pointer"
                  onClick={() => handleJilliOpen(item.game_uid)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperJackpots;
