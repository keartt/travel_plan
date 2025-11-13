import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
      <div className="relative w-full h-screen">
        {/*헤더*/}
        {/*사이드바*/}

        <Outlet/>
      </div>
    )
}