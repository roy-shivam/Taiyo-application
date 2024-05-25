import SideBarButton from "./sideBarButton";
import Logo from "../../common/logo";
import { AiOutlineLineChart } from "react-icons/ai";
import { LuContact } from "react-icons/lu";

function SideBar() {
  return (
    <div className="h-screen flex w-20">
      <div className="bg-white m-3 flex-1 flex flex-col items-center rounded-2xl shadow-xl">
        <Logo />
        <div className="flex-1 flex justify-center">
          <div className="h-full mt-10 space-y-8 max-h-80 flex flex-col items-center">
            <SideBarButton path={"/"}>
              <LuContact />
            </SideBarButton>
            <SideBarButton path={"charts-and-maps"}>
              <AiOutlineLineChart />
            </SideBarButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
