import Image from "next/image";
import { useState, useEffect } from "react";

import { motion as m, AnimatePresence } from "framer-motion";

export default function Intro() {
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(false);
        }, 4000);

        return () => clearTimeout(timer); // This will clear the timer when the component unmounts
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isMounted && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="Intro">
                        <div className="Intro_Content">
                            <Image className="Intro_Image" src={"/brand_imgs/Full_Logo_Orange.png"} alt="Logo" width={400} height={400} />
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
