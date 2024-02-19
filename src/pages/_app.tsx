import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className="Navbar">
                <div className="Navbar_Content">
                    <h1>Stresser & Machado</h1>

                    <div className="Navbar_Links Desktop_Only">
                        <Link className="Navbar_Link" href="/#">
                            Início
                        </Link>
                        <Link className="Navbar_Link" href="/#about_us">
                            Quem Somos
                        </Link>
                        <Link className="Navbar_Link" href="/#expertise">
                            Áreas de Atuação
                        </Link>
                        <Link className="Navbar_Link" href="/#contact">
                            Contato
                        </Link>
                    </div>

                    <div className="Menu_Container Mobile_Only">
                        <span className="material-icons">menu_book</span>
                    </div>
                </div>
            </div>

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
