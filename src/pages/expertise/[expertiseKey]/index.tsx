import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import expertiseList from "@/content_lists/expertise_list";

import { motion as m, AnimatePresence } from "framer-motion";

import { Expertise } from "@/types/Expertise";

const descriptionMap = {
    direito_do_trabalho: {
        title: "Direito do Trabalho",
        description:
            "Oferecemos orientação jurídica confiável e ágil para empregadores e empregados, abordando questões como contratos, demissões, rescisões e direitos trabalhistas.",
    },
    direito_previdenciario: {
        title: "Direito Previdenciário",
        description:
            "Com expertise em Direito Previdenciário, nosso escritório fornece assistência abrangente em questões relacionadas à Previdência Social, incluindo aposentadorias, benefícios por incapacidade, pensões e revisões de benefícios.",
    },
    direito_tributario: {
        title: "Direito Tributário",
        description:
            "Especializados em Direito Tributário, oferecemos suporte legal em questões fiscais, incluindo planejamento tributário, contestação de autuações, recuperação de tributos e defesa em processos administrativos e judiciais.",
    },
    direito_civil: {
        title: "Direito Civil",
        description:
            "Com vasta experiência em Direito Civil, nossa equipe oferece assistência em diversas áreas, como contratos, responsabilidade civil, direitos reais, sucessões, obrigações e questões relacionadas à propriedade.",
    },
    direito_familia: {
        title: "Direito de Família",
        description:
            "Especializados em Direito de Família, prestamos suporte legal em questões como divórcio, pensão alimentícia, guarda de filhos, inventários, adoções, investigação de paternidade e outras questões familiares delicadas.",
    },
    direito_sucessoes: {
        title: "Direito das Sucessões",
        description:
            "Com expertise em Direito das Sucessões, oferecemos assistência em processos de inventário, partilha de bens, testamentos, planejamento sucessório e questões relacionadas à herança e patrimônio.",
    },
    direito_imobiliario: {
        title: "Direito Imobiliário",
        description:
            "Fornecemos suporte legal em transações imobiliárias, contratos de locação, regularização de propriedades, litígios envolvendo imóveis, condomínios e questões relacionadas ao direito de propriedade.",
    },
    direito_empresarial: {
        title: "Direito Empresarial",
        description:
            "Prestamos suporte jurídico a empresas em questões como constituição e dissolução de sociedades, contratos comerciais, recuperação judicial, falência, propriedade intelectual e questões societárias.",
    },
    direito_agronegocio: {
        title: "Direito do Agronegócio",
        description:
            "Oferecemos suporte jurídico para empresas e produtores rurais em questões como contratos agrícolas, regularização fundiária, licenciamento ambiental, financiamento agrícola e litígios relacionados ao setor agropecuário.",
    },
    direito_bancario: {
        title: "Direito Bancário",
        description:
            "Oferecemos assistência jurídica em questões como contratos bancários, financiamentos, cobranças, defesa do consumidor bancário, disputas contratuais e litígios com instituições financeiras.",
    },
    // Add more queries and descriptions as needed
};

export async function getStaticPaths() {
    const paths = expertiseList.map((expertise) => ({
        params: { expertiseKey: expertise.key },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { expertiseKey: string } }) {
    // Get the data for this page based on params
    const expertiseKey = params.expertiseKey;
    const expertise = expertiseList.find((expertise) => expertise.key === expertiseKey);

    if (!expertise) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            expertise,
        },
    };
}

export default function ExpertiseDetail({ expertise }: { expertise: Expertise }) {
    const message = "Olá, eu gostaria de agendar uma consulta relacionada a " + expertise.title + ".";

    function toUrlValidString(str: string) {
        return encodeURIComponent(str);
    }

    // Render the expertise details
    return (
        <>
            <Head>
                <title>{"Stresser & Machado | " + expertise.title}</title>
                <meta name="description" content={expertise.metadescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} key={expertise.key}>
                <main className="Page_Wrapper Expertise_Page_Wrapper">
                    <h1 className="Expertise_Page_Title">{expertise.title}</h1>
                    <p className="Expertise_Page_Description">{expertise.description}</p>

                    {expertise.subitems && (
                        <div className="Expertise_SubItems_List">
                            {expertise.subitems.map((subitem, index) => (
                                <div className="Expertise_SubItem" key={index}>
                                    <h3 className="SubItem_Title">{subitem.title}</h3>
                                    <p className="SubItem_Description">{subitem.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="Expertise_Page_Footer">
                        <Link className="Schedule_Btn" href={"/#areas-de-atuacao"}>
                            <span className="material-icons">keyboard_return</span>
                            Voltar para Áreas de Atuação
                        </Link>

                        <Link
                            className="Schedule_Btn"
                            href={`https://wa.me/1234567890?text=${toUrlValidString(message)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agende uma Consulta
                            <span className="material-icons">event_available</span>
                        </Link>
                    </div>
                </main>
            </m.div>
        </>
    );
}
