import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import { AppProvider } from "../context/context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Progress from "../components/layout/progress/Progress";
// Uvozimo "Context" i "Layout" i obavijamo ih oko nasih stranica
// Layout nam sluzi da bi u njemu napravili sidebar
// Context nam sluzi da bi imali
function MyApp({ Component, pageProps }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  let tags;
  const handleStart = () => {
    setIsAnimating(true);
  };
  const handleStop = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  
  return (
    <AppProvider>
      <Layout tags={tags}>
        <Progress isAnimating={isAnimating} />
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
