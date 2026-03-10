/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-absolute-black selection:bg-blood selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

