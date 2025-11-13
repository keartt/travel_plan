import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Error } from "../components/loading/Error.jsx";
import Page3D from "../pages/Page3D.jsx";
import Page2D from "../pages/Page2D.jsx";
import MainLayout from "../layout/MainLayout.jsx";

export default function MainRouter (){
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Navigate to="/2d" replace />} />
              <Route path="/2d" element={<Page2D />} />
              <Route path="/3d" element={<Page3D />} />
            </Route>

            <Route path="/403" element={<Error code={403} message={"접근 권한이 없습니다"}/>}/>
            <Route path="*" element={<Error code={404} message={"존재하지 않는 페이지입니다"} />}/>
        </Routes>
    )
};
