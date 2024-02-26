import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import bannerList from "@/content_lists/banner_list";
import expertiseList from "@/content_lists/expertise_list";

import ImageSlider from "@/components/ImageSlider";
import CardGrid from "@/components/cardGrid";

import { motion as m } from "framer-motion";

export default function Home() {
    return (
        <>
            <Head>
                <title>Stresser & Machado | Advocacia e Consultoria</title>
                <meta
                    name="description"
                    content="Escritório de Advocacia em Curitiba liderado por duas advogadas experientes, com vinte anos de atuação no mercado e sólida formação acadêmica. Oferecemos uma ampla gama de serviços jurídicos, incluindo direito civil, criminal, trabalhista, administrativo e tributário, com compromisso de fornecer orientação jurídica confiável e personalizada para atender às necessidades individuais de nossos clientes."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:title" content="Stresser & Machado | Advocacia e Consultoria" />
                <meta
                    property="og:description"
                    content="Escritório de Advocacia em Curitiba liderado por duas advogadas experientes, com vinte anos de atuação no mercado e sólida formação acadêmica. Oferecemos uma ampla gama de serviços jurídicos, incluindo direito civil, criminal, trabalhista, administrativo e tributário, com compromisso de fornecer orientação jurídica confiável e personalizada para atender às necessidades individuais de nossos clientes."
                />
                <meta property="og:image" content="https://stresseremachado.vercel.app/brand_imgs/Icone_512.png" />
                <meta property="og:url" content="https://stresseremachado.vercel.app/" />

                <meta name="author" content="https://pragmata.ninja/"></meta>

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} key="home">
                <main className="Page_Wrapper">
                    <section id="inicio">
                        <ImageSlider content={bannerList} />
                    </section>
                    <section id="quem-somos">
                        <div className="About_Container">
                            <h1 className="Section_Title">Quem Somos</h1>
                            <p>
                                O escritório de advocacia Stresser e Machado é reconhecido pela liderança exemplar de duas advogadas de destaque na
                                área. Com uma sólida experiência adquirida no serviço público e privado, elas trazem consigo um profundo entendimento
                                das nuances legais e dos meandros do sistema jurídico. Ao longo de seus vinte anos de atuação no mercado e formação
                                acadêmica.
                            </p>
                            <p>
                                Nosso escritório oferece uma ampla gama de serviços jurídicos, cobrindo áreas como direito civil, criminal,
                                trabalhista, administrativo e tributário. Estamos comprometidos em fornecer orientação jurídica confiável e de alta
                                qualidade para atender às diversas necessidades de nossos clientes.
                            </p>
                            <p>
                                Além disso, a abordagem personalizada adotada pelo escritório Stresser e Machado é um diferencial marcante.
                                Compreendemos que cada caso é único e merece atenção individualizada. Assim, trabalhamos em estreita colaboração com
                                nossos clientes, desenvolvendo estratégias jurídicas sob medida para alcançar os melhores resultados possíveis.
                            </p>
                            <p>
                                Nosso compromisso com a excelência e a integridade é essencial em cada aspecto de nosso trabalho. Não apenas
                                defendemos os interesses de nossos clientes de forma vigorosa, mas também o fazemos dentro dos mais altos padrões
                                éticos. Isso garante não apenas resultados satisfatórios, mas também a confiança e a satisfação duradouras daqueles
                                que confiam em nossos serviços.
                            </p>

                            <h1 className="Section_Title">Nossa Equipe</h1>

                            <div className="Team_Container">
                                <div className="Team_Member">
                                    <div className="Team_Member_Header">
                                        <Image src="/team_imgs/advogada_001.png" alt="Telma Stresser" width={200} height={200} />
                                        <div className="Team_Member_Info">
                                            <h3 className="Team_Member_Name">Telma Regina Machado</h3>

                                            <Link
                                                href="https://www.oabpr.org.br/servicos-consulta-de-advogados/consulta-de-advogado/?oabn=60235&tpinsc=A"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                className="Team_Member_OAB_Link"
                                            >
                                                OAB | 60235
                                            </Link>

                                            <div className="Team_Member_Actions">
                                                <div className="Team_Member_Action">
                                                    <span className="material-icons">phone</span>
                                                    <p>(41) 991 191 904</p>
                                                </div>
                                                <div className="Team_Member_Action">
                                                    <span className="material-icons">fax</span>
                                                    <p>(41) 3668-8000</p>
                                                </div>
                                                <div className="Team_Member_Action">
                                                    <span className="material-icons">mail</span>
                                                    <p>telma@stresseremachado.adv.br</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Team_Member_Description">
                                        <p>
                                            Pós-graduada em Direito e Processo Tributário pela UNICURITIBA em 2013. Atua na advocacia tributária
                                            administrativa e judicial. Membro do Conselho de Contribuintes e Recursos Fiscais/PR, representando a
                                            FIEP/PR.
                                        </p>
                                        <p>
                                            Atualmente, advoga no Conselho de Contribuintes e Recursos Fiscais (CCRF), atuando em sustentação oral e
                                            defesas de Contribuintes do Estado do Paraná.
                                        </p>
                                        <p>
                                            Mestranda em Direito Empresarial e Cidadania na UNIVERSIDADE UNICURITIBA. Possui escritório próprio em
                                            Curitiba/PR, atuando nas áreas de Direito Tributário, Imobiliário, Família, Consumidor, Trabalho,
                                            Previdenciário e Bancário.
                                        </p>

                                        <h3>Formação Acadêmica</h3>
                                        <p>
                                            Especialização em Direito Tributário e Processual Tributário (2012-2013) - Centro Universitário Curitiba.
                                            Título: &quot;A Simultaneidade Normativa na Isenção Tributária&quot;. Orientador: Mauricio Dalri Timm do
                                            Valle
                                        </p>
                                        <p>
                                            Graduação em Direito (2006-2011) - Universidade Tuiuti do Paraná. Título: &quot;Pedágio - Aspectos
                                            Jurídicos, Políticos e Sociais&quot;. Orientador: Pericles Coelho
                                        </p>

                                        <h3>Produções Bibliográficas</h3>
                                        <p>
                                            MACHADO, T. R. CONTRIBUIÇÃO SINDICAL E SUA NATUREZA JURÍDICA. 2018. (Apresentação de Trabalho/Congresso)
                                        </p>
                                        <p>
                                            MACHADO, T. R. A Simultaneidade Normativa na Isenção Tributária. 2016. (Apresentação de
                                            Trabalho/Congresso)
                                        </p>
                                    </div>
                                </div>

                                <div className="Team_Member">
                                    <div className="Team_Member_Header">
                                        <Image src="/team_imgs/advogada_002.png" alt="Francine Machado" width={200} height={200} />
                                        <div className="Team_Member_Info">
                                            <h3 className="Team_Member_Name">Franchielle Stresser Gioppo</h3>

                                            <Link
                                                href="https://www.oabpr.org.br/servicos-consulta-de-advogados/consulta-de-advogado/?oabn=46290&tpinsc=A"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                className="Team_Member_OAB_Link"
                                            >
                                                OAB | 46290
                                            </Link>

                                            <div className="Team_Member_Actions">
                                                <div className="Team_Member_Action">
                                                    <span className="material-icons">phone</span>
                                                    <p>(41) 999 155 252</p>
                                                </div>
                                                <div className="Team_Member_Action">
                                                    <span className="material-icons">fax</span>
                                                    <p>(41) 3335-6000</p>
                                                </div>
                                                <div className="Team_Member_Action">
                                                    <span className="material-icons">mail</span>
                                                    <p>fran@stressermachado.adv.br</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Team_Member_Description">
                                        <p>
                                            Graduada em Direito pela Pontifícia Universidade Católica do Paraná (2007), com especialização em Direito
                                            Público com ênfase em Direito Constitucional pelo renomado jurista Damásio de Jesus.
                                        </p>
                                        <p>Advogada atuante, possui escritório próprio nas áreas do Direito do Trabalho, Família e Previdenciário.</p>

                                        <h3>Formação Acadêmica</h3>
                                        <p>
                                            Especialização em Direito Público (2007-2008) - Instituto São Domingos Cursos e Serviços Editoriais LTDA,
                                            Orientador: Guilherme da Câmara Silva
                                        </p>
                                        <p>
                                            Graduação em Direito (2002-2007) - Pontifícia Universidade Católica do Paraná, Orientador: José Carlos
                                            Santos Gomes
                                        </p>

                                        <h3>Formação Complementar</h3>
                                        <p>Cálculos Trabalhistas (2009) - Escola Superior da Advocacia- OAB/PR</p>
                                        <p>Noções Gerais de Direito Previdenciário (2008) - Curso Jurídico - Extensão Universitária do Paraná</p>

                                        <h3>Histórico Profissional</h3>

                                        <p>Assessoria Jurídica do Banco do Brasil S/A (2005-2007) - Estagiária</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="areas-de-atuacao">
                        <div className="Services_Container">
                            <h1 className="Section_Title">Areas de Atuação</h1>
                            <CardGrid content={expertiseList} />
                        </div>
                    </section>
                    <section id="contato">
                        <div className="Contact_Container">
                            <h1 className="Section_Title">Contato</h1>

                            <div className="Contact_Layout_Container">
                                <div className="Telephone Contact_Layout_Item">
                                    <h3>Telefone</h3>
                                    <p>(41) 999 155 252</p>
                                    <p>(41) 991 191 904</p>
                                    <p>(41) 3333-3333</p>
                                </div>

                                <div className="Working_Hours Contact_Layout_Item">
                                    <h3>Email</h3>
                                    <p>fran@stressermachado.adv.br</p>
                                    <p>telma@stresseremachado.adv.br</p>
                                    <p>contato@stresseremachado.adv.br</p>
                                </div>

                                <div className="Working_Hours Contact_Layout_Item">
                                    <h3>Horários de Funcionamento</h3>
                                    <p>Segunda a Sexta: 09:00 - 12:00 | 13:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="Working_Hours Contact_Layout_Item Adress_Item">
                                <h1 className="Adress_Title">Endereço</h1>
                                <p>Avenida Manoel Ribas, nº 507 - Sala 05 - Mercês Curitiba - PR 80510-346 Brasil</p>
                            </div>

                            <iframe
                                className="Map"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBoWxQtCEHcm-AqgB3fjGveoXqVgy8g9pI&q=Avenida+Manoel+Ribas,+n%C2%BA+507,+Merc%C3%AAs+Curitiba+-+PR+-+Brasil"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>
                </main>
            </m.div>
        </>
    );
}
