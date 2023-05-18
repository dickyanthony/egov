import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/egov/",
  build: {
    outDir: "dist",
  },
  //@ts-ignore
  mimeTypes: {
    "text/javascript": ["js"],
  },
});
