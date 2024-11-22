import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const About = () => {
  return (
    <div className="container bg-base-200 mx-auto px-3 md:px-5">
      <div>
        <div className="about-section py-16 px-6 bg-gray-50">
          <div className=" mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              At{" "}
              <span className="font-semibold text-primary">Cloth-Giving</span>,
              we strive to make fashion sustainable, inclusive, and accessible.
              We offer high-quality, eco-friendly, and ethically produced
              apparel to empower individuals to express themselves while making
              a positive impact on the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="contribute text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="icon  mb-4">
                <img
                  src="https://media.istockphoto.com/id/1224414111/vector/clothing-donation-for-charity.jpg?s=612x612&w=0&k=20&c=JYwMegUXLS1UjaxslilaiVN0JjB6nQESZUrY4R1z71A="
                  alt="Donate"
                  className="rounded-xl h-[300px] mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Donate
              </h3>
              <p className="text-gray-600 mb-6">
                Donate your gently used clothes to make a difference! Help us
                provide essential clothing to communities in need and support
                sustainable fashion.
              </p>
              <Link
                to="/campaigns"
                className="text-primary font-medium hover:underline"
              >
                Get Donate
              </Link>
            </div>

            <div className="contribute text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="icon mb-4">
                <img
                  src="https://img.freepik.com/free-vector/editable-business-logo-vector-with-clothing-word_53876-110947.jpg"
                  alt="Share"
                  className="rounded-xl w-full h-[300px] mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Spread the Word
              </h3>
              <p className="text-gray-600 mb-6">
                Share our mission with friends and family! Every conversation
                helps create a community dedicated to meaningful fashion.
              </p>
              <Link
                to="/campaigns"
                className="text-primary font-medium hover:underline"
              >
                Get Donate
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Together, we can help make fashion a force for good. From donating
              clothes to spreading awareness, every action counts.
            </p>
            <Link
              to={"/help"}
              className="bg-primary text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-secondary transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
