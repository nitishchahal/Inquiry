import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import InfoSection from "./components/InfoSection";
import ExploreSection from "./components/ExploreSection";
import InquiryForm from "./components/InquiryForm";
import ContactSection from "./components/ContactSection";
import { useForm } from '@formspree/react';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <InfoSection />
        <ExploreSection />
        <InquiryForm/>
        <ContactSection />
      </main>
    </>
  );
}

export default App;
