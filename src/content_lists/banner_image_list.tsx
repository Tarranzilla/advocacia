export type Image_List = {
    key: string;
    title: string;
    subtitle: string;
    actionBtn?: string;
    actionBtnLink?: string;
    imgSrc: string;
    size: {
        width: number;
        height: number;
    };
};

const banner_image_list: Image_List[] = [
    {
        key: "banner1",
        title: "Maximize sua Aposentadoria",
        subtitle: "Descubra se você tem direito à Revisão da Vida Toda e aumente sua aposentadoria agora mesmo!",
        imgSrc: "/banner_imgs/banner_aposentadoria_001.png",
        size: {
            width: 740,
            height: 420,
        },
    },
    {
        key: "banner2",
        title: "Assessoria Especializada em Benefícios do INSS",
        subtitle: "Obtenha orientação profissional para garantir seus direitos previdenciários. Conte com nossa experiência!.",
        imgSrc: "/banner_imgs/banner_inss_001.png",
        size: {
            width: 740,
            height: 420,
        },
    },
    {
        key: "banner3",
        title: "Facilite o Processo de Inventário",
        subtitle: "Apoio jurídico especializado para agilizar e simplificar o processo de inventário.",
        imgSrc: "/banner_imgs/banner_inventario_001.png",
        size: {
            width: 740,
            height: 420,
        },
    },
    {
        key: "banner4",
        title: "Proteja seus Direitos no Trabalho",
        subtitle:
            "Garanta um ambiente de trabalho justo e equilibrado. Conte com nossa expertise em Direito Trabalhista para defender seus interesses e garantir seus direitos laborais!",
        imgSrc: "/banner_imgs/banner_trabalhista_001.png",
        size: {
            width: 740,
            height: 420,
        },
    },
];

export default banner_image_list;
