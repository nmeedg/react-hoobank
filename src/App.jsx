import NavBar from "./components/navbar";
import Hero  from "./components/hero";
import Stats from "./components/stats";
import Business from "./components/business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full min-h-screen bg-primary px-6 text-white">
      <NavBar></NavBar>
      <Hero></Hero>
      <Stats></Stats>
      <Business></Business>
      <Billing></Billing>
      <CardDeal></CardDeal>
      <Testimonials></Testimonials>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}

export default App;
