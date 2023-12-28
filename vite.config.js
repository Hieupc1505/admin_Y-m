import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, mode }) => {
    return {
        plugins: [react()],
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "./src/"),
                "~app": path.resolve(__dirname, "./src/"),
            },
        },
        server: {
            proxy: {
                "^/api/.*": {
                    target: "http://localhost:8080",
                    changeOrigin: true,
                },
            },
        },
    };
});
