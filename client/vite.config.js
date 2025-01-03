import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 5173, 
    strictPort: true, 
  },
  plugins: [react(), tsconfigPaths()],
});

