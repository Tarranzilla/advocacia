import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

import Menu from "./Menu";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="Navbar">
                <div className="Navbar_Content">
                    <div className="Logo_Container">
                        <Image className="Logo" src="/brand_imgs/Logo_Orange.png" alt="Logo" width={100} height={100} />
                    </div>
                    <h1 className="Logo_Type">STRESSER & MACHADO</h1>

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
                        <span
                            onClick={() => {
                                setMenuOpen(!menuOpen);
                            }}
                            className="material-icons"
                        >
                            menu_book
                        </span>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="Menu">
                        <div className="Search_Bar">
                            <input className="Search_Bar_Input" type="text" placeholder="Digite aqui o que busca" />
                            <button className="Search_Bar_Button">
                                <span className="material-icons">search</span>
                            </button>
                        </div>
                        <div className="Menu_Nav">
                            <Link
                                onClick={() => {
                                    setMenuOpen(!menuOpen);
                                }}
                                href="/#"
                            >
                                Início
                            </Link>
                            <Link
                                onClick={() => {
                                    setMenuOpen(!menuOpen);
                                }}
                                href="/#about_us"
                            >
                                Quem Somos
                            </Link>
                            <Link
                                onClick={() => {
                                    setMenuOpen(!menuOpen);
                                }}
                                href="/#expertise"
                            >
                                Areas de Atuação
                            </Link>
                            <Link
                                onClick={() => {
                                    setMenuOpen(!menuOpen);
                                }}
                                href="/#contact"
                            >
                                Contato
                            </Link>
                            <Link
                                onClick={() => {
                                    setMenuOpen(!menuOpen);
                                }}
                                href="/privacidade"
                            >
                                Privacidade
                            </Link>
                            <Link
                                onClick={() => {
                                    setMenuOpen(!menuOpen);
                                }}
                                href="/termos-de-uso"
                            >
                                Termos de Uso
                            </Link>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
