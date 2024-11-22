import React from "react";
import { FaCloudsmith, FaDonate } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";

const HowItWork = () => {
  return (
    <div className="container bg-gray-100 mx-auto px-3 md:px-5">
      <section className="how-it-works  py-10 px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="step text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="icon mb-4">
              <GiClothes className="mx-auto" size={45} />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Donate Your Clothes
            </h3>
            <p className="text-gray-600">
              Sort through your wardrobe, pack clean and gently used clothes,
              and get ready to donate.
            </p>
          </div>

          <div className="step text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="icon text-center mb-4">
              <FaMapLocation className="mx-auto" size={45} />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Find a Collection Point
            </h3>
            <p className="text-gray-600">
              Use our map to find the nearest drop-off location and donate your
              clothes at your convenience.
            </p>
          </div>

          <div className="step text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="icon mb-4">
              <img
                src="https://media.istockphoto.com/id/1200125829/vector/support-solid-icon-handshaking-forming-a-heart-vector-illustration-isolated-on-white-two.jpg?s=612x612&w=0&k=20&c=oF-YW5n1yJeDYXTZz-H92NlUonNV3mr69HFkfWykKl8="
                alt="Supported Divisions"
                className="w-16 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Supported Divisions
            </h3>
            <p className="text-gray-600">
              Your donations support community outreach, sustainability
              initiatives, and emergency relief efforts.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/collection-points"
            className="bg-primary text-white py-2 px-6 rounded-full text-xl font-semibold hover:bg-secondary transition duration-300"
          >
            Find a Collection Point
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowItWork;
