import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Intro />
            <Navbar />
            <AnimatePresence mode="wait">
                <Component {...pageProps} />
            </AnimatePresence>

            <div className="Footer">
                <p className="Desktop_Only">© 2021 Stresser & Machado</p>

                <div className="Footer_Actions Mobile_Only">
                    <div className="Quote_Btn">
                        <span className="material-icons">summarize</span>
                    </div>
                    <div className="Phone_Btn">
                        <span className="material-icons">phone</span>
                    </div>
                    <div className="Email_Btn">
                        <span className="material-icons">email</span>
                    </div>
                </div>
            </div>
        </>
    );
}
