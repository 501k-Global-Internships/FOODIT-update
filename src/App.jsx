import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { CartProvider } from './Context/CartContext'; // Import CartProvider


function App() {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;