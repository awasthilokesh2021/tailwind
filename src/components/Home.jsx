import React from "react";
import imgadd from "./images/s.jpeg"

const Home = () => {
  return (
    <div className="mt-14 min-h-screen py-6">
          <div className=" container mx-auto px-4">
              <div className=" flex flex-col lg:flex-row gap-5 mx-auto max-w-screen-xl">
                  <div className="w-full lg:w-1/2 px-10 py-8 flex flex-col justify-center gap-5">
                       <h1 className="text-2xl font-bold">Before sell out the images</h1>
                       <p className=" text-gray-400"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ea aliquam. Accusamus ipsum voluptatibus tempore odio libero unde pariatur sapiente earum quae sit nesciunt praesentium deleniti, totam, repudiandae magnam culpa!</p>
                       <div className="flex gap-4">
                         <button className=" bg-green-600 text-white px-4 py-2 rounded-lg">click me</button>
                         <button className=" bg-gray-500 text-white px-4 py-2 rounded-lg">save</button>
                       </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4 py-2" >
                      <img className="w-full" src={imgadd} alt="data" />
                  </div>
              </div>
          </div>
    </div>
  );
};

export default Home;
