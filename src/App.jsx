import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-surface-50 text-surface-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
