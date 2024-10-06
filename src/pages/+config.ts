import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";
import image from "../../public/logo.png"

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "Compound Alchemy",
  description: "Embark on a magical journey as a wizard mastering the art of alchemy. Discover ancient secrets, brew powerful potions, and unlock the mysteries of the arcane.",
  image: "/logo.png",
  extends: vikeReact,
} satisfies Config;
