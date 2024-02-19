import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar_Content">
                <div className="Logo_Container">
                    <Image className="Logo" src="/brand_imgs/Logo_Orange.png" alt="Logo" width={100} height={100} />
                </div>
                <h1 className="Logo_Type">STRESSER & MACHADO</h1>

                <div className="Navbar_Links Desktop_Only">
                    <Link className="Navbar_Link" href="/#">
                        Início
                    </Link>
                    <Link className="Navbar_Link" href="/#about_us">
                        Quem Somos
                    </Link>
                    <Link className="Navbar_Link" href="/#expertise">
                        Áreas de Atuação
                    </Link>
                    <Link className="Navbar_Link" href="/#contact">
                        Contato
                    </Link>
                </div>

                <div className="Menu_Container Mobile_Only">
                    <span className="material-icons">menu_book</span>
                </div>
            </div>
        </div>
    );
}
