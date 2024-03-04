import { WebStructure } from "@/types/WebStructure";

import teamList from "@/content_lists/team_list";
import expertiseList from "@/content_lists/expertise_list";
import bannerList from "@/content_lists/banner_list";
import privacyList from "@/content_lists/privacy_list";
import termsList from "@/content_lists/terms_list";

const portugueseWebStructure: WebStructure = {
    common: {
        customScheduleText: "Agende uma Consulta",
        returnToAreasOfExpertise: "Áreas de Atuação",
        customTitle: "Stresser & Machado | Advocacia e Consultoria",
        customDescription:
            "Escritório de Advocacia em Curitiba liderado por duas advogadas experientes, com vinte anos de atuação no mercado e sólida formação acadêmica. Oferecemos uma ampla gama de serviços jurídicos, incluindo direito civil, criminal, trabalhista, administrativo e tributário, com compromisso de fornecer orientação jurídica confiável e personalizada para atender às necessidades individuais de nossos clientes.",
        customWebsiteURL: "https://www.stresseremachado.adv.br",
    },
    navbar: {
        logo: {
            pathURL: "/brand_imgs/Logo_Orange.png",
            title: "Stresser & Machado",
            width: 100,
            height: 100,
            alt: "Logotipo Stresser & Machado",
        },

        navLinks: [
            {
                path: "/",
                name: "Início",
            },
            {
                path: "/#quem-somos",
                name: "Sobre",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Áreas de Atuação",
            },
            {
                path: "/#contato",
                name: "Contato",
            },
        ],
    },
    menu: {
        title: "Menu",
        links: [
            {
                path: "/",
                name: "Início",
            },
            {
                path: "/#quem-somos",
                name: "Sobre",
            },
            {
                path: "/#areas-de-atuacao",
                name: "Áreas de Atuação",
            },
            {
                path: "/#contato",
                name: "Contato",
            },
            {
                path: "/privacidade",
                name: "Privacidade",
            },
            {
                path: "/termos-de-uso",
                name: "Termos de Uso",
            },
        ],
    },
    cookies: {
        title: "Cookies",
        paragraphs: [
            "Este site usa cookies para garantir que você obtenha a melhor experiência.",
            "Ao continuar a usar este site, você concorda com o uso de cookies.",
        ],
        btnText: "Entendi",
    },
    privacy: {
        title: "Política de Privacidade",
        paragraphs: privacyList,
    },
    terms: {
        title: "Termos de Uso",
        paragraphs: termsList,
    },
    landingPage: {
        sections: {
            home: {
                key: "inicio",
                title: "Início",

                scheduleBtn: {
                    title: "Agende uma Consulta",
                    label: "Agende uma Consulta",
                },

                bannerList: bannerList,
            },
            about: {
                key: "quem-somos",
                title: "Quem Somos",
                paragraphs: [
                    "O escritório de advocacia Stresser e Machado é reconhecido pela liderança exemplar de duas advogadas de destaque na área. Com uma sólida experiência adquirida no serviço público e privado, elas trazem consigo um profundo entendimento das nuances legais e dos meandros do sistema jurídico. Ao longo de seus vinte anos de atuação no mercado e formação acadêmica.",
                    "Nosso escritório oferece uma ampla gama de serviços jurídicos, cobrindo áreas como direito trabalhista, previdenciário, tributário, civil e da família. Estamos comprometidos em fornecer orientação jurídica confiável e de alta qualidade para atender às diversas necessidades de nossos clientes.",
                    "Além disso, a abordagem personalizada adotada pelo escritório Stresser e Machado é um diferencial marcante. Compreendemos que cada caso é único e merece atenção individualizada. Assim, trabalhamos em estreita colaboração com nossos clientes, desenvolvendo estratégias jurídicas sob medida para alcançar os melhores resultados possíveis.",
                    "Nosso compromisso com a excelência e a integridade é essencial em cada aspecto de nosso trabalho. Não apenas defendemos os interesses de nossos clientes de forma vigorosa, mas também o fazemos dentro dos mais altos padrões éticos. Isso garante não apenas resultados satisfatórios, mas também a confiança e a satisfação duradouras daqueles que confiam em nossos serviços.",
                ],
            },

            team: {
                key: "equipe",
                title: "Nossa Equipe",
                members: teamList,
            },

            expertise: {
                key: "areas-de-atuacao",
                title: "Áreas de Atuação",
                expertiseList: expertiseList,
            },

            contact: {
                key: "contato",
                title: "Contato",

                telephone: {
                    title: "Telefone",
                },

                functioningHours: {
                    title: "Horário de Funcionamento",
                    schedule: "Segunda a Sexta: 09:00 - 12:00 | 13:00 - 18:00",
                },

                adress: {
                    key: "endereco",
                    title: "Endereço",
                    adress: "Avenida Manoel Ribas, nº 507 - Sala 05 - Mercês Curitiba - PR 80510-346 Brasil",
                },
            },
        },
    },

    pages: [],
    footer: {
        privacyBtn: {
            title: "Política de Privacidade",
            label: "Política de Privacidade",
        },
        termsBtn: {
            title: "Termos de Uso",
            label: "Termos de Uso",
        },
        langBtn: {
            text: "English",
            label: "Mudar para Inglês",
            availableLangs: ["en", "pt-BR"],
        },
        copyRight: "© 2024 Stresser & Machado",

        scheduleBtn: {
            title: "Agende uma Consulta",
            label: "Agende uma Consulta",
        },

        telephoneBtn: {
            title: "Ligue para nós",
            label: "Ligue para nós",
        },

        emailBtn: {
            title: "Envie um Email",
            label: "Envie um Email",
        },
    },
};

export default portugueseWebStructure;
