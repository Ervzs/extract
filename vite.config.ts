import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { codeInspectorPlugin } from "code-inspector-plugin"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base:"/extract/",
  plugins: [codeInspectorPlugin({ bundler: "vite" }), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
