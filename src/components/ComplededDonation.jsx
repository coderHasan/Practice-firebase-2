import React from "react";
import CompletedCard from "./CompletedCard";
import Carousel from "react-multi-carousel";

const ComplededDonation = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1280, min: 996 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 996, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="text-center ">
        <h1 className="text-3xl font-semibold text-center text-primary mb-2">
          Alredy Donate Completed
        </h1>
        <p className="md:w-4/12 mx-auto text-gray-500 mb-5">
          We have already completed donations in this area and we are trying to
          donate for all Bangladeshi needy people.
        </p>
      </div>
      <div className=" gap-5">
        <Carousel
          responsive={responsive}
          autoPlaySpeed={2000}
          autoPlay={true}
          swipeable={true}
          infinite={true}
        >
          <CompletedCard
            title="Dhaka Mirpur"
            image="https://jibonbld.com/wp-content/uploads/2020/02/74397283_578649079555270_6414982472068497408_n.jpg"
            desc="Donated clothes can be reused or recycled, reducing the demand for new resources and minimizing the carbon footprint of fashion production."
          />

          <CompletedCard
            title="Madaripur"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEO1A8dt20WuSqOW5c3n628IaGLr7w406VCkfdxxXUQeDvECkCygJb_qKdqd6tQ8u9kk&usqp=CAU"
            desc="Donated clothes can be reused or recycled, reducing the demand for new resources and minimizing the carbon footprint of fashion production."
          />

          <CompletedCard
            title="Feni"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDnxGNnOP4KwTuOXblIqx0swBt42JGr6bkw&s"
            desc="Donated clothes can be reused or recycled, reducing the demand for new resources and minimizing the carbon footprint of fashion production."
          />

          <CompletedCard
            title="Dhaka Mirpur"
            image="https://jibonbld.com/wp-content/uploads/2020/02/74397283_578649079555270_6414982472068497408_n.jpg"
            desc="Donated clothes can be reused or recycled, reducing the demand for new resources and minimizing the carbon footprint of fashion production."
          />
          <CompletedCard
            title="Barishal"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnJNs_W9hYAPzy0xsMRp7vJPWP-G-k5oDKw&s"
            desc="Donated clothes can be reused or recycled, reducing the demand for new resources and minimizing the carbon footprint of fashion production."
          />

          <CompletedCard
            title="Chottagram"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDnxGNnOP4KwTuOXblIqx0swBt42JGr6bkw&s"
            desc="Many people around the world lack access to basic clothing. Your donations can provide warmth, comfort, and dignity to underprivileged individuals."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ComplededDonation;
