import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";


export default function App({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <nav>
        <Navbar />
      </nav>
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </ChakraProvider>
  );
}
