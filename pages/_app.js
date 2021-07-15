import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import { AppProvider } from "../context/context";
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
