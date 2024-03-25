import { Link, useLocation } from "react-router-dom";

import RightArrowImg from "./assets/right-icon.png";

export default function Breadcrumb() {
  const location = useLocation();

  return (
    <div className="bg-white ">
      <ul className=" flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
        <Link
          to={"home"}
          className={`cursor-pointer hover:bg-[#E8DAEF] hover:text-black p-4 rounded-md ${
            location.pathname === "/home" && "bg-[#b572d6] text-white"
          }`}>
          Home
        </Link>
        {location.pathname.includes("/products") && (
          <>
            <img src={RightArrowImg} className="w-5 h-5 " alt="" />
            <Link
              to={"products"}
              className={` hover:text-black cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
                location.pathname.includes("/products") &&
                " bg-[#b572d6] text-white"
              } ${
                location.pathname.includes("/products/") &&
                " bg-[#E8DAEF] text-black"
              }`}>
              Products
            </Link>
          </>
        )}
        {location.pathname.includes(`/products/`) && (
          <>
            <img src={RightArrowImg} className="w-5 h-5 " alt="" />
            <Link
              to={"products"}
              className={`hover:text-black  cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${
                location.pathname.includes("/products") &&
                "bg-[#b572d6] text-white"
              }`}>
              Product Item
            </Link>
          </>
        )}
      </ul>
    </div>
  );
}
