"use client"

import { motion } from "motion/react";

import Branding from "@/components/Branding";

export default function EndingPage() {
    const defaultAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };

    return (
        <div className="h-full w-full flex flex-col items-center bg-base-100">
            <div className="h-screen flex flex-col justify-center p-5 w-full md:w-3/4 gap-5">
                <motion.span
                    className="text-5xl sm:text-6xl font-bold self-center"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                        hidden: {},
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    {
                        "Thank You!".split("").map((char, charIndex) => (
                            <motion.span
                                variants={defaultAnimation}
                                key={`${char}-${charIndex}`}
                                className="inline-block whitespace-nowrap"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                </motion.span>
                <motion.div className="text-sm md:text-xl text-left">
                    Thank you for participating in our research! We would like to extend our heartfelt gratitude for your participation in our research study. <br /><br />

                    Your time and effort in completing the tests and using our app are deeply appreciated. Your honest and thoughtful responses are invaluable in helping us achieve the objectives of this study. Your contribution brings us closer to gaining meaningful insights and making a positive impact in this field. <br /><br />

                    Once again, thank you for your dedication and support. Your participation is truly valued and has made a significant difference. <br /><br />

                    Thank you for being a part of this journey, <br /><br />
                    <Branding className="w-3/4" classNameLogo="w-12" classNameText="text-2xl pt-1 pb-1" />
                    <p className="text-md pt-2">Made with ❤️ by 12 - St. Agatha of Sicily</p>
                </motion.div>
            </div>
        </div>
    );
}
