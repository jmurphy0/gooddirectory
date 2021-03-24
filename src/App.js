import empData from "./components/EmpData";
import "./App.css";
import Emp from "./components/EmpData";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Wrapper>
        <Hero />
        <Emp />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
