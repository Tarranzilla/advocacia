import { useRouter } from "next/router";
import Head from "next/head";

import expertiseList from "@/content_lists/expertise_list";

import { motion as m, AnimatePresence } from "framer-motion";

export default function Expertise() {
    const router = useRouter();
    const { expertiseKey } = router.query;

    // Find the expertise with the matching key
    const expertise = expertiseList.find((expertise) => expertise.key === expertiseKey);

    // Render the expertise details
    return (
        <>
            <Head>
                <title>{"Stresser & Machado | " + expertise?.title}</title>
                <meta name="description" content="Advocacia Ágil e Eficaz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} key={expertise?.key}>
                <main className="Page_Wrapper">
                    <h1>{expertise?.title}</h1>
                    <p>{expertise?.description}</p>

                    <button>Agende uma Consulta</button>
                </main>
            </m.div>
        </>
    );
}
