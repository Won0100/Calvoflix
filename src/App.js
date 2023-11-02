import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Banner imagem='home'/>
      <Container>
        <h1>Testando container</h1>
        <p>teste teste calvoflix</p>
      </Container>
      <Footer />
    </>
  );
}

export default App;
