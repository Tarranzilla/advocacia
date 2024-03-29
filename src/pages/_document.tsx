import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#313840" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
