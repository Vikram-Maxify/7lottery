import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import JilliPopup from "../../../components/JilliPopup";
import { launchGame } from "../../../store/reducer/spribeGameReducer";
import { MdKeyboardArrowDown } from "react-icons/md";

const Rummy = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { loader } = useSelector((state) => state.spribeGame);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jilliPopup, setJilliPopup] = useState(false);
  const [gameId, setGameId] = useState();

  // 👇 manual array banaya
  const listTypeData = [
    {
      game_uid: "rummy1",
      icon: "https://i.ibb.co/DPzCpks0/8210.png",
    },
    {
      game_uid: "rummy2",
      icon: "https://i.ibb.co/SDcnzwZT/910.png",
    },
    {
      game_uid: "rummy3",
      icon: "https://i.ibb.co/6R6bprhj/950.png",
    },
    {
      game_uid: "rummy4",
      icon: "https://i.ibb.co/S7xL1gFv/220.png",
    },
    {
      game_uid: "rummy5",
      icon: "https://i.ibb.co/spVgMctj/1101.png",
    },
    {
      game_uid: "rummy6",
      icon: "https://i.ibb.co/gLjjFQP9/510.png",
    },
    {
      game_uid: "rummy7",
      icon: "https://i.ibb.co/kVjGBYnp/8700.png",
    },
    {
      game_uid: "rummy8",
      icon: "https://i.ibb.co/3ybkGjHG/600.png",
    },
    {
      game_uid: "rummy9",
      icon: "https://i.ibb.co/Mkv7CGTn/630.png",
    },
    {
      game_uid: "rummy10",
      icon: "https://i.ibb.co/HDWGhBtF/620.png",
    },
    {
      game_uid: "rummy11",
      icon: "https://i.ibb.co/JFqf3TWY/8600.png",
    },
    {
      game_uid: "rummy12",
      icon: "https://i.ibb.co/2094T80k/8290.png",
    },
    {
      game_uid: "rummy13",
      icon: "https://i.ibb.co/ymJC57Jb/860.png",
    },
    {
      game_uid: "rummy14",
      icon: "https://i.ibb.co/vCZ6K314/830.png",
    },
    {
      game_uid: "rummy15",
      icon: "https://i.ibb.co/7mQ8r7J/920.png",
    },
    {
      game_uid: "rummy16",
      icon: "https://i.ibb.co/JR2rZ81t/3101.png",
    },
    {
      game_uid: "rummy17",
      icon: "https://i.ibb.co/4R0MjCCW/8540.png",
    },
    {
      game_uid: "rummy18",
      icon: "https://i.ibb.co/Q7GqZ2Tp/8910.png",
    },
    {
      game_uid: "rummy19",
      icon: "https://i.ibb.co/ST2PzN4/680.png",
    },
    {
      game_uid: "rummy20",
      icon: "https://i.ibb.co/6cLMWh4x/3890.png",
    },
    {
      game_uid: "rummy21",
      icon: "https://i.ibb.co/39K5F8gF/930.png",
    },
  ];

  const handleJilliOpen = (data) => {
    setGameId(data);
    setJilliPopup(true);
  };

  const handleJilliSubmit = () => {
    if (userInfo === undefined || userInfo === "") {
      navigate("/login");
    } else {
      if (userInfo?.isdemo == 0) {
        let playerid = userInfo?.phone_user;
        dispatch(launchGame({ playerid, gameId })).then((res) => {
          if (res.payload.status) {
            window.location.href = res.payload.data.launch_view_url;
            setJilliPopup(false);
          }
        });
      } else {
        // demo users ka case handle karo agar chahiye
      }
    }
  };

  return (
    <>
      {gameId && <JilliPopup gameId={gameId} />}
      <div class="flex justify-between bg-[#fff] shadow-md mb-3 mt-2 rounded-lg">
        <h4 className="border-after text-gray-500 text-sm pl-2 py-3 font-semibold">
          V8Card
        </h4>
        <MdKeyboardArrowDown className="text-gray-500 text-lg mt-3 mr-2"/>
      </div>
      <div className="grid grid-cols-12 gap-3">
        {listTypeData.map((items, i) => (
          <div className="col-span-4 rounded-lg" key={i}>
            <img
              src={items.icon}
              alt=""
              loading="lazy"
              className="w-full rounded-lg p-[1px] h-[26vh]"
              onClick={() => handleJilliOpen(items.game_uid)}
            />
          </div>
        ))}
      </div>

      {/* agar popup UI yahi handle karna ho to uncomment kar lena */}
      {/* <div className={jilliPopup ? "overlay-section block" : "hidden"}></div>
      {jilliPopup && (
        <div className="fixed top-0 z-[20] bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] bg-light rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2">
            Are you sure you want to join the game?
          </p>

          <div className="w-full mt-5">
            <button
              className="gray-50 p-2 w-[50%]  rounded-bl-lg "
              onClick={() => setJilliPopup(false)}
            >
              Cancel
            </button>
            <button
              disabled={loader}
              className="text-blue p-2 rounded-br-lg  w-[50%]"
              onClick={handleJilliSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Rummy;
