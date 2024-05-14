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
import airtime from "../assets/airtime.svg";
import giftcard from "../assets/giftcard.svg";
import billpay from "../assets/billpay.svg";
import calculator from "../assets/calculator.svg";
import send from "../assets/send.png";
import receive from "../assets/receive.png";

const Dashboard = () => {
  return (
    <main className="w-full h-[100vh] text-white bg-[#030F3A] flex flex-col items-center justify-start relative px-[25px] pt-[14px]">
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

      <div className="mt-[32px] flex items-center gap-4 relative">
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

          <div className="mt-[32.87px] flex gap-4 w-full items-center justify-center">
            <button className="w-[101px] h-[31px] flex items-center justify-center border border-[#0B4FFF] rounded-[10px] gap-[7px] cursor-pointer z-10">
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
              <span className="text-white text-[7.7px] font-extrabold leading-[140%]">
                Fund Wallet
              </span>
            </button>
            <button className="w-[101px] h-[31px] flex items-center justify-center border border-[#0B4FFF] bg-[#0B4FFF] rounded-[10px] flex-row-reverse gap-[7px] z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
              >
                <path
                  d="M8.25004 5.50017C8.24781 5.25904 8.15065 5.0285 7.97962 4.85851L6.01337 2.88767C5.9275 2.80231 5.81133 2.75439 5.69025 2.75439C5.56916 2.75439 5.453 2.80231 5.36712 2.88767C5.32417 2.93028 5.29007 2.98097 5.2668 3.03683C5.24353 3.09268 5.23155 3.15259 5.23155 3.21309C5.23155 3.2736 5.24353 3.3335 5.2668 3.38935C5.29007 3.44521 5.32417 3.4959 5.36712 3.53851L6.87504 5.04184H2.29171C2.17015 5.04184 2.05357 5.09013 1.96762 5.17608C1.88166 5.26204 1.83337 5.37861 1.83337 5.50017C1.83337 5.62173 1.88166 5.73831 1.96762 5.82426C2.05357 5.91022 2.17015 5.9585 2.29171 5.9585H6.87504L5.36712 7.46642C5.28082 7.55212 5.23209 7.66859 5.23166 7.79022C5.23123 7.91184 5.27913 8.02865 5.36483 8.11496C5.45053 8.20127 5.567 8.24999 5.68863 8.25042C5.81025 8.25085 5.92707 8.20295 6.01337 8.11725L7.97962 6.14642C8.15177 5.9753 8.24902 5.74289 8.25004 5.50017Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-[7.7px] font-extrabold leading-[140%]">
                Send Money
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-11 min-h-[96px] rounded-[15px] items-center justify-center border border-white/30 bg-white/10 gap-1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            className="w-3 h-3"
          >
            <path
              d="M7.79167 5.04167H5.95833V3.20833C5.95833 3.08678 5.91004 2.9702 5.82409 2.88424C5.73814 2.79829 5.62156 2.75 5.5 2.75C5.37844 2.75 5.26186 2.79829 5.17591 2.88424C5.08996 2.9702 5.04167 3.08678 5.04167 3.20833V5.04167H3.20833C3.08678 5.04167 2.9702 5.08996 2.88424 5.17591C2.79829 5.26186 2.75 5.37844 2.75 5.5C2.75 5.62156 2.79829 5.73814 2.88424 5.82409C2.9702 5.91004 3.08678 5.95833 3.20833 5.95833H5.04167V7.79167C5.04167 7.91322 5.08996 8.0298 5.17591 8.11576C5.26186 8.20171 5.37844 8.25 5.5 8.25C5.62156 8.25 5.73814 8.20171 5.82409 8.11576C5.91004 8.0298 5.95833 7.91322 5.95833 7.79167V5.95833H7.79167C7.91322 5.95833 8.0298 5.91004 8.11576 5.82409C8.20171 5.73814 8.25 5.62156 8.25 5.5C8.25 5.37844 8.20171 5.26186 8.11576 5.17591C8.0298 5.08996 7.91322 5.04167 7.79167 5.04167Z"
              fill="white"
            />
          </svg>
          <h4 className="w-[17px] text-center text-[6px] font-extrabold leading-[140%]">
            Add Wallet
          </h4>
        </div>

        <div className="absolute -bottom-[19px] flex items-center left-0 right-0 mx-auto w-[62px] gap-1">
          <div className="bg-white w-8 h-1.5 rounded-full" />
          <div className="bg-white w-1.5 h-1.5 rounded-full" />
          <div className="bg-white w-1.5 h-1.5 rounded-full" />
          <div className="bg-white w-1.5 h-1.5 rounded-full" />
        </div>
      </div>

      <div className="w-[380px] h-[107px] border rounded-[15px] border-[#BAD4FF47] flex items-center justify-center relative mt-[47px]">
        <div className="absolute -top-[12px] left-[14px] w-[108px] h-[25px] bg-[#030F3A] flex items-center justify-center">
          <h4 className="leading-[140%] text-[12px] font-bold">
            Quick Actions ⚡️
          </h4>
        </div>

        <div className="w-full flex gap-[6px] items-start pt-[2px] justify-between px-[35px]">
          <div className="flex flex-col gap-2 max-w-max items-center cursor-pointer">
            <img src={airtime} alt="" className="w-5 h-5" />
            <h4 className="text-[#667AAC] text-[8px] font-semibold leading-[12px]">
              Airtime
            </h4>
          </div>
          <div className="flex flex-col gap-2 max-w-max items-center cursor-pointer">
            <img src={giftcard} alt="" className="w-5 h-5" />
            <h4 className="text-[#667AAC] text-[8px] font-semibold leading-[12px]">
              Giftcard
            </h4>
          </div>
          <div className="flex flex-col gap-2 max-w-max items-center cursor-pointer">
            <img src={billpay} alt="" className="w-5 h-5" />
            <h4 className="text-[#667AAC] text-[8px] font-semibold leading-[12px]">
              Billpay
            </h4>
          </div>
          <div className="flex flex-col gap-2 max-w-max items-center cursor-pointer">
            <img src={calculator} alt="" className="w-5 h-5" />
            <h4 className="text-[#667AAC] text-[8px] font-semibold leading-[12px]">
              Calculator
            </h4>
          </div>
        </div>
      </div>

      <div className="w-[380px] mt-10">
        <div className="flex justify-between w-full">
          <h3 className="text-[#5A6D9C] text-[14px] font-bold leading-[140%]">
            Today, Oct 25
          </h3>
          <div className="cursor-pointer flex gap-2 items-center">
            <h3 className="text-white text-[14px] font-bold leading-[140%]">
              All transactions
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              className="w-[13px] h-[13px]"
            >
              <path
                d="M7.75002 3.49989C7.74738 3.21492 7.63256 2.94246 7.43044 2.74156L5.10669 0.412395C5.0052 0.31151 4.86791 0.254883 4.72481 0.254883C4.58171 0.254883 4.44442 0.31151 4.34294 0.412395C4.29217 0.46275 4.25187 0.522659 4.22437 0.588666C4.19687 0.654673 4.18271 0.725472 4.18271 0.796978C4.18271 0.868485 4.19687 0.939283 4.22437 1.00529C4.25187 1.0713 4.29217 1.13121 4.34294 1.18156L6.12502 2.95823H0.708354C0.564695 2.95823 0.42692 3.01529 0.325338 3.11688C0.223755 3.21846 0.166687 3.35623 0.166687 3.49989C0.166687 3.64355 0.223755 3.78133 0.325338 3.88291C0.42692 3.98449 0.564695 4.04156 0.708354 4.04156H6.12502L4.34294 5.82364C4.24094 5.92492 4.18335 6.06257 4.18284 6.20631C4.18234 6.35005 4.23895 6.4881 4.34023 6.5901C4.44151 6.69209 4.57916 6.74968 4.7229 6.75019C4.86664 6.7507 5.00469 6.69408 5.10669 6.5928L7.43044 4.26364C7.63388 4.06141 7.74881 3.78675 7.75002 3.49989V3.49989Z"
                fill="#468BFF"
              />
            </svg>
          </div>
        </div>

        <div className="w-full mt-7">
          <div className="w-full flex justify-between items-center border-b border-[#BAD4FF1A] pb-[13px]">
            <div className="flex gap-3 items-center">
              <img src={send} alt="" className="min-w-[35.8px]" />
              <div className="flex flex-col items-start gap-[3px]">
                <h3 className="text-[#F9FAFB] text-[14px] font-black leading-[150%]">
                  To Gym
                </h3>
                <p className="text-white/40 text-[10px] leading-[150%] font-semibold">
                  Sent
                </p>
              </div>
            </div>

            <h3 className="text-[#ECD1FF] font-black leading-[150%] text-[14px] text-right">
              - $45.99
            </h3>
          </div>
          <div className="w-full flex justify-between items-center border-b border-[#BAD4FF1A] py-[13px]">
            <div className="flex gap-3 items-center">
              <img src={receive} alt="" className="min-w-[35.8px]" />
              <div className="flex flex-col items-start gap-[3px]">
                <h3 className="text-[#F9FAFB] text-[14px] font-black leading-[150%]">
                  Bank of America
                </h3>
                <p className="text-white/40 text-[10px] leading-[150%] font-semibold">
                  Deposit
                </p>
              </div>
            </div>

            <h3 className="text-[#52D4FF] font-black leading-[150%] text-[14px] text-right">
              + $1,328.00
            </h3>
          </div>
          <div className="w-full flex justify-between items-center py-[13px]">
            <div className="flex gap-3 items-center">
              <img src={send} alt="" className="min-w-[35.8px]" />
              <div className="flex flex-col items-start gap-[3px]">
                <h3 className="text-[#F9FAFB] text-[14px] font-black leading-[150%]">
                  To Brody Armando
                </h3>
                <p className="text-white/40 text-[10px] leading-[150%] font-semibold">
                  Sent
                </p>
              </div>
            </div>

            <h3 className="text-[#ECD1FF] font-black leading-[150%] text-[14px] text-right">
              - $699.00
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full h-[105px] border-t rounded-t-[20px] fixed -bottom-6 border-[#BAD4FF47] flex bg-[#030F3A]">
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
