import { motion as m } from "framer-motion";
import Link from "next/link";

export default function Menu() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="Menu">
            <div className="Search_Bar">
                <input className="Search_Bar_Input" type="text" placeholder="Digite aqui o que busca" />
                <button className="Search_Bar_Button">
                    <span className="material-icons">search</span>
                </button>
            </div>
            <div className="Menu_Nav">
                <Link href="/#about_us">Quem Somos</Link>
                <Link href="/#expertise">Areas de Atuação</Link>
                <Link href="/#contact">Contato</Link>
                <Link href="/privacidade">Privacidade</Link>
                <Link href="/termos-de-uso">Termos de Uso</Link>
            </div>
        </m.div>
    );
}
