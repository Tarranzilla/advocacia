import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Intro />
            <Navbar />
            <AnimatePresence mode="wait">
                <Component {...pageProps} />
            </AnimatePresence>
            <Footer />
        </>
    );
}
