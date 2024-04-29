import home from "../assets/home.svg";
import transaction from "../assets/transaction.svg";
import wallets from "../assets/wallets.svg";
import profile from "../assets/profile.svg";
import exchange from "../assets/exchange.svg";

const Dashboard = () => {
  return (
    <main className="w-full h-[100vh] text-white bg-[#030F3A] flex flex-col items-center justify-center relative">
      <div className="w-full h-[105px] border-t rounded-t-[20px] fixed bottom-0 border-[#BAD4FF47] flex">
        <div className="w-full flex gap-[60px] items-center justify-between px-[45px]">
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
