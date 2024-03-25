import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="bg-[#EDBB99] p-2 w-96 h-96 flex flex-col  items-center">
      <h1>Products Page</h1>
      <Outlet />
    </div>
  );
}
