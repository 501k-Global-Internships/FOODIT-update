import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Footer from "./layouts/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;