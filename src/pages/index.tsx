import Head from "next/head";
import Image from "next/image";

import banner_image_list from "@/content_lists/banner_image_list";
import expertiseList from "@/content_lists/expertise_list";

import ImageSlider from "@/components/ImageSlider";
import CardGrid from "@/components/cardGrid";

import { motion as m } from "framer-motion";

export default function Home() {
    return (
        <>
            <Head>
                <title>Stresser & Machado | Escritório de Advocacia</title>
                <meta name="description" content="Advocacia Ágil e Eficaz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} key="home">
                <main className="Page_Wrapper">
                    <section id="banner_image">
                        <ImageSlider content={banner_image_list} />
                    </section>
                    <section id="about_us">
                        <div className="About_Container">
                            <h1 className="Section_Title">Quem Somos</h1>
                            <p>
                                O escritório de advocacia Stresser e Machado é reconhecido por sua liderança exemplar, composto por duas advogadas
                                mulheres de destaque na área. Com uma sólida experiência adquirida no serviço público, elas trazem consigo um profundo
                                entendimento das nuances legais e dos meandros do sistema jurídico. Ao longo de seus cinco anos de atuação no mercado,
                                têm se destacado pela dedicação incansável em garantir os melhores resultados para seus clientes.
                            </p>
                            <p>
                                Ambas as advogadas possuem expertise em diversas áreas do direito, incluindo direito civil, criminal, trabalhista e
                                administrativo. Esse amplo conhecimento permite que o escritório ofereça uma gama completa de serviços jurídicos,
                                atendendo às necessidades variadas e complexas de seus clientes.
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
                        </div>
                    </section>
                    <section id="expertise">
                        <div className="Services_Container">
                            <h1 className="Section_Title">Areas de Atuação</h1>
                            <CardGrid content={expertiseList} />
                        </div>
                    </section>
                    <section id="contact">
                        <div className="Contact_Container">
                            <h1 className="Section_Title">Contato</h1>

                            <div className="Contact_Layout_Container">
                                <div className="Telephone Contact_Layout_Item">
                                    <h3>Telefone</h3>
                                    <p>(41) 3335-6000</p>
                                    <p>(41) 3668-8000</p>
                                    <p>(41) 99915-5252</p>
                                </div>

                                <div className="Working_Hours Contact_Layout_Item">
                                    <h3>Email</h3>
                                    <p>teste@teste.com</p>
                                </div>

                                <div className="Working_Hours Contact_Layout_Item">
                                    <h3>Horários de Funcionamento</h3>
                                    <p>Segunda a Sexta: 08:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="Working_Hours Contact_Layout_Item">
                                <h2>Endereço</h2>
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
