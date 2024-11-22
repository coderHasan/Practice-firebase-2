import React from "react";

const PhotoGallery = () => {
  return (
    <div class="photo-gallery bg-gray-100 py-10 px-6">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-primary text-center mb-8">
          What we donate
        </h2>

        <div class="grid md:grid-cols-12 ">
          <img
            src="./assets/pic1.jfif"
            alt="Gallery Image 1"
            class="border border-red-400 md:col-span-6 lg:col-span-3 shadow-lg w-full  h-[300px]  "
          />

          <img
            src="./assets/pic2.jfif"
            alt="Gallery Image 2"
            class="border border-red-400 w-full md:col-span-6 lg:col-span-6 shadow-lg h-[300px]  "
          />

          <img
            src="./assets/pic3.jfif"
            alt="Gallery Image 3"
            class="border border-red-400 w-full md:col-span-12 lg:col-span-3 shadow-lg h-[300px]"
          />

          <img
            src="./assets/pic4.webp"
            alt="Gallery Image 4"
            class="border border-red-400 w-full md:col-span-6 lg:col-span-8 shadow-lg h-[300px]  "
          />

          <img
            src="./assets/pic5.jfif"
            alt="Gallery Image 5"
            class="border border-red-400 w-full md:col-span-6 lg:col-span-4 shadow-lg h-[300px]  "
          />

          <img
            src="./assets/pic6.jpg"
            alt="Gallery Image 6"
            class="border border-red-400 w-full md:col-span-12  lg:col-span-12 shadow-lg h-[400px]  "
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
