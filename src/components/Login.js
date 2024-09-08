import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSign, setIsSign] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = formValidation(
    
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    //Sign  In and Sign Up logic

    if (!isSign) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  const toggleSignForm = () => {
    setIsSign(!isSign);
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
          {isSign ? (
            <h1 className=" text-xl py-4">Sign In</h1>
          ) : (
            <h1 className=" text-xl py-4">Sign Up</h1>
          )}
          {!isSign ? (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className=" p-4 my-4 w-[100%] rounded-lg bg-slate-600"
            />
          ) : null}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className=" p-4 my-4 w-[100%] rounded-lg bg-slate-600"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className=" p-4 my-4 w-[100%] rounded-lg bg-slate-600"
          />
          {<p className=" text-red-600">{errorMessage}</p>}

          <button
            onClick={handleButtonClick}
            className=" p-4 my-4 bg-red-700 w-[100%] rounded-lg "
          >
            {isSign ? (
              <h1 className=" text-xl py-4">Sign In</h1>
            ) : (
              <h1 className=" text-xl py-4">Sign Up</h1>
            )}
          </button>
          <p onClick={toggleSignForm} className=" py-4 cursor-pointer">
            {isSign
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign in Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
