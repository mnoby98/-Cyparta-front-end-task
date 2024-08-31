import Navbar from "./Navbar";
import rightarrow from "@/public/Sidebar/rightArrow.svg";
import Image from "next/image";

const layout = ({ children }) => {
  return (
    <div className=" w-full font-lexend">
      <Navbar />
      <div className=" mt-[38px] ml-[57px] font-inter font-semibold text-[16px] flex gap-[10px] items-center ">
        <span>Employees</span>
        <span>
          <Image
            src={rightarrow}
            alt=""
          />
        </span>
        <span>Profile</span>
      </div>
      {children}
    </div>
  );
};

export default layout;
