import React from "react";


import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  
  const navigate = useNavigate();
  const userInfo = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
    
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      });
  };
  return (
    <div className=" absolute py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between p-3">
      <div>
        <img
          className=" w-36"
          src="https://tse2.mm.bing.net/th?id=OIP.BVRTCzsXNXh8Ezp9lEJ46QHaEK&pid=Api&P=0&h=220"
          alt="logo"
        />
      </div>

      {userInfo && <div className=" flex ">     
        <img
          className=" w-20"
          src={userInfo?.photoUrl}
          alt="user-icon"
        />
        <h1>{userInfo?.displayName}</h1>
        <button onClick={handleSignOut} className=" text-yellow-200">Sign Out</button>
      </div>}

    </div>
  );
};

export default Header;
