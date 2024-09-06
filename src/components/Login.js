import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSign, setIsSign] = useState(true);
  const toggleSignForm = () => {
    setIsSign(!isSign)
  };
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          style={{ width: "100%" }}
          src="https://wallpaperaccess.com/full/3447848.jpg"
          alt="Error"
        />
      </div>

      <div className="flex justify-center items-center min-h-screen relative ">
        <form className=" p-12 bg-black flex flex-col w-[50%] relative text-white bg-opacity-70">
          {isSign ? <h1 className=" text-xl py-4">Sign In</h1> : <h1 className=" text-xl py-4">Sign Up</h1>}
          {
            !isSign? <input
            type="text"
            placeholder="Name"
            className=" p-4 my-4 w-[100%] rounded-lg"
          /> : null
          }
          <input
            type="text"
            placeholder="Email Address"
            className=" p-4 my-4 w-[100%] rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className=" p-4 my-4 w-[100%] rounded-lg"
          />

          <button className=" p-4 my-4 bg-red-700 w-[100%] rounded-lg ">
          {isSign ? <h1 className=" text-xl py-4">Sign In</h1> : <h1 className=" text-xl py-4">Sign Up</h1>}
          </button>
          <p onClick={toggleSignForm} className=" py-4 cursor-pointer">
            {isSign? "New to Netflix? Sign Up Now" : "Already registered? Sign in Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
