//@ts-ignore
import React from "react";
import styles from "./style.tsx";
import {
  Billing,
  Business,
  CardDeal,
  CV,
  Hero,
  Navbar,
  Stats,
  Testimonials,
  Contact,
} from "./component";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal />
          <Testimonials />
          <CV />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
