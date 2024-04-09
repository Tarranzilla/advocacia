import { motion as m } from "framer-motion";
import Link from "next/link";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Expertise } from "@/types/Expertise";

export default function Menu() {
    const router = useRouter();
    const t = useSimpleTranslation();

    const expertiseAreas = t.landingPage.sections.expertise.expertiseList;

    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState<Expertise[]>([]);

    const changeLanguage = () => {
        const currentLocale = router.locale;
        const newLocale = currentLocale === "en" ? "pt-BR" : "en";
        const currentPath = router.asPath;
        router.push(currentPath, currentPath, { locale: newLocale });
    };

    useEffect(() => {
        if (searchInput === "") {
            setSearchResults([]);
        } else {
            const results = expertiseAreas.filter((expertise) => expertise.title.toLowerCase().includes(searchInput.toLowerCase()));
            setSearchResults(results);
        }
    }, [searchInput, expertiseAreas]);

    return (
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

            <div className="Footer_Btn Lang_Btn" title={t.footer.langBtn?.label} onClick={changeLanguage}>
                <span className="Footer_Icon material-icons">language</span>
            </div>

            <div className="Menu_Nav">
                {t.menu.links &&
                    t.menu.links.map((link, index) => {
                        return (
                            <Link key={index} className="" href={link.path}>
                                {link.name}
                            </Link>
                        );
                    })}
            </div>

            <div className="Search_Results">
                {searchResults.map((result) => (
                    <Link key={result.key} href={result.pageLink}>
                        <div className="Search_Result">
                            <h3>{result.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </m.div>
    );
}
