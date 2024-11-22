import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import HowItWork from "../components/HowItWork";
import ComplededDonation from "../components/ComplededDonation";
import PhotoGallery from "../components/PhotoGallery";

const Home = () => {
  return (
    <>
      <main>
        <section className="my-10">
          <Banner />
        </section>
        <section className="my-10">
          <About />
        </section>
        <section className="my-10">
          <HowItWork />
        </section>
        <section className="my-10">
          <ComplededDonation />
        </section>
        <section className="my-10">
          <PhotoGallery />
        </section>
      </main>
    </>
  );
};

export default Home;
