import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {

  return (<div>
    <nav>
      <Navbar/>
    </nav>
    <Component {...pageProps} />
    <footer>
      <Footer/>
    </footer>
    </div>)
}
