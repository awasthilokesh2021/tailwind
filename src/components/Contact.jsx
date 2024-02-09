import React from "react";

const Contact = () => {
  return (
    <div className=" mt-14 h-[580px] flex justify-center items-center">
      <div
        className="flex space-x-5 border absolute mx-40
         
        w-[50vw] h-[70vh] justify-center items-center mt-10 bg-slate-500"
      >
        <div>
          <img
            className="h-[300px]"
            src="data:image/jpeg;base64,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"
          />
        </div>
        <div> 
          <form className=" space-y-1">
            <div>
              <label>username</label>
              <div>
                <input className="px-2 outline-none" placeholder="fname" type="text" />
              </div>
            </div>
            <div>
              <label>lastname</label>
              <div>
                <input className="px-2 outline-none"  placeholder="lastname" type="text" />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div>
                <input className="px-2 outline-none"  placeholder="@mail.com" type="text" />
              </div>
            </div>
            <div>
              <label>Address</label>
              <div>
                <input className="px-2 outline-none"  placeholder="Address..." type="text" />
              </div>
            </div>
            <div>
              <label>Phone Number</label>
              <div>
                <input className="px-2 outline-none"  placeholder="phone number" type="text" />
              </div>
            </div>
            <div className="text-center">
                <button className=" bg-red-500 px-3 text-white" >save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
