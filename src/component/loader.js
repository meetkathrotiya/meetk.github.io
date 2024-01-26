import React, { useState } from 'react';
import Loadergif from "../assets/images/next-2023.svg"

const Loader = () => {
  const [loaderVisible, setLoaderVisible] = useState(true);

  const handleButtonClick = () => {
    setLoaderVisible(false);
  };

  return (
    <div>
      {loaderVisible && (
        <div className="Loader-sec fixed w-full h-[100vh] top-0 w-full bg-black z-[999] transition-opacity ease-in-out duration-500">
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            {/* <Image 

            /> */}
            <button className="bg-white text-slate-950 text-lg p-2 px-6 rounded-md hover:scale-105 transition-all loader-btn" onClick={handleButtonClick}>
              Click Here
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
