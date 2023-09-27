import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url(https://i.ibb.co/hYryLbV/Rectangle-4281.jpg)] bg-cover bg-center bg-slate-300 bg-blend-screen">
        <div className="max-w-7xl mx-auto ml-10 lg:ml-48">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
