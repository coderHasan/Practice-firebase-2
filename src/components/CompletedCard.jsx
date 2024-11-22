import React from "react";
import { Link } from "react-router-dom";

const CompletedCard = ({ title, image, desc }) => {
  return (
    <div>
      <div className="card bg-base-100 image-full w-96  h-[300px]">
        <figure>
          <img className="w-full h-full" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <Link
              to="/campaigns"
              className="bg-primary text-white py-2 px-6 rounded-md  font-semibold hover:bg-secondary transition duration-300"
            >
              Intresd
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedCard;
