import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document(props: DocumentProps) {
    const locale = props.__NEXT_DATA__?.locale || "pt-BR";
    return (
        <Html lang={locale}>
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
