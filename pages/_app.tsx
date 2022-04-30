import type { AppProps } from "next/app";
import Head from "next/head";
// CSS
import "../styles/globals.css";
// Assets
import FavIcon from "public/Navbar/LogoS.svg";
// Components
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={FavIcon.src}
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href={FavIcon.src}
                />
                <title>Serdar Gökhan Portfolio</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
                <meta
                    name="description"
                    content="I’m a front-end developer also a mechatronics engineer
                    building scalable, cross-browser compatible, performant,
                    and responsive websites located in İstanbul."
                />
                <meta property="og:type" content="website" />

                <meta property="og:title" content="Serdar Gökhan Portfolio" />
                <meta
                    property="og:description"
                    content="A Front-End Developer Porfolio Website"
                />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
                <meta property="og:url" content="serdargokhan.dev" />
                <meta property="og:site_name" content="serdargokhan.dev" />
            </Head>

            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
