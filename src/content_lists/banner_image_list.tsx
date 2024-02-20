export type Image_List = {
    key: string;
    title: string;
    imgSrc: string;
    size: {
        width: number;
        height: number;
    };
};

const banner_image_list: Image_List[] = [
    {
        key: "banner1",
        title: "Somos especialistas em Direito Cível, Trabalhista, Sucessões e Família",
        imgSrc: "/banner_imgs/advocacia_001.png",
        size: {
            width: 740,
            height: 420,
        },
    },
    {
        key: "banner2",
        title: "Atendemos principalmente em Curitiba e Região Metropolitana",
        imgSrc: "/banner_imgs/curitiba_001.png",
        size: {
            width: 740,
            height: 420,
        },
    },
    {
        key: "banner3",
        title: "Banner 3",
        imgSrc: "/banner_imgs/curitiba_002.png",
        size: {
            width: 740,
            height: 420,
        },
    },
    {
        key: "banner4",
        title: "Banner 4",
        imgSrc: "/banner_imgs/curitiba_003.png",
        size: {
            width: 740,
            height: 420,
        },
    },
];

export default banner_image_list;
