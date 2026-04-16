import React, { useEffect } from "react";
import "./activity.css";
import Layout from "../../layout/Layout";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

// const ActivityAward = "";
const InvitationImg = "https://i.ibb.co/Cs7tbH06/invitation-Bonus.webp";
const AcitivityReward = "https://i.ibb.co/60fp56NM/activity-Reward.png";
const bettingImg = 'https://i.ibb.co/Kz8vtWT/Betting-Rebate.png"';
const SupperImg = "https://i.ibb.co/1MbggqG/super-Jackpot.png";
const MemberGiftImg = "https://i.ibb.co/Hg13hYF/member-Gift.png";

const GiftImg = "https://i.ibb.co/GkJh6My/sign-In-Banner.png";
const AttendanceImg = "https://i.ibb.co/PCm07tj/gift-Redeem.png";

const Activity = () => {
  const { loader, bannergetData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="flex justify-center nav-bg sticky top-0">
        <img
          src={bannergetData?.gameall?.logo1}
          alt=""
          loading="lazy"
          className="w-36"
        />
      </div>

      {loader && <Loader />}
      <div className="nav-bg p-5">
        <h3 className="heading-h3 font-medium mb-2">Activity</h3>
        <p className="fs-sm pb-1">Please remember to follow the event page</p>
        <p className="fs-sm">
          We will launch user feedback activities from to time
        </p>
      </div>
      <div className="container-section mt-3">
        <div className="flex justify-around items-center">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => navigate("/main/ActivityAward")}
          >
            <img src={AcitivityReward} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text text-center whitespace-nowrap leading-3 mt-2">
              Activity <br /> Reward
            </p>
          </div>
          <div
            className=" flex flex-col justify-center items-center "
            onClick={() => navigate("/main/InvitationBonus")}
          >
            <img src={InvitationImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text text-center leading-3 mt-2">
              Invitation <br /> Bonus
            </p>
          </div>

          <div
            className=" flex flex-col justify-center items-center"
            onClick={() => navigate("/main/Laundry")}
          >
            <img src={bettingImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text text-center leading-3 mt-2">
              Betting <br /> rebate
            </p>
          </div>
          {/* <div
            className=" flex flex-col justify-center items-center"
            onClick={() => navigate("/main/SuperJackpot")}
          >
            <img src={SupperImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text  text-center leading-3 mt-2">
              Super
              <br />
              Jackpot
            </p>
          </div> */}
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => navigate("/main/firstgift")}
          >
            <img src={MemberGiftImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text text-center whitespace-nowrap leading-3 mt-2">
              Frist Gift
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 mt-5">
          <div
            className="col-span-6 bg-body rounded-md"
            onClick={() => navigate("/main/RedeemGift")}
          >
            <img src={GiftImg} alt="" loading="lazy" />
            <div className="p-2 mb-3">
              <h3 className="heading-h3 text-whites mb-1 text-base font-bold">
                Gift
              </h3>
              <p className="gray-text fs-sm">
                Enter the redemption code to recieve gift rewards
              </p>
            </div>
          </div>
          <div
            className="col-span-6 bg-body rounded-md"
            onClick={() => navigate("/activity/DailySignIn")}
          >
            <img src={AttendanceImg} alt="" loading="lazy" />
            <div className="p-2 mb-3">
              <h3 className="heading-h3 text-whites mb-1 text-base font-bold">
                Attendance bonus
              </h3>
              <p className="gray-text fs-sm">
                The more consecutive days you sign in, the higher the reward
                will be.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=10")}
        >
          <img
            src={"https://i.ibb.co/dwhYN9rw/7lottery.jpg"}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Lottery7 Protect Yourself From Scams
          </h3>
        </div>
        {/* <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=11")}
        >
          <img
            src={bannergetData?.activity?.ban1}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Invite Friends To Get Bonus
          </h3>
        </div> */}

        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=2")}
        >
          <img
            src={bannergetData?.activity?.ban2}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            First Deposit Loss Bonus 35%
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=3")}
        >
          <img
            src={bannergetData?.activity?.ban3}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            2nd & 3rd Recharge Bonus – Get up to ₹777!
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=4")}
        >
          <img
            src={bannergetData?.activity?.ban4}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Recharge for bonus up to 4%
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=5")}
        >
          <img
            src={bannergetData?.activity?.ban5}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Loss Bonus 5%
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=6")}
        >
          <img
            src={bannergetData?.activity?.ban6}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Betting Rebate
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=7")}
        >
          <img
            src={bannergetData?.activity?.ban7}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            WEEKLY SLOT BETTING CHALLENGE
          </h3>
        </div>

        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/main/InvitationBonus")}
        >
          <img
            src={bannergetData?.activity?.ban8}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Player invitation reward collection
          </h3>
        </div>

        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=9")}
        >
          <img
            src={bannergetData?.activity?.ban9}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Partner Rewards
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=8")}
        >
          <img
            // src={bannergetData?.activity?.ban11}
            src="https://i.ibb.co/jkWYJwj1/7lottery-2.jpg
"
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Benefits of Using ARWALLET
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
