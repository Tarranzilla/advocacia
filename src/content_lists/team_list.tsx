import { TeamMember } from "@/types/TeamMember";

const teamList: TeamMember[] = [
    {
        picture: "/team_imgs/advogada_001.png",
        name: "Telma Regina Machado",
        role: "Advogada e Gestora",
        OAB_number: "OAB/PR | 60235",
        OAB_Link: "https://www.oabpr.org.br/servicos-consulta-de-advogados/consulta-de-advogado/?oabn=60235&tpinsc=A",
        cellphone: "(41) 9.9119-1904",
        telephone: "(41) 3668-8000",
        email: "telma@stresseremachado.adv.br",

        description: [
            "Pós-graduada em Direito e Processo Tributário pela UNICURITIBA em 2013. Atua na advocacia tributária administrativa e judicial. Membro do Conselho de Contribuintes e Recursos Fiscais/PR, representando a FIEP/PR.",
            "Atualmente, advoga no Conselho de Contribuintes e Recursos Fiscais (CCRF), atuando em sustentação oral e defesas de Contribuintes do Estado do Paraná.",
            "Mestranda em Direito Empresarial e Cidadania na UNIVERSIDADE UNICURITIBA. Possui escritório próprio em Curitiba/PR, atuando nas áreas de Direito Tributário, Imobiliário, Família, Consumidor, Trabalho, Previdenciário e Bancário.",
        ],

        academicBackground: [
            {
                course: "Especialização em Direito Tributário e Processual Tributário",
                date: "2012-2013",
                institution: "Centro Universitário Curitiba",
            },
            {
                course: "Graduação em Direito",
                date: "2006-2011",
                institution: "Universidade Tuiuti do Paraná",
            },
        ],

        academicProduction: [
            {
                authors: "MACHADO, T. R.",
                title: "Contribuição Sindical e sua Natureza Jurídica",
                date: "2018",
            },
            {
                authors: "MACHADO, T. R.",
                title: "A Simultaneidade Normativa na Isenção Tributária",
                date: "2016",
            },
        ],
    },

    {
        picture: "/team_imgs/advogada_002.png",
        name: "Franchielle Stresser Gioppo",
        role: "Advogada e Gestora",
        OAB_number: "OAB/PR | 46290",
        OAB_Link: "https://www.oabpr.org.br/servicos-consulta-de-advogados/consulta-de-advogado/?oabn=46290&tpinsc=A",
        cellphone: "(41) 9.9915-5252",
        telephone: "(41) 3668-8000",
        email: "fran@stressermachado.adv.br",

        description: [
            "Possui graduação em Direito pela Pontifícia Universidade Católica do Paraná (2007) e especialização em Direito Público com ênfase em Direito Constitucional pela Instituição do renomado jurista Damásio de Jesus (2008) e foi aluna do Curso em direito do Trabalho e Previdenciário pela Associação dos Magistrados do Trabalho do Paraná (2015/2016), bem como, do Curso em Processo Civil do Instituto Romeu Felipe Bacellar (2018/2019).",
            "Advogada atuante nas áreas do Direito do Trabalho, Previdenciário, Tributário, Cível e Família.",
        ],

        academicBackground: [
            {
                course: "Curso em Processo Civil",
                date: "2018-2019",
                institution: "Instituto Romeu Felipe Bacellar",
            },
            {
                course: "Curso em Direito do Trabalho e Previdenciário",
                date: "2015-2016",
                institution: "Associação dos Magistrados do Trabalho do Paraná",
            },
            {
                course: "Cálculos Trabalhistas",
                date: "2009",
                institution: "Escola Superior da Advocacia- OAB/PR",
            },
            {
                course: "Noções Gerais de Direito Previdenciário",
                date: "2008",
                institution: "Curso Jurídico - Extensão Universitária do Paraná",
            },
            {
                course: "Especialização em Direito Público",
                date: "2007-2008",
                institution: "Instituto São Domingos",
            },
            {
                course: "Graduação em Direito",
                date: "2002-2007",
                institution: "Pontifícia Universidade Católica do Paraná",
            },
        ],
    },
];

export default teamList;
