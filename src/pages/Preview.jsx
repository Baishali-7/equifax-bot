import React from "react";
import Header from "../components/Header";
import HeadSection from "../components/HeadSection";
import Progress from "../components/PROGRESS.JSX";
import PlatformSection from "../components/Platform";
import ScoreCalculator from "../components/ScoreCalculator";
import Location from "../components/Location";
import ComparisonTable from "../components/Comparison";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import ErrorChecklist from "../components/ErrorChecklist";

const Preview = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <HeadSection />
      <PlatformSection />
      <ScoreCalculator />
      <ErrorChecklist />
      <Location />
      <ComparisonTable />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Preview;
