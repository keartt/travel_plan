import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter.jsx";
import {useThemeMode} from "flowbite-react";

export default function App() {
    const { setMode } = useThemeMode();

    useEffect(() => {
        initFlowbite();
        setMode('light');
    }, []);

  return (
    <BrowserRouter basename="/travel_plan/">
        <MainRouter />
    </BrowserRouter>
  );
}