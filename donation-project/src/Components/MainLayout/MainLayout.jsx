import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url(https://i.ibb.co/hYryLbV/Rectangle-4281.jpg)] bg-cover bg-center">
        <div className="max-w-7xl mx-auto ">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
