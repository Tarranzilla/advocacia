export type Expertise_List = {
    key: string;
    title: string;
    description: string;
    imgSrc: string;
    size: {
        width: number;
        height: number;
    };
    pageLink: string;
};

export const expertiseList: Expertise_List[] = [
    {
        key: "direito_civil",
        title: "Direito Civil",
        description:
            "Esta área abrange questões relacionadas a contratos, responsabilidade civil, família, sucessões, entre outros aspectos do direito privado.",
        imgSrc: "/expertise_imgs/direito_civil_001.png",
        size: {
            width: 740,
            height: 420,
        },
        pageLink: "/expertise/direito_civil",
    },
    {
        key: "direito_criminal",
        title: "Direito Criminal",
        description:
            "Atuação em processos penais, defesa de acusados e vítimas, crimes contra a vida, patrimônio, entre outros aspectos do direito penal.",
        imgSrc: "/expertise_imgs/direito_criminal_001.png",
        size: {
            width: 740,
            height: 420,
        },
        pageLink: "/expertise/direito_criminal",
    },
    {
        key: "direito_trabalhista",
        title: "Direito Trabalhista",
        description:
            "Abrange questões relacionadas a relações de trabalho, como contratos, rescisões, assédio moral, questões sindicais, entre outros.",
        imgSrc: "/expertise_imgs/direito_trabalhista_001.png",
        size: {
            width: 740,
            height: 420,
        },
        pageLink: "/expertise/direito_trabalhista",
    },
    {
        key: "direito_administrativo",
        title: "Direito Administrativo",
        description:
            "Atuação em processos envolvendo o poder público, licitações, contratos administrativos, responsabilidade do Estado, entre outros aspectos.",
        imgSrc: "/expertise_imgs/direito_administrativo_001.png",
        size: {
            width: 740,
            height: 420,
        },
        pageLink: "/expertise/direito_administrativo",
    },
];

export default expertiseList;
