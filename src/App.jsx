import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objective from './components/Objective';
import Experience from './components/Experience';
import FeaturedWork from './components/FeaturedWork';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import DotGrid from './components/DotGrid';

function App() {
  useEffect(() => {
    // Basic particle effect initialization could go here
  }, []);

  return (
    <>
      <div className="particle-bg">
        <DotGrid
          dotSize={6}
          gap={35}
          baseColor="#333333"
          activeColor="#f59e0b"
          proximity={200}
          shockRadius={300}
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Objective />
        <Experience />
        <FeaturedWork />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
