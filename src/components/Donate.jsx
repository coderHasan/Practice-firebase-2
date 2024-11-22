import React from "react";
import DonateCard from "./DonateCard";

const Donate = ({ data }) => {
  return (
    <div className="my-10">
      <div className="container mx-auto px-3 md:px-5">
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-semibold mb-1 text-primary ">
            Donation your cloth
          </h1>
          <p className="mb-10 text-gray-500">{data[0].description}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item) => (
            <DonateCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donate;
