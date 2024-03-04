import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ImageSlider from "@/components/ImageSlider";
import CardGrid from "@/components/cardGrid";
import GoogleMap from "@/components/GoogleMap";

import { motion as m } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { AcademicCourse } from "@/types/AcademicCourse";
import { AcademicCitation } from "@/types/AcademicCitation";

export default function Home() {
    const t = useSimpleTranslation();

    return (
        <>
            <Head>
                <title>{t.common.customTitle}</title>
                <meta name="description" content={t.common.customDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:title" content={t.common.customTitle} />
                <meta property="og:description" content={t.common.customDescription} />
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
                                                <h2 className="Team_Member_Name">{member.name}</h2>

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
                                                <div className="Team_Member_SubDescription Team_Member_ProfessionalExperience">
                                                    <h3>{member.professionalExperience[0].title}</h3>
                                                    {member.professionalExperience[0].paragraphs.map((paragraph, index) => (
                                                        <p key={index}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            )}

                                            {member.complementaryEducation && (
                                                <div className="Team_Member_SubDescription Team_Member_ComplementaryEducation">
                                                    <h3>Formação Complementar</h3> {/* {t.landingPage.sections.team.academicBackground.title} */}
                                                    {member.complementaryEducation.map((course: AcademicCourse, index) => (
                                                        <div key={index} className="Team_Member_AcademicCourse">
                                                            <h4>{course.course}</h4>
                                                            <p>{course.institution}</p>
                                                            <p>{course.date}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {member.academicBackground && (
                                                <div className="Team_Member_SubDescription Team_Member_AcademicBackground">
                                                    <h3>Formação Acadêmica</h3> {/* {t.landingPage.sections.team.academicBackground.title} */}
                                                    {member.academicBackground.map((course: AcademicCourse, index) => (
                                                        <div key={index} className="Team_Member_AcademicCourse">
                                                            <h4>{course.course}</h4>
                                                            <p>{course.institution}</p>
                                                            <p>{course.date}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {member.academicProduction && (
                                                <div className="Team_Member_SubDescription">
                                                    <h3>Produção Acadêmica</h3>
                                                    {member.academicProduction.map((production: AcademicCitation, index: any) => {
                                                        return (
                                                            <div className="Team_Member_AcademicProduction" key={index}>
                                                                <h4>{production.title}</h4>
                                                                <p>{production.authors}</p>
                                                                <p>{production.date}</p>
                                                                <p>{production.details}</p>
                                                            </div>
                                                        );
                                                    })}
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
                            <h2 className="Section_Title" key={t.landingPage.sections.expertise.title}>
                                {t.landingPage.sections.expertise.title}
                            </h2>
                            <CardGrid content={t.landingPage.sections.expertise.expertiseList} />
                        </div>
                    </section>
                    <section id="contato" key={"contato"}>
                        <div className="Contact_Container">
                            <h2 className="Section_Title" key={t.landingPage.sections.contact.title}>
                                {t.landingPage.sections.contact.title}
                            </h2>

                            <div className="Contact_Layout_Container">
                                <div className="Telephone Contact_Layout_Item" key={"contato_telefone"}>
                                    <h3 className="Contact_Layout_Item_Title">{t.landingPage.sections.contact.telephone.title}</h3>
                                    <p>(41) 9.9915-5252</p>
                                    <p>(41) 9.9119-1904</p>
                                    <p>(41) 3668-8000</p>
                                </div>

                                <div className="Working_Hours Contact_Layout_Item" key={"contato_email"}>
                                    <h3 className="Contact_Layout_Item_Title">Email</h3>
                                    <p>fran@stressermachado.adv.br</p>
                                    <p>telma@stresseremachado.adv.br</p>
                                    <p>contato@stresseremachado.adv.br</p>
                                </div>

                                <div className="Working_Hours Contact_Layout_Item">
                                    <h3 key={t.landingPage.sections.contact.functioningHours.title} className="Contact_Layout_Item_Title">
                                        {t.landingPage.sections.contact.functioningHours.title}
                                    </h3>
                                    <p key={"schedule"}>{t.landingPage.sections.contact.functioningHours.schedule}</p>
                                </div>
                            </div>

                            <div className="Working_Hours Contact_Layout_Item Adress_Item">
                                <h1 className="Adress_Title">{t.landingPage.sections.contact.adress.title}</h1>
                                <p>{t.landingPage.sections.contact.adress.adress}</p>
                            </div>

                            <GoogleMap />
                        </div>
                    </section>
                </main>
            </m.div>
        </>
    );
}
