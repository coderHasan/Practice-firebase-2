import React, { useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import InputFild from "./InputFild";

const DetailsCard = () => {
  const deta = useLoaderData();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { image, title, description, division, contactInfo } = data;

  useEffect(() => {
    const findDetails = deta?.find((p) => p.id == id);
    setData(findDetails);
  }, []);

  return (
    <div className="my-9">
      <div className="hero  md:p-10 bg-[#47474766]  min-h-screen rounded-xl">
        <div className="hero-content flex-col p-2 md:p-4 justify-between md:flex-col  lg:flex-row-reverse">
          <img
            className="w-full rounded-xl h-[400px] object-cover"
            src={image}
          />
          <div>
            <h1 className="text-3xl text-primary font-bold">{title}</h1>
            <p className="py-6 text-gray-500">{description}</p>
            <span className="btn !text-black inline rounded-full btn-outline btn-accent">
              {division}
            </span>

            <div className="mt-5">
              <p className="text-lg font-semibold flex items-center gap-5 border border-gray-500 bg-zinc-500 rounded-md px-4 py-1">
                Contuct:{" "}
                <span className=" flex items-center gap-2 font-medium text-base">
                  <FaRegMessage />
                  {contactInfo}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <InputFild />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
