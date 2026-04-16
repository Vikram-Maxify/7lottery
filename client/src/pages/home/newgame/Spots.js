import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash/debounce";
import JilliPopup from "../../../components/JilliPopup";
import { launchGame } from "../../../store/reducer/spribeGameReducer";
import { MdKeyboardArrowDown } from "react-icons/md";


const Slots = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { loader } = useSelector((state) => state.spribeGame);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jilliPopup, setJilliPopup] = useState(false);
  const [gameId, setGameId] = useState();

  // ✅ Static slots with images & unique ids
  const staticSlots = [
    {
      img: "https://i.ibb.co/chSWXCPz/47.png",
      id: "8405541014f364b7dc59657aa6892446",
    },
    {
      img: "https://i.ibb.co/jP232V2X/110-1.png",
      id: "724eebd5cbe7555b01ed60279cb59e5a",
    },
    {
      img: "https://i.ibb.co/LXk27VkP/51-1.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
    {
      img: "https://i.ibb.co/q3gFwBjp/42-1.png",
      id: "624db9f6b362baf19796f281dfdee1ab",
    },
    {
      img: "https://i.ibb.co/TxwWfR7W/45.png",
      id: "1fd20a344c9f147cdef85bbaa7447dcd",
    },
    {
      img: "https://i.ibb.co/HLH2kZtR/100-1.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
    {
      img: "https://i.ibb.co/Z1113hkz/87.png",
      id: "724eebd5cbe7555b01ed60279cb59e5a",
    },
    {
      img: "https://i.ibb.co/FLmrgZxT/212-1.png",
      id: "8405541014f364b7dc59657aa6892446",
    },
    {
      img: "https://i.ibb.co/h1YNWnnd/119-2.png",
      id: "724eebd5cbe7555b01ed60279cb59e5a",
    },
    {
      img: "https://i.ibb.co/rL4pJf7/126.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
    {
      img: "https://i.ibb.co/GQMc2QFw/108.png",
      id: "624db9f6b362baf19796f281dfdee1ab",
    },
    {
      img: "https://i.ibb.co/0VXGjcMf/85.png",
      id: "1fd20a344c9f147cdef85bbaa7447dcd",
    },
    {
      img: "https://i.ibb.co/v41m1b1Y/135.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
    {
      img: "https://i.ibb.co/h1F8YvFK/23.png",
      id: "724eebd5cbe7555b01ed60279cb59e5a",
    },
    {
      img: "https://i.ibb.co/nqsGYsG3/183.png",
      id: "8405541014f364b7dc59657aa6892446",
    },
    {
      img: "https://i.ibb.co/Dfn5Rzvj/26.png",
      id: "724eebd5cbe7555b01ed60279cb59e5a",
    },
    {
      img: "https://i.ibb.co/LDFtxfqk/102-1.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
    {
      img: "https://i.ibb.co/sSQ0KHC/4.png",
      id: "624db9f6b362baf19796f281dfdee1ab",
    },
    {
      img: "https://i.ibb.co/wk3q2ky/10.png",
      id: "1fd20a344c9f147cdef85bbaa7447dcd",
    },
    {
      img: "https://i.ibb.co/cKV0tCjX/166.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
    {
      img: "https://i.ibb.co/sdYfhsXF/392.png",
      id: "724eebd5cbe7555b01ed60279cb59e5a",
    },
    {
      img: "https://i.ibb.co/TD0cwqVR/517.png",
      id: "8405541014f364b7dc59657aa6892446",
    },
    {
      img: "https://i.ibb.co/21Y7Hhxv/531.png",
      id: "724eebd5cbe7555b01ed60279cb59e5a",
    },
    {
      img: "https://i.ibb.co/DfCLyfpG/424.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
    {
      img: "https://i.ibb.co/VYGxwL0Q/274.png",
      id: "624db9f6b362baf19796f281dfdee1ab",
    },
    {
      img: "https://i.ibb.co/hFpMj1Yb/49.png",
      id: "1fd20a344c9f147cdef85bbaa7447dcd",
    },
    {
      img: "https://i.ibb.co/n8D2qVMy/109-2.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
    {
      img: "https://i.ibb.co/sGKN0zZ/103.png",
      id: "724eebd5cbe7555b01ed60279cb59e5a",
    },
    {
      img: "https://i.ibb.co/8gb16Stq/32-1.png",
      id: "8405541014f364b7dc59657aa6892446",
    },
    {
      img: "https://i.ibb.co/NgsRPQDL/77.png",
      id: "724eebd5cbe7555b01ed60279cb59e5a",
    },
    {
      img: "https://i.ibb.co/5h6TJXyQ/523.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
    {
      img: "https://i.ibb.co/V07JCpyn/35.png",
      id: "624db9f6b362baf19796f281dfdee1ab",
    },
    {
      img: "https://i.ibb.co/ccJVcxVM/181.png",
      id: "1fd20a344c9f147cdef85bbaa7447dcd",
    },
    {
      img: "https://i.ibb.co/GNcJ7pC/134.png",
      id: "9b25f8d744859c6840d16ff6103dc5a6",
    },
  ];

  const handleJilliOpen = (data) => {
    setGameId(data);
    setJilliPopup(true);
  };

  const handleJilliSubmit = () => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (userInfo?.isdemo === 0) {
        const playerid = userInfo?.phone_user;
        dispatch(launchGame({ playerid, gameId })).then((res) => {
          if (res.payload.status) {
            window.location.href = res.payload.data.launch_view_url;
            setJilliPopup(false);
          }
        });
      }
    }
  };

  return (
    <>
      {gameId && <JilliPopup gameId={gameId} />}
      <div class="flex justify-between bg-[#fff] shadow-md mb-3 mt-2 rounded-lg">
        <h4 className="border-after text-gray-500 text-sm pl-2 py-3 font-semibold">
          Jilli
        </h4>
        <MdKeyboardArrowDown className="text-gray-500 text-lg mt-3 mr-2" />
      </div>
      <div className="grid grid-cols-12 gap-2">
        {staticSlots.map((slot, i) => (
          <div className="col-span-4 rounded-lg" key={i}>
            <img
              src={slot.img}
              alt={`Slot ${i + 1}`}
              loading="lazy"
              className="w-full rounded-lg p-[1px] h-[26vh]"
              onClick={() => handleJilliOpen(slot.id)} // ✅using static id
            />
          </div>
        ))}
      </div>

      {/* <div className={jilliPopup ? "overlay-section block" : "hidden"}></div>
      {jilliPopup && (
        <div className="fixed top-0 z-[20] bottom-0 h-32 m-auto flex flex-col justify-center items-center left-0 right-0 w-[20rem] bg-light rounded-lg">
          <h3 className="heading-h3 gray-50 mt-5">Tips</h3>
          <p className="text-sm gray-100 mt-2">
            Are you sure you want to join the game?
          </p>

          <div className="w-full mt-5 flex">
            <button
              className="gray-100 p-2 w-1/2 rounded-bl-lg"
              onClick={() => setJilliPopup(false)}
            >
              Cancel
            </button>
            <button
              disabled={loader}
              className="text-blue p-2 rounded-br-lg w-1/2"
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

export default Slots;
