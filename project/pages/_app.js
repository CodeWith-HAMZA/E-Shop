import "../styles/globals.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import State from "./Context/State";

function MyApp({ Component, pageProps }) {
   
  return (
    <State>
      <Nav Title={"Mr. Shopper"} />
      <Component {...pageProps} />
      <Footer Title={"Mr. Shopper"} />
    </State>
  );
}

export default MyApp;
