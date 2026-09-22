import React from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Timeline from "./components/timeline";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-neutral-800 selection:text-white flex flex-col justify-between">
      <Header />
      <main className="flex-grow space-y-12 sm:space-y-16">
        <section id="hero" className="scroll-mt-16">
          <Intro />
        </section>

        <section id="projects" className="scroll-mt-16">
          <Portfolio />
        </section>

        <section id="timeline" className="scroll-mt-16">
          <Timeline />
        </section>

        <section id="contact" className="scroll-mt-16 pb-12 sm:pb-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
