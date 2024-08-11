import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Workflow />
      <Pricing />
    </>
  );
}
