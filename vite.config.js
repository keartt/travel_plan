import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";
import cesium from 'vite-plugin-cesium';

// https://vite.dev/config/
export default defineConfig({
    base:'/travel_plan/',
    assetsInclude: ['**/*.glb', '**/*.ifc', '**/*.wasm'],
    plugins: [react(), tailwindcss(), flowbiteReact(), cesium()],
    server: {
        port: 5174,
        strictPort: true
    },
    define: {
        CESIUM_BASE_URL: JSON.stringify('/cesium'),
    },
});
