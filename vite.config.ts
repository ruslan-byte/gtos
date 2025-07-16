import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        theme_color: "#8936FF",
        background_color: "#2EC6FE",
        orientation: "any",
        display: "standalone",
        lang: "ru-RU",
      },
    }),
  ],
});
