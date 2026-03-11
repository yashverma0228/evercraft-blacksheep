import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import WorkSection from './components/WorkSection';
import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <SmoothScroll>
      <div className="app">
        <Navigation />
        <main>
          <div id="home"><Hero /></div>
          {/* <div id="home"><NomineeSection /></div> */}
          <div id="about"><AboutUs /></div>
          <div id="work"><WorkSection /></div>
          <div id="services"><Services /></div>

        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
