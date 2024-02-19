export default function Footer() {
    const message = "Olá gostaria de fazer a cotação de seus serviços.";

    function toUrlValidString(str: string) {
        return encodeURIComponent(str);
    }

    return (
        <div className="Footer">
            <p className="Desktop_Only">© 2021 Stresser & Machado</p>

            <div className="Footer_Actions Mobile_Only">
                <div className="Footer_Btn Quote_Btn">
                    <a href={`https://wa.me/1234567890?text=${toUrlValidString(message)}`} target="_blank" rel="noopener noreferrer">
                        <span className="material-icons">summarize</span>
                    </a>
                </div>
                <div className="Footer_Btn Phone_Btn">
                    <a href="tel:+1234567890">
                        <span className="material-icons">phone</span>
                    </a>
                </div>
                <div className="Footer_Btn Email_Btn">
                    <a href="mailto:example@example.com">
                        <span className="material-icons">email</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
