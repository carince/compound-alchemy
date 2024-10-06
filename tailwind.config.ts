import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
} satisfies Config;
