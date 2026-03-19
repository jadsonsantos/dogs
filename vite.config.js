import react from "@vitejs/plugin-react"
import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
      contexts: path.resolve(__dirname, "src/contexts"),
      hooks: path.resolve(__dirname, "src/hooks"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
})
