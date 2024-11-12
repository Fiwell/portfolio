import path from "path";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import wasm from "vite-plugin-wasm";

export default defineConfig({
    plugins: [react(), wasm()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            target: "esnext",
        },
    },
    build: {
        target: "esnext",
    },
});
