import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomeNavbar from "../../components/CustomeNavbar";

const ActivityDetail = () => {
  const { bannergetData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CustomeNavbar name="Activity details" />
      <div className="bg-light">
        {id == 2 && (
          <div>
            <img
              src={bannergetData?.activity?.ban2}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              {" "}
              First Deposit Loss Bonus 35%
            </h3>
            {/* <h4
              onClick={() => navigate("/vip")}
              className="text-green-500 text-xs text-center underline mb-2 font-bold"
            >
              Click here for claim
            </h4> */}
            <div className="container-section">
              <img src={bannergetData?.activity?.ban22} alt="" />
            </div>
          </div>
        )}
        {id == 3 && (
          <div>
            <img
              src={bannergetData?.activity?.ban3}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              2nd & 3rd Recharge Bonus – Get up to ₹777!
            </h3>
            <div className="container-section">
              <img src={bannergetData?.activity?.ban33} alt="" />
            </div>
          </div>
        )}
        {id == 4 && (
          <div>
            <img
              src={bannergetData?.activity?.ban4}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              Recharge for bonus up to 4%
            </h3>
            <div className="container-section">
              <img src={bannergetData?.activity?.ban44} alt="" />
            </div>
          </div>
        )}
        {id == 5 && (
          <div>
            <img
              src={bannergetData?.activity?.ban5}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              Loss Bonus 5%
            </h3>
            <div className="container-section">
              <img src={bannergetData?.activity?.ban55} alt="" />
            </div>
          </div>
        )}
        {id == 6 && (
          <div>
            <img
              src={bannergetData?.activity?.ban6}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              Betting Rebate
            </h3>

            <div className="container-section">
              <img src={bannergetData?.activity?.ban66} alt="" />
            </div>
          </div>
        )}
        {id == 7 && (
          <div>
            <img
              src={bannergetData?.activity?.ban7}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              WEEKLY SLOT BETTING CHALLENGE
            </h3>
            <div className="container-section">
              <img src={bannergetData?.activity?.ban77} alt="" />
            </div>
          </div>
        )}
        {id == 8 && (
          <div>
            <img
              // src={bannergetData?.activity?.ban11}
              src="https://i.ibb.co/jkWYJwj1/7lottery-2.jpg"
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              Benefits of Using ARWALLET
            </h3>
            <h4
              // onClick={() => navigate("/vip")}
              className="text-blue-800 text-xs text-center underline mb-2 font-bold"
            >
              Click here for claim
            </h4>
            <div className="container-section">
              {/* <img src={bannergetData?.activity?.ban88} alt="" /> */}
              <img src="https://i.ibb.co/VW5d5Bcr/playnosys-live.png" alt="" />
            </div>
          </div>
        )}
        {id == 9 && (
          <div>
            <img
              src={bannergetData?.activity?.ban9}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              Partner Rewards
            </h3>
            {/* <h4 className="text-center text-[#00ff00] mb-2 text-xs font-bold">
              Click here to apply : Winning Streak Bonus
            </h4> */}
            <div className="container-section">
              <img src={bannergetData?.activity?.ban99} alt="" />
            </div>
          </div>
        )}
        {id == 10 && (
          <div>
            <img
              src={"https://i.ibb.co/dwhYN9rw/7lottery.jpg"}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              Lottery7 Protect Yourself From Scams
            </h3>
            <div className="container-section">
              <img src={"https://i.ibb.co/Tx8pK3cf/7LOTTERY.jpg"} alt="" />
            </div>
          </div>
        )}
        {id == 11 && (
          <div>
            <img
              src={bannergetData?.activity?.ban1}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              Invite Friends To Get Bonus
            </h3>
            <div className="container-section">
              {/* <img src={bannergetData?.activity?.ban1012} alt="" /> */}
              <img src={"https://i.ibb.co/ch8M1Z9f/bglottery07.jpg"} alt="" />
            </div>
          </div>
        )}
        {id == 12 && (
          <div>
            <img
              src={bannergetData?.activity?.ban105}
              alt=""
              className="w-full"
            />
            <h3 className="heading-h3 text-center mt-3 mb-1 text-whites font-medium">
              PARTNER REWARDS BONUS
            </h3>
            <div className="container-section">
              <img src={bannergetData?.activity?.ban1012} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ActivityDetail;
