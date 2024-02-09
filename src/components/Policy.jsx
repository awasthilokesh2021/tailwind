import React from "react";

const Policy = () => {
  return (
    <div className="mt-14">
      <h1 className="text-4xl text-center mb-2">Our services</h1>
      <hr className="w-1/5 mx-auto"></hr>
      {/* card */}
      <div className="grid justify-items-center grid-cols-1 mt-4 lg:grid-cols-3">
        {/* mycard */}
        <div className="py-10">
          <div className=" rounded overflow-hidden shadow-md max-w-[300px]">
            <img
              className="w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJfRT389JdbUwI2xZzW7xJ9EbIkGHR6hHfl5QGupyDtRYQ8sBypX5w8KH2SIqgnon8FI&usqp=CAU"
              alt="montain"
            />
            <div className="px-2 py-4">
            <div className=" font-bold text-xl mb-2">Nature</div>
            <p className="text-slate-600 block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              accusantium!
            </p>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-2">
            <span className="bg-gray-400 px-2 py-1 rounded-full font-base text-center">
              #save
            </span>
            <span className="bg-gray-400 px-2 py-1 rounded-full font-base text-center">
              #buy
            </span>
            <span className="bg-gray-400 px-2 py-1 rounded-full font-base text-center">
              #sell
            </span>
          </div>
          </div>
        </div>


        <div className="py-10">
          <div className=" rounded overflow-hidden shadow-md max-w-[300px]">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/3031850/pexels-photo-3031850.jpeg?cs=srgb&dl=pexels-francesco-ungaro-3031850.jpg&fm=jpg"
              alt="montain"
            />
            <div className="px-2 py-4">
            <div className=" font-bold text-xl mb-2">Iceworld</div>
            <p className="text-slate-600 block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              accusantium!
            </p>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-2">
            <span className="bg-gray-400 px-2 py-1 rounded-full font-base text-center">
              #save
            </span>
            <span className="bg-gray-400 px-2 py-1 rounded-full font-base text-center">
              #buy
            </span>
            <span className="bg-gray-400 px-2 py-1 rounded-full font-base text-center">
              #sell
            </span>
          </div>
          </div>
        </div>

        <div className="py-10">
          <div className=" rounded overflow-hidden shadow-md max-w-[300px]">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/2971098/pexels-photo-2971098.jpeg"
              alt="montain"
            />
            <div className="px-2 py-4">
            <div className=" font-bold text-xl mb-2">Montain</div>
            <p className="text-slate-600 block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              accusantium!
            </p>
          </div>
          <div className="grid grid-flow-col gap-5 pb-2 px-2 ">
            <span className="bg-gray-400 px-2 py-1 rounded-full font-base text-center">
              #save
            </span>
            <span className="bg-gray-400 px-2 py-1 rounded-full font-base text-center">
              #buy
            </span>
            <span className="bg-gray-400 px-2 py-1 rounded-full font-base text-center">
              #sell
            </span>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Policy;
