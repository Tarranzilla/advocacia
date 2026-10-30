import Link from "next/link";
import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function Cookies() {
    const [hasAnswered, setHasAnswered] = useState(true); // default true to avoid flash on initial load
    const router = useRouter();

    const currentLocale = router.locale;
    const t = useSimpleTranslation();

    useEffect(() => {
        const saved = localStorage.getItem("cookieConsent") || localStorage.getItem("cookie");
        if (!saved) {
            setHasAnswered(false);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem("cookieConsent", "accepted");
        localStorage.setItem("cookie", "true");
        setHasAnswered(true);
    };

    const handleEssentialOnly = () => {
        localStorage.setItem("cookieConsent", "essential");
        localStorage.setItem("cookie", "false");
        setHasAnswered(true);
    };

    // Don't show the cookie banner on /privacidade and /termos-de-uso
    const shouldShowCookieBanner = !hasAnswered && !["/privacidade", "/termos-de-uso"].includes(router.pathname);

    return (
        <AnimatePresence mode="wait">
            {shouldShowCookieBanner && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    key={"cookies-banner"}
                    className="Cookie"
                >
                    <div className="Cookie_Container">
                        <h2 className="Cookie_Title">{t.cookies.title}</h2>
                        {currentLocale === "en" ? (
                            <>
                                <p className="Cookie_Text">This website uses cookies to ensure that you get the best experience.</p>
                                <p className="Cookie_Text">
                                    By continuing to use this site, you agree to our <Link href="/privacidade">privacy policy</Link> and our{" "}
                                    <Link href="/termos-de-uso">terms of use</Link>.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="Cookie_Text">Nós usamos cookies para melhorar a sua experiência no nosso site.</p>
                                <p className="Cookie_Text">
                                    Ao continuar a navegar, você concorda com a nossa <Link href="/privacidade">política de privacidade</Link> e com
                                    nossos <Link href="/termos-de-uso">termos de uso</Link>.
                                </p>
                            </>
                        )}
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                            <button
                                className="Cookie_Btn"
                                onClick={handleAcceptAll}
                                style={{ flex: 1, minWidth: "140px" }}
                            >
                                {t.cookies.acceptAllBtnText || t.cookies.btnText}
                            </button>
                            <button
                                className="Cookie_Btn Cookie_Btn_Secondary"
                                onClick={handleEssentialOnly}
                                style={{ flex: 1, minWidth: "140px" }}
                            >
                                {t.cookies.essentialOnlyBtnText || (currentLocale === "en" ? "Necessary Only" : "Apenas Necessários")}
                            </button>
                        </div>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
}
