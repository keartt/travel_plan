import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Tailwind & Flowbite-React plugin (항상 먼저)
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
    // <StrictMode>
        <App />
    // </StrictMode>,
)
initThemeMode();
