import React from 'react'
import { Link } from 'react-router-dom';

const Choice = () => {
  return (
    <>
      <div className="h-[60vh] grid grid-cols-6 gap-4 content-center bg-[#3d52a0] ">
        <div>Register as </div>
        <Link className="bg-[#8697c4] hover:bg-[#adbbda]" to="/signup">
          User
        </Link>
        <Link className="bg-[#8697c4] hover:bg-[#adbbda]" to="/signup-service_provider">Service Provider</Link>
      </div>
    </>
  );
}

export default Choice