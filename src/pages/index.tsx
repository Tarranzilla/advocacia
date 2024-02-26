import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ImageSlider from "@/components/ImageSlider";
import CardGrid from "@/components/cardGrid";

import { motion as m } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function Home() {
    const t = useSimpleTranslation();

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
                    <section id="inicio" key={"inicio"}>
                        <ImageSlider content={t.landingPage.sections.home.bannerList} />
                    </section>
                    <section id="quem-somos" key={"quem-somos"}>
                        <div className="About_Container">
                            <h1 className="Section_Title" key={t.landingPage.sections.about.title}>
                                {t.landingPage.sections.about.title}
                            </h1>
                            {t.landingPage.sections.about.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}

                            <h1 className="Section_Title" key={t.landingPage.sections.team.title}>
                                {t.landingPage.sections.team.title}
                            </h1>

                            <div className="Team_Container">
                                {t.landingPage.sections.team.members.map((member, index) => (
                                    <div className="Team_Member" key={index}>
                                        <div className="Team_Member_Header">
                                            <Image src={member.picture} alt={member.name} width={200} height={300} />
                                            <div className="Team_Member_Info">
                                                <h3 className="Team_Member_Name">{member.name}</h3>

                                                <Link
                                                    href={member.OAB_Link}
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    className="Team_Member_OAB_Link"
                                                >
                                                    {member.OAB_number}
                                                </Link>

                                                <div className="Team_Member_Actions">
                                                    <div className="Team_Member_Action">
                                                        <span className="material-icons">phone</span>
                                                        <p>{member.cellphone}</p>
                                                    </div>
                                                    <div className="Team_Member_Action">
                                                        <span className="material-icons">fax</span>
                                                        <p>{member.telephone}</p>
                                                    </div>
                                                    <div className="Team_Member_Action">
                                                        <span className="material-icons">mail</span>
                                                        <p>{member.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Team_Member_Description">
                                            {member.description.map((paragraph, index) => (
                                                <p key={index}>{paragraph}</p>
                                            ))}

                                            {member.professionalExperience && (
                                                <div className="Team_Member_ProfessionalExperience">
                                                    <h3>{member.professionalExperience[0].title}</h3>
                                                    {member.professionalExperience[0].paragraphs.map((paragraph, index) => (
                                                        <p key={index}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            )}

                                            {member.complementaryEducation && (
                                                <div className="Team_Member_ComplementaryEducation">
                                                    <h3>{member.complementaryEducation[0].title}</h3>
                                                    {member.complementaryEducation[0].paragraphs.map((paragraph, index) => (
                                                        <p key={index}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            )}

                                            {member.academicBackground && (
                                                <div className="Team_Member_AcademicBackground">
                                                    <h3>{member.academicBackground[0].title}</h3>
                                                    {member.academicBackground[0].paragraphs.map((paragraph, index) => (
                                                        <p key={index}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            )}

                                            {member.academicProduction && (
                                                <div className="Team_Member_AcademicProduction">
                                                    <h3>{member.academicProduction[0].title}</h3>
                                                    {member.academicProduction[0].paragraphs.map((paragraph, index) => (
                                                        <p key={index}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section id="areas-de-atuacao" key={"areas-de-atuacao"}>
                        <div className="Services_Container">
                            <h1 className="Section_Title" key={t.landingPage.sections.expertise.title}>
                                {t.landingPage.sections.expertise.title}
                            </h1>
                            <CardGrid content={t.landingPage.sections.expertise.expertiseList} />
                        </div>
                    </section>
                    <section id="contato" key={"contato"}>
                        <div className="Contact_Container">
                            <h1 className="Section_Title" key={t.landingPage.sections.contact.title}>
                                {t.landingPage.sections.contact.title}
                            </h1>

                            <div className="Contact_Layout_Container">
                                <div className="Telephone Contact_Layout_Item" key={"contato_telefone"}>
                                    <h3>{t.landingPage.sections.contact.telephone.title}</h3>
                                    <p>(41) 999 155 252</p>
                                    <p>(41) 991 191 904</p>
                                    <p>(41) 3333-3333</p>
                                </div>

                                <div className="Working_Hours Contact_Layout_Item" key={"contato_email"}>
                                    <h3>Email</h3>
                                    <p>fran@stressermachado.adv.br</p>
                                    <p>telma@stresseremachado.adv.br</p>
                                    <p>contato@stresseremachado.adv.br</p>
                                </div>

                                <div className="Working_Hours Contact_Layout_Item">
                                    <h3 key={t.landingPage.sections.contact.functioningHours.title}>
                                        {t.landingPage.sections.contact.functioningHours.title}
                                    </h3>
                                    <p key={"schedule"}>{t.landingPage.sections.contact.functioningHours.schedule}</p>
                                </div>
                            </div>

                            <div className="Working_Hours Contact_Layout_Item Adress_Item">
                                <h1 className="Adress_Title">{t.landingPage.sections.contact.adress.title}</h1>
                                <p>{t.landingPage.sections.contact.adress.adress}</p>
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
