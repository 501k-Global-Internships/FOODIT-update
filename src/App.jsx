import { BrowserRouter, Route, useLocation } from "react-router-dom";
import Routes from "./routes";
import { CartProvider } from './Context/CartContext'; // Import CartProvider
import Navbar from "./layouts/navbar/navbar";
import HomePage from "./layouts/homePage/homePage";
import About from "./components/About/About";



const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = ["/", "/about"].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/vendor" element={<vendor />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;