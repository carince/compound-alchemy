import vercel from "vite-plugin-vercel";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    vike({
      prerender: true,
    }),
    react({}),
    vercel(),
    tsconfigPaths()
  ],
});
