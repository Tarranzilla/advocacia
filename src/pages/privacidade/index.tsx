import { Fragment } from "react";
import Head from "next/head";
import { motion as m } from "framer-motion";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function Privacidade() {
    const t = useSimpleTranslation();

    return (
        <>
            <Head>
                <title>{`${t.common.customTitle} | ${t.privacy.title}`}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="Page_Container">
                <div className="Page_Wrapper">
                    <div className="Privacy_Policy">
                        <h1 className="Section_Title" style={{ marginBottom: "1.5rem" }}>{t.privacy.title}</h1>
                        {t.privacy.paragraphs.map((paragraph, index) => (
                            <Fragment key={index}>
                                <h3>{paragraph.title}</h3>
                                {paragraph.paragraphs.map((p, i) => (
                                    <p key={i + "_Paragraph"}>{p}</p>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </m.div>
        </>
    );
}
