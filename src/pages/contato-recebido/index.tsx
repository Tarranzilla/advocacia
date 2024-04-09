import Link from "next/link";

export default function ContatoRecebido() {
    return (
        <>
            <main className="Page_Wrapper Centralized_Page_Wrapper">
                <div className="Recieved_Contact_Container">
                    <h1>Contato Recebido</h1>
                    <p>Obrigado por entrar em contato! Logo iremos lhe responder.</p>

                    <p> Caso haja alguma dúvida sinta-se a vontade para nos informar através de nossos canais de atendimento.</p>
                </div>

                <Link className="Recieved_Contact_Button" href="/">
                    <span className="material-icons">home</span>Voltar para a página inicial
                </Link>
            </main>
        </>
    );
}
