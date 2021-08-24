// STYLES
import "../styles/globals.scss";
// CUSTOM COMPONENTS
import Layout from "../components/layout/Layout";
// CONTEXT
import { AppProvider } from "../context/context";
// REACT HOOKS
import { useEffect, useState } from "react";
// NEXT HOOKS
import { useRouter } from "next/router";
// PROGRESS BAR COMPONENTS
import Progress from "../components/layout/progress/Progress";
function MyApp({ Component, pageProps }) {
  // Progress Bar Logic
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
