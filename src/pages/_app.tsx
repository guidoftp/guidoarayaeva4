import { useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");

        if (!isAuthenticated && router.pathname !== "/Login") {
            router.push("/Login");
        }
    }, [router]);

    return <Component {...pageProps} />;
}

export default MyApp;