import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="rounded-xl">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
        >
          <div
            className="hero min-h-screen rounded-2xl"
            style={{
              backgroundImage: "url(./assets/bg.avif)",
            }}
          >
            <div className="hero-overlay rounded-2xl bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl animate__backInLeft font-bold">
                  Hello there
                </h1>
                <p className="mb-5 text-lg">
                  Welcome to Cloth given, where your gently used clothes bring
                  warmth, dignity, and hope to those who need it most. Whether
                  it's a cozy sweater for winter or a school uniform for a
                  child's bright future, every donation matters. Join our
                  mission to make the world a little kinder—one thread at a
                  time. Shop, donate, or support the cause today
                </p>
                <Link to="/campaigns" className="btn text-xl btn-primary">
                  Get Donate
                </Link>
              </div>
            </div>
          </div>

          <div
            className="hero min-h-screen rounded-2xl"
            style={{
              backgroundImage: "url(./assets/bg.avif)",
            }}
          >
            <div className="hero-overlay rounded-2xl bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl  font-bold">Hello there</h1>
                <p className="mb-5 text-lg">
                  Welcome to Cloth given, where your gently used clothes bring
                  warmth, dignity, and hope to those who need it most. Whether
                  it's a cozy sweater for winter or a school uniform for a
                  child's bright future, every donation matters. Join our
                  mission to make the world a little kinder—one thread at a
                  time. Shop, donate, or support the cause today
                </p>
                <Link to="/campaigns" className="btn text-xl btn-primary">
                  Get Donate
                </Link>
              </div>
            </div>
          </div>

          <div
            className="hero min-h-screen rounded-2xl"
            style={{
              backgroundImage: "url(./assets/bg.avif)",
            }}
          >
            <div className="hero-overlay rounded-2xl bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5 text-lg">
                  Welcome to Cloth given, where your gently used clothes bring
                  warmth, dignity, and hope to those who need it most. Whether
                  it's a cozy sweater for winter or a school uniform for a
                  child's bright future, every donation matters. Join our
                  mission to make the world a little kinder—one thread at a
                  time. Shop, donate, or support the cause today
                </p>
                <Link to="/campaigns" className="btn text-xl btn-primary">
                  Get Donate
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
