import React from "react";
import loginImage from "../../../assets/user/user_flow.jpg";
import { Link } from "react-router-dom";

const UserFlow = () => {
  return (
    <div className="flex h-screenx my-10 w-[50%] lg:h-[30rem] h-[50rem] mx-auto border-red">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-gray-50 p-8 border-green">
        <h1 className="text-2xl font-semibold mb-8">Sign up/log in</h1>
        <div className="w-full max-w-md space-y-4">
          <Link to="/signup">
            <div className="flex justify-between items-center text-black p-4 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-gray-100 transition">
              <div>
                <h2 className="text-lg font-medium">For everyone</h2>
                <p className="text-gray-500">Book Service providers</p>
              </div>
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </Link>

          <Link to='/signup-service_provider'>
            <div className="flex justify-between items-center text-black p-4 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-gray-100 transition">
              <div>
                <h2 className="text-lg font-medium">For business</h2>
                <p className="text-gray-500">Manage and grow your business</p>
              </div>
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 border-yellow">
        <img
          src={loginImage}
          alt="Login Visual"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default UserFlow;
