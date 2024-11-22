import React from "react";
import { Link } from "react-router-dom";

const DonateCard = ({ data }) => {
  const { id, title, image, description, division } = data || {};
  return (
    <div>
      <div className="card group bg-base-100 border h-[500px] hover:shadow-xl">
        <figure className="overflow-hidden">
          <img
            src={image}
            className="w-full transition-all duration-500 ease-in-out group-hover:scale-150 h-[300px]"
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">{title}</h2>
          <p className="text-gray-500">{description}</p>
          <div className="card-actions flex flex-col">
            <div className="mb-3">
              <p className="text-gray-500">
                Division:{" "}
                <span className="btn  inline rounded-full btn-outline btn-accent">
                  {division}
                </span>
              </p>
            </div>
            <Link
              to={`/details/${id}`}
              className="btn border-none btn-wide mx-auto hover:bg-secondary btn-primary"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
