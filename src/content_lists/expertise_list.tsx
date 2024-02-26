import { Expertise } from "@/types/Expertise";

export const expertiseList: Expertise[] = [
    {
        key: "direito_do_trabalho",
        title: "Direito do Trabalho",
        description: "Envolvendo leis e normas para empregadores e empregados.",
        metadescription:
            "Oferecemos orientação jurídica confiável e ágil para empregadores e empregados, abordando questões como contratos, demissões, rescisões e direitos trabalhistas.",
        imgSrc: "/expertise_imgs/direito_trabalhista_001.png",
        size: {
            width: 740,
            height: 420,
        },
        pageLink: "/expertise/direito_do_trabalho",
        subitems: [
            {
                key: "legislacao_trabalhista",
                title: "Legislação Trabalhista",
                description: "Conjunto de leis que regulam as relações de trabalho.",
            },
            {
                key: "relacoes_empregaticias",
                title: "Relações Empregatícias",
                description: "Questões relacionadas a contratos de trabalho, rescisões, etc.",
            },
            {
                key: "direitos_deveres_empregado",
                title: "Direitos e Deveres do Empregado",
                description: "Obrigações e prerrogativas do trabalhador.",
            },
            {
                key: "direitos_deveres_empregador",
                title: "Direitos e Deveres do Empregador",
                description: "Obrigações e prerrogativas do empregador.",
            },
            {
                key: "rescisao_contrato_trabalho",
                title: "Rescisão de Contrato de Trabalho",
                description: "Procedimentos e direitos envolvidos na rescisão do contrato de trabalho.",
            },
            {
                key: "acidentes_trabalho",
                title: "Acidentes de Trabalho",
                description: "Questões relacionadas a acidentes e doenças ocupacionais.",
            },
            {
                key: "normas_coletivas",
                title: "Normas Coletivas",
                description: "Convenções e acordos coletivos de trabalho.",
            },
        ],
    },
    {
        key: "direito_previdenciario",
        title: "Direito Previdenciário",
        description: "Atuação nas questões relacionadas à previdência social.",
        metadescription:
            "Com expertise em Direito Previdenciário, nosso escritório fornece assistência abrangente em questões relacionadas à Previdência Social, incluindo aposentadorias, benefícios por incapacidade, pensões e revisões de benefícios.",
        imgSrc: "/expertise_imgs/direito_previdenciario_001.png",
        pageLink: "/expertise/direito_previdenciario",
        size: {
            width: 300,
            height: 200,
        },
        subitems: [
            {
                key: "beneficios_previdenciarios",
                title: "Benefícios Previdenciários",
                description:
                    "Modalidades de benefícios oferecidas pela previdência social, como aposentadoria, pensão por morte, auxílio-doença, etc.",
            },
            {
                key: "requisitos_concessao_beneficios",
                title: "Requisitos para Concessão de Benefícios",
                description: "Critérios necessários para obter os benefícios previdenciários.",
            },
            {
                key: "processo_administrativo_previdenciario",
                title: "Processo Administrativo Previdenciário",
                description: "Trâmites e procedimentos para requerer benefícios junto à previdência social.",
            },
            {
                key: "recursos_administrativos_judiciais",
                title: "Recursos Administrativos e Judiciais",
                description: "Possibilidades de recurso em caso de negativa ou revisão de benefícios previdenciários.",
            },
        ],
    },
    {
        key: "direito_tributario",
        title: "Direito Tributário",
        description: "Atuação nas questões relacionadas aos tributos e obrigações fiscais.",
        metadescription:
            "Especializados em Direito Tributário, oferecemos suporte legal em questões fiscais, incluindo planejamento tributário, contestação de autuações, recuperação de tributos e defesa em processos administrativos e judiciais.",
        imgSrc: "/expertise_imgs/direito_tributario_001.png",
        pageLink: "/expertise/direito_tributario",
        size: {
            width: 300,
            height: 200,
        },
        subitems: [
            {
                key: "impostos",
                title: "Impostos",
                description: "Diferentes tipos de impostos, como IRPF, IRPJ, ICMS, IPI, ISS, etc.",
            },
            {
                key: "taxas_contribuicoes",
                title: "Taxas e Contribuições",
                description: "Taxas e contribuições devidas aos entes federativos.",
            },
            {
                key: "planejamento_tributario",
                title: "Planejamento Tributário",
                description: "Estratégias para otimizar a carga tributária de empresas e pessoas físicas.",
            },
            {
                key: "contencioso_tributario",
                title: "Contencioso Tributário",
                description: "Atuação em processos administrativos e judiciais relacionados a questões tributárias.",
            },
            {
                key: "consultoria_tributaria",
                title: "Consultoria Tributária",
                description: "Assessoria especializada na interpretação e aplicação da legislação tributária.",
            },
        ],
    },
    {
        key: "direito_civil",
        title: "Direito Civil",
        description: "Atuação nas questões relacionadas aos direitos e deveres das pessoas físicas e jurídicas.",
        metadescription:
            "Com vasta experiência em Direito Civil, nossa equipe oferece assistência em diversas áreas, como contratos, responsabilidade civil, direitos reais, sucessões, obrigações e questões relacionadas à propriedade.",
        imgSrc: "/expertise_imgs/direito_civil_001.png",
        pageLink: "/expertise/direito_civil",
        size: {
            width: 300,
            height: 200,
        },
        subitems: [
            {
                key: "direito_sucessoes",
                title: "Direito das Sucessões",
                description: "Regulamenta a transmissão dos bens e direitos de uma pessoa falecida aos seus herdeiros.",
            },
            {
                key: "direito_familia",
                title: "Direito de Família",
                description: "Regula as relações familiares, como casamento, divórcio, guarda de filhos, pensão alimentícia, etc.",
            },
            {
                key: "direito_imobiliario",
                title: "Direito Imobiliário",
                description: "Atuação nas questões relacionadas a bens imóveis, como compra e venda, locação, usucapião, etc.",
            },
            {
                key: "responsabilidade_civil",
                title: "Responsabilidade Civil",
                description: "Trata das consequências jurídicas decorrentes da prática de atos ilícitos que causam danos a terceiros.",
            },
            {
                key: "contratos_civis",
                title: "Contratos Civis",
                description: "Regula as relações contratuais entre as partes, estabelecendo direitos e obrigações recíprocas.",
            },
            {
                key: "direito_consumidor",
                title: "Direito do Consumidor",
                description:
                    "Protege os direitos dos consumidores nas relações de consumo, garantindo qualidade e segurança nos produtos e serviços.",
            },
            {
                key: "direito_obrigacoes",
                title: "Direito das Obrigações",
                description: "Estabelece as normas sobre os vínculos jurídicos de natureza patrimonial entre as pessoas.",
            },
            {
                key: "direito_coisas",
                title: "Direito das Coisas",
                description: "Regulamenta os direitos reais sobre bens corpóreos e incorpóreos.",
            },
        ],
    },
    {
        key: "direito_familia",
        title: "Direito de Família",
        description: "Regula as relações familiares, como casamento, divórcio, guarda de filhos, pensão alimentícia, etc.",
        metadescription:
            "Especializados em Direito de Família, prestamos suporte legal em questões como divórcio, pensão alimentícia, guarda de filhos, inventários, adoções, investigação de paternidade e outras questões familiares delicadas.",
        imgSrc: "/expertise_imgs/direito_familia_002.png",
        pageLink: "/expertise/direito_familia",
        size: {
            width: 300,
            height: 200,
        },
        subitems: [
            {
                key: "divorcio",
                title: "Divórcio",
                description: "Processo legal que dissolve o vínculo matrimonial entre um casal.",
            },
            {
                key: "uniao_estavel",
                title: "União Estável",
                description:
                    "Reconhecimento jurídico da convivência duradoura, pública e contínua entre duas pessoas, com o objetivo de constituir família.",
            },
            {
                key: "guarda_filhos",
                title: "Guarda de Filhos",
                description: "Definição sobre quem terá a responsabilidade legal pelos cuidados e decisões relacionadas aos filhos menores.",
            },
            {
                key: "pensao_alimenticia",
                title: "Pensão Alimentícia",
                description:
                    "Valor pago por uma pessoa para prover as necessidades básicas de sustento de outra, como filhos, ex-cônjuge ou companheiro.",
            },
            {
                key: "partilha_bens",
                title: "Partilha de Bens",
                description: "Divisão dos bens adquiridos durante o casamento ou união estável em caso de separação ou divórcio.",
            },
            {
                key: "adoção",
                title: "Adoção",
                description:
                    "Processo legal pelo qual uma pessoa ou um casal assume legalmente a responsabilidade de cuidar e educar uma criança como seu(s) filho(s).",
            },
            {
                key: "investigacao_paternidade",
                title: "Investigação de Paternidade",
                description: "Processo judicial para determinar a filiação de uma pessoa a um pai biológico.",
            },
        ],
    },
    {
        key: "direito_sucessoes",
        title: "Direito das Sucessões",
        description: "Regulamenta a transmissão dos bens e direitos de uma pessoa falecida aos seus herdeiros.",
        metadescription:
            "Com expertise em Direito das Sucessões, oferecemos assistência em processos de inventário, partilha de bens, testamentos, planejamento sucessório e questões relacionadas à herança e patrimônio.",
        imgSrc: "/expertise_imgs/direito_sucessao_001.png",
        pageLink: "/expertise/direito_sucessoes",
        size: {
            width: 300,
            height: 200,
        },
        subitems: [
            {
                key: "inventario_partilha_bens",
                title: "Inventário e Partilha de Bens",
                description: "Processo judicial ou extrajudicial para apurar e dividir os bens do falecido entre os herdeiros.",
            },
            {
                key: "testamento",
                title: "Testamento",
                description: "Documento pelo qual uma pessoa expressa suas vontades sobre a destinação de seus bens após o falecimento.",
            },
            {
                key: "planejamento_sucessorio",
                title: "Planejamento Sucessório",
                description:
                    "Conjunto de medidas jurídicas adotadas em vida para organizar a sucessão patrimonial e evitar conflitos entre herdeiros.",
            },
            {
                key: "itcmd",
                title: "Imposto sobre Transmissão Causa Mortis (ITCMD)",
                description: "Imposto estadual incidente sobre a transmissão de bens ou direitos decorrentes de sucessão hereditária.",
            },
            {
                key: "heranca_digital",
                title: "Herança Digital",
                description: "Trata da sucessão dos bens e dados digitais de uma pessoa após o seu falecimento.",
            },
        ],
    },
    {
        key: "direito_imobiliario",
        title: "Direito Imobiliário",
        description: "Atuação nas questões relacionadas a bens imóveis, como compra e venda, locação, usucapião, etc.",
        metadescription:
            "Fornecemos suporte legal em transações imobiliárias, contratos de locação, regularização de propriedades, litígios envolvendo imóveis, condomínios e questões relacionadas ao direito de propriedade.",
        imgSrc: "/expertise_imgs/direito_imobiliario_001.png",
        pageLink: "/expertise/direito_imobiliario",
        size: {
            width: 300,
            height: 200,
        },
        subitems: [
            {
                key: "usucapiao",
                title: "Usucapião",
                description: "Aquisição da propriedade de um bem imóvel pela posse prolongada e ininterrupta, conforme determina a lei.",
            },
            {
                key: "reintegracao_posse",
                title: "Reintegração de Posse",
                description: "Ação judicial utilizada para recuperar a posse de um imóvel que foi indevidamente ocupado por terceiros.",
            },
            {
                key: "contratos_imobiliarios",
                title: "Contratos Imobiliários",
                description: "Acordos firmados entre as partes envolvidas na compra, venda, locação ou arrendamento de imóveis.",
            },
            {
                key: "condominio",
                title: "Condomínio",
                description:
                    "Regulamenta a forma de organização e administração dos condomínios, seja horizontal, vertical, residencial ou comercial.",
            },
            {
                key: "iptu",
                title: "Imposto sobre a Propriedade Predial e Territorial Urbana (IPTU)",
                description: "Imposto municipal incidente sobre a propriedade de imóveis urbanos.",
            },
            {
                key: "bem_de_familia",
                title: "Bem de Família",
                description:
                    "Proteção legal concedida a um imóvel residencial utilizado como moradia da família, impedindo sua penhora em processos judiciais.",
            },
        ],
    },
    {
        key: "direito_empresarial",
        title: "Direito Empresarial",
        description: "Regula as relações jurídicas decorrentes da atividade negocial das empresas.",
        metadescription:
            "Prestamos suporte jurídico a empresas em questões como constituição e dissolução de sociedades, contratos comerciais, recuperação judicial, falência, propriedade intelectual e questões societárias.",
        imgSrc: "/expertise_imgs/direito_administrativo_001.png",
        pageLink: "/expertise/direito_empresarial",
        size: {
            width: 300,
            height: 200,
        },
        subitems: [
            {
                key: "constituicao_empresarial",
                title: "Constituição Empresarial",
                description: "Registro e constituição de empresas, escolha do tipo societário, elaboração de contratos sociais, etc.",
            },
            {
                key: "contratos_empresariais",
                title: "Contratos Empresariais",
                description:
                    "Elaboração, negociação e interpretação de contratos comerciais, como contratos de compra e venda, fornecimento, prestação de serviços, etc.",
            },
            {
                key: "falencia_recuperacao_judicial",
                title: "Falência e Recuperação Judicial",
                description: "Procedimentos legais aplicáveis em casos de insolvência empresarial, incluindo falência e recuperação judicial.",
            },
            {
                key: "propriedade_intelectual",
                title: "Propriedade Intelectual",
                description: "Proteção legal de criações intelectuais, como marcas, patentes, direitos autorais, etc.",
            },
        ],
    },
    {
        key: "direito_agronegocio",
        title: "Direito do Agronegócio",
        description: "Regula as relações jurídicas decorrentes da atividade econômica no setor agropecuário.",
        metadescription:
            "Oferecemos suporte jurídico para empresas e produtores rurais em questões como contratos agrícolas, regularização fundiária, licenciamento ambiental, financiamento agrícola e litígios relacionados ao setor agropecuário.",
        imgSrc: "/expertise_imgs/direito_agronegocio_001.png",
        pageLink: "/expertise/direito_agronegocio",
        size: {
            width: 300,
            height: 200,
        },
        subitems: [
            {
                key: "contratos_agronegocio",
                title: "Contratos do Agronegócio",
                description: "Elaboração e interpretação de contratos relacionados à produção, comercialização e financiamento no agronegócio.",
            },
            {
                key: "regularizacao_ambiental",
                title: "Regularização Ambiental",
                description:
                    "Cumprimento das normas ambientais aplicáveis às atividades agrícolas e pecuárias, incluindo licenciamento ambiental, reserva legal, etc.",
            },
            {
                key: "agronegocio_internacional",
                title: "Agronegócio Internacional",
                description: "Aspectos jurídicos relacionados ao comércio internacional de produtos agrícolas e agroindustriais.",
            },
        ],
    },
    {
        key: "direito_bancario",
        title: "Direito Bancário",
        description: "Regula as relações jurídicas entre instituições financeiras e clientes.",
        metadescription:
            "Oferecemos assistência jurídica em questões como contratos bancários, financiamentos, cobranças, defesa do consumidor bancário, disputas contratuais e litígios com instituições financeiras.",
        imgSrc: "/expertise_imgs/direito_bancario_001.png",
        pageLink: "/expertise/direito_bancario",
        size: {
            width: 300,
            height: 200,
        },
        subitems: [
            {
                key: "contratos_bancarios",
                title: "Contratos Bancários",
                description: "Elaboração e interpretação de contratos de crédito, financiamento, investimento, etc.",
            },
            {
                key: "contencioso_bancario",
                title: "Contencioso Bancário",
                description:
                    "Defesa de clientes em litígios contra instituições financeiras, incluindo questões de cobrança, responsabilidade civil, etc.",
            },
            {
                key: "regulamentacao_bancaria",
                title: "Regulamentação Bancária",
                description:
                    "Cumprimento das normas legais e regulamentares aplicáveis ao setor bancário, incluindo órgãos de controle e supervisão.",
            },
        ],
    },
];

export default expertiseList;
