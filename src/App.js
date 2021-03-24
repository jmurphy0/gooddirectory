//importing necessary components to be called in the app function.
import "./App.css";
import Emp from "./components/EmpData";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// this is the function that will return our componenets to be rendered by react
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
