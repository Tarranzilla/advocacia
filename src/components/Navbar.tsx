import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useRouter } from "next/router";

import { Expertise } from "@/types/Expertise";

export default function Navbar() {
    const router = useRouter();
    const t = useSimpleTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const expertiseAreas = t.landingPage.sections.expertise.expertiseList;

    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState<Expertise[]>([]);

    const changeLanguage = () => {
        const currentLocale = router.locale;
        const newLocale = currentLocale === "en" ? "pt-BR" : "en";
        const currentPath = router.asPath;
        router.push(currentPath, currentPath, { locale: newLocale });
    };

    const removeAccents = (str: string) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f\u02C6-\u02C8\u02D8-\u02DD\u02DA\u02DB\u02C7\u02D9]/g, "");
    };

    useEffect(() => {
        if (searchInput === "") {
            setSearchResults([]);
        } else {
            const results = expertiseAreas.flatMap((expertise) => {
                const matches = [];
                if (removeAccents(expertise.title.toLowerCase()).includes(removeAccents(searchInput.toLowerCase()))) {
                    matches.push(expertise);
                }
                if (expertise.subitems) {
                    expertise.subitems.forEach((subitem) => {
                        if (removeAccents(subitem.title.toLowerCase()).includes(removeAccents(searchInput.toLowerCase()))) {
                            matches.push({ ...expertise, title: subitem.title });
                        }
                    });
                }
                return matches;
            });
            setSearchResults(results);
        }
    }, [searchInput, expertiseAreas]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    return (
        <>
            <div className="Navbar">
                <div className="Navbar_Content">
                    <Link href={"/"} className="Logo_Container">
                        <Image className="Logo" src="/brand_imgs/Logo_Orange.png" alt="Logo" width={100} height={100} />
                    </Link>
                    <h1 className="Logo_Type">STRESSER & MACHADO</h1>

                    <div className="Navbar_Links Desktop_Only">
                        {t.navbar.navLinks &&
                            t.navbar.navLinks.map((link, index) => {
                                return (
                                    <Link key={index} className="Navbar_Link" href={link.path}>
                                        {link.name}
                                    </Link>
                                );
                            })}
                    </div>

                    <div className="Menu_Container">
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
                            <input
                                className="Search_Bar_Input"
                                type="text"
                                placeholder="Digite aqui o que busca"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <button className="Search_Bar_Button">
                                <span className="material-icons">search</span>
                            </button>
                        </div>

                        {searchResults.length === 0 && searchInput !== "" && (
                            <p className="No_Search_Matches_Info">{t.common.noSearchResultsFound}</p>
                        )}

                        <div className="Menu_Nav">
                            {searchResults.length > 0
                                ? searchResults.map((result, index) => (
                                      <Link
                                          key={index}
                                          className="Search_Result_Link"
                                          href={result.pageLink}
                                          onClick={() => {
                                              setMenuOpen(false);
                                          }}
                                      >
                                          {result.title}
                                      </Link>
                                  ))
                                : t.menu.links &&
                                  t.menu.links.map((link, index) => (
                                      <Link
                                          key={index}
                                          className="Menu_Nav_Link"
                                          href={link.path}
                                          onClick={() => {
                                              setMenuOpen(false);
                                          }}
                                      >
                                          {link.name}
                                      </Link>
                                  ))}
                        </div>

                        <div className="Footer_Btn Menu_Lang_Btn Lang_Btn" title={t.footer.langBtn?.label} onClick={changeLanguage}>
                            <span className="Footer_Icon material-icons">language</span>
                            <p>{t.footer.langBtn?.label}</p>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
