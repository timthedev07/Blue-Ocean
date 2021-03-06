import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "../utils/chakraTheme";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
