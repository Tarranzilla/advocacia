import Link from "next/link";

export default function ContatoRecebido() {
    return (
        <>
            <main className="Page_Wrapper Centralized_Page_Wrapper">
                <div className="Recieved_Contact_Container">
                    <h1>Contato Recebido</h1>
                    <p>Agradecemos o seu contato! Em breve retornaremos a sua mensagem.</p>

                    <p>Caso haja alguma dúvida, sinta-se à vontade para nos contatar por meio de nossos canais de atendimento.</p>
                </div>

                <Link className="Recieved_Contact_Button" href="/">
                    <span className="material-icons">home</span>Voltar para a página inicial
                </Link>
            </main>
        </>
    );
}
