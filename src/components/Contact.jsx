import React from "react";

const Contact = () => {
  return (
    <div className=" mt-14 min-h-screen py-[30px] lg:py-[140px] px-10">
        <div className="container mx-auto">
           <div className=" flex flex-col lg:flex-row lg:w-9/12 bg-white mx-auto rounded-xl overflow-hidden">
              <div className="w-full flex flex-col justify-center items-center lg:w-1/2 bg-blue-500 text-white px-6 py-3">
                 <h1 className="text-xl mb-2">welcome</h1>
                 <div >
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi.
                  </p>
                 </div>
              </div>
              <div className="w-full lg:w-1/2 px-6 py-3">
                  <h2 className="text-xl mb-2">Register</h2>
                  <div className="py-4">
                       <form action="#">
                           <div className="grid grid-cols-2 gap-5">
                              <input type="text" placeholder="fname" className="border border-gray-500  px-2 py-1" />
                               <input type="text" placeholder="Lname" className="border border-gray-500  px-2 py-1" />
                           </div>
                           <div className="mt-4">
                              <input type="text" placeholder="@email" className=" w-full border border-gray-500  px-2 py-1"  />
                           </div>
                           <div className="mt-4">
                              <input type="text" placeholder="Address" className=" w-full border border-gray-500  px-2 py-1"  />
                           </div>
                           <div className="mt-4">
                              <input type="text" placeholder="Phone no" className="w-full border border-gray-500  px-2 py-1"  />
                           </div>
                           <div className="text-center rounded-lg mt-6 bg-red-700 py-2">
                              <button className="text-white ">click me </button>
                           </div>
                       </form>
                  </div>
              </div>
           </div>
        </div>
    </div>
  );
};

export default Contact;
