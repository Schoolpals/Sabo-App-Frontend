import home from "../assets/home.svg";
import transaction from "../assets/transaction.svg";
import wallets from "../assets/wallets.svg";
import profile from "../assets/profile.svg";
import exchange from "../assets/exchange.svg";
import user from "../assets/user.svg";
import notification from "../assets/notification.svg";
import cardLine from "../assets/card-line.svg";
import nigeriaFlag from "../assets/nigeria-flag.svg";
import reveal from "../assets/reveal.svg";

const Dashboard = () => {
  return (
    <main className="w-full h-[100vh] text-white bg-[#030F3A] flex flex-col items-center justify-start relative px-[25px] pt-[74px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-[7.78px] items-center">
          <img
            src={user}
            alt=""
            className="w-[34.2px] h-[34.2px] cursor-pointer"
          />
          <div className="flex flex-col items-start ">
            <p className="text-[9.34px] font-medium leading-[140%]">
              Hello 👋,
            </p>
            <h5 className="text-[12px] font-bold leading-[140%]">
              Andrew_ainsley
            </h5>
          </div>
        </div>

        <div className="flex items-center">
          <h4 className="w-[81.2px] text-[10px] font-bold leading-[140%] mr-[8.8px] cursor-pointer">
            Exchange Rate
          </h4>{" "}
          <div className="w-[0.1px] border border-[#BAD4FF4D] h-[30.5px]" />
          <img
            src={notification}
            className="w-[23.4px] ml-[15.4px] cursor-pointer"
            alt=""
          />
        </div>
      </div>

      <div className="mt-[32px]">
        <div className="w-[319px] h-[167px] rounded-[15px] bg-[#00348C80] flex flex-col items-center justify-start p-[22px] relative">
          <img src={cardLine} className="absolute w-full top-0" alt="" />

          <div className="w-full flex justify-between items-center">
            <p className="text-[9.1px] font-medium leading-[140%]">
              Your Naira Balance
            </p>
            <img src={nigeriaFlag} className="w-[26.3px]" alt="" />
          </div>

          <div className="flex w-full items-end gap-[11px] mt-[14.1px]">
            <div className="flex items-start gap-[3.82px]">
              <h3 className="text-[20.2px] leading-[130%] font-extrabold">
                10,250.00
              </h3>{" "}
              <h5 className="text-[8.5px] font-bold mt-[0.85px] leading-[140%]">
                NGN
              </h5>
            </div>
            <img
              src={reveal}
              className="opacity-50 w-[13.4px] mb-[6.4px]"
              alt=""
            />
          </div>

          <button className="w-[101px] h-[31px] flex items-center justify-center border border-[#0B4FFF] rounded-[10px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <path
                d="M7.79167 5.04167H5.95833V3.20833C5.95833 3.08678 5.91004 2.9702 5.82409 2.88424C5.73814 2.79829 5.62156 2.75 5.5 2.75C5.37844 2.75 5.26186 2.79829 5.17591 2.88424C5.08996 2.9702 5.04167 3.08678 5.04167 3.20833V5.04167H3.20833C3.08678 5.04167 2.9702 5.08996 2.88424 5.17591C2.79829 5.26186 2.75 5.37844 2.75 5.5C2.75 5.62156 2.79829 5.73814 2.88424 5.82409C2.9702 5.91004 3.08678 5.95833 3.20833 5.95833H5.04167V7.79167C5.04167 7.91322 5.08996 8.0298 5.17591 8.11576C5.26186 8.20171 5.37844 8.25 5.5 8.25C5.62156 8.25 5.73814 8.20171 5.82409 8.11576C5.91004 8.0298 5.95833 7.91322 5.95833 7.79167V5.95833H7.79167C7.91322 5.95833 8.0298 5.91004 8.11576 5.82409C8.20171 5.73814 8.25 5.62156 8.25 5.5C8.25 5.37844 8.20171 5.26186 8.11576 5.17591C8.0298 5.08996 7.91322 5.04167 7.79167 5.04167Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-[7.7px] font-extrabold">Fund Wallet</span>
          </button>
        </div>

        <div></div>
      </div>

      <div className="w-full h-[105px] border-t rounded-t-[20px] fixed bottom-0 border-[#BAD4FF47] flex">
        <div className="w-full flex gap-[60px] items-start pt-[22px] justify-between px-[45px]">
          <div className="flex flex-col gap-2 max-w-max items-center cursor-pointer">
            <img src={home} alt="" className="w-5 h-5" />
            <h4 className="text-[#E1E3FF] text-[8px] font-semibold leading-[12px]">
              Home
            </h4>
          </div>
          <div className="flex flex-col gap-2 max-w-max items-center cursor-pointer">
            <img src={transaction} alt="" className="w-5 h-5" />
            <h4 className="text-[#E1E3FF] text-[8px] font-semibold leading-[12px]">
              Transaction
            </h4>
          </div>
          <div className="flex flex-col gap-2 max-w-max items-center cursor-pointer">
            <img src={exchange} alt="" className="w-5 h-5" />
            <h4 className="text-[#E1E3FF] text-[8px] font-semibold leading-[12px]">
              Exchange
            </h4>
          </div>
          <div className="flex flex-col gap-2 max-w-max items-center cursor-pointer">
            <img src={wallets} alt="" className="w-5 h-5" />
            <h4 className="text-[#E1E3FF] text-[8px] font-semibold leading-[12px]">
              Wallets
            </h4>
          </div>
          <div className="flex flex-col gap-2 max-w-max items-center cursor-pointer">
            <img src={profile} alt="" className="w-5 h-5" />
            <h4 className="text-[#E1E3FF] text-[8px] font-semibold leading-[12px]">
              Profile
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
