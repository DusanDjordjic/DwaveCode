import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import { AppProvider } from "../context/context";
// Uvozimo "Context" i "Layout" i obavijamo ih oko nasih stranica
// Layout nam slizu da bi u njemu napravili sidebar
// Context nam sluzi da bi imali
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
