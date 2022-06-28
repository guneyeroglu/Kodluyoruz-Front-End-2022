import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Container from "./pages/Container";

function App() {
  return (
    /**
     * App.js içerisinde üst, ana ve alt kısımlarını birleştirip sayfamı oluşturuyorum.
     */
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
}

export default App;
