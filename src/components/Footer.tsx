import Link from "next/link";

export default function Footer() {
    const message = "Olá gostaria de fazer a cotação de seus serviços.";

    function toUrlValidString(str: string) {
        return encodeURIComponent(str);
    }

    return (
        <div className="Footer">
            <div className="Footer_Content">
                <div className="Footer_Actions Desktop_Only">
                    <div className="Footer_Btn Privacy_Btn">
                        <Link href={"/privacidade"}>
                            <span className="material-icons">verified_user</span>
                        </Link>
                    </div>
                    <div className="Footer_Btn Terms_Btn">
                        <Link href="/termos-de-uso">
                            <span className="material-icons">sticky_note_2</span>
                        </Link>
                    </div>
                </div>

                <p className="Desktop_Only">© 2024 Stresser & Machado</p>

                <div className="Footer_Actions">
                    <div className="Footer_Btn Quote_Btn">
                        <Link href={`https://wa.me/1234567890?text=${toUrlValidString(message)}`} target="_blank" rel="noopener noreferrer">
                            <span className="material-icons">request_quote</span>
                        </Link>
                    </div>
                    <div className="Footer_Btn Phone_Btn">
                        <Link href="tel:+1234567890">
                            <span className="material-icons">phone</span>
                        </Link>
                    </div>
                    <div className="Footer_Btn Email_Btn">
                        <Link href="mailto:example@example.com">
                            <span className="material-icons">email</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
