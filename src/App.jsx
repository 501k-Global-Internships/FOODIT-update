import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Footer from "./layouts/footer/footer";
import { CartProvider } from './Context/CartContext'; // Import CartProvider


function App() {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <Routes />
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;