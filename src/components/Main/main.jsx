// import React from "react";
// import amazon from "../../asserts/amazon.png";
// import awspartner from "../../asserts/awspartner.png";
// import AmazonFieldset from "../AmazonFieldset/AmazonFieldset";
// import { FiAlertCircle } from "react-icons/fi";

// const Main = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-t from-[#7035cd] to-[#2c78ea] rounded-b-[50px] flex justify-center items-center">
//       <div className="w-full max-w-md  md:max-w-3xl">
//         <h1 className="text-white text-2xl md:text-3xl text-center mt-4">
//           Sign in or Create an Account
//         </h1>
//         <div className="md:flex">
//           <div className="bg-white mt-6 p-6 ">
//             <div className="text-center">
//               <img
//                 src={amazon}
//                 alt="Amazon.com"
//                 className="w-24 mx-auto mb-6"
//               />
//             </div>
//             <AmazonFieldset />
//             <div className="w-full mt-4">
//               <button className="bg-black text-white py-1 px-4 w-full md:w-[200px] mx-auto md:mx-6">
//                 SIGN IN
//               </button>
//             </div>
//             <div className="flex justify-center items-center mt-4">
//               <div className="text-red-600">
//                 <FiAlertCircle />
//               </div>
//               <p className="text-xs ml-2">Use Amazon account, not AWS</p>
//             </div>
//           </div>
//           <div className="bg-white md:mt-6 p-6 ">
//             <div className="text-center">
//               <img
//                 src={awspartner}
//                 alt="Amazon.com"
//                 className="w-24 mx-auto mb-6 "
//               />
//             </div>

//             <p>via APN Partner Central</p>

//             <div className="w-full mt-4">
//               <button className="bg-black text-white py-1 px-4 w-full md:w-[200px] mx-auto">
//                 SIGN IN
//               </button>
//             </div>
//             <div className="flex justify-center items-center mt-4">
//               <div className="text-red-600">
//                 <FiAlertCircle />
//               </div>
//               <p className="text-xs ml-2">Use Amazon account, not AWS</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React from "react";
import amazon from "../../asserts/amazon.png";
import awspartner from "../../asserts/awspartner.png";
import AmazonFieldset from "../AmazonFieldset/AmazonFieldset";
import { FiAlertCircle } from "react-icons/fi";

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#7035cd] to-[#2c78ea] borderRadius  flex flex-col   items-center">
      <h1 className="text-white text-2xl md:text-3xl text-center pt-20 md:mt-0 md:mr-6">
        Sign in or Create an Account
      </h1>
      <div className="flex flex-col">
        <div className="md:flex">
          <div className="bg-white mt-6 p-6 md:border-l-black ">
            <div className="text-center">
              <img
                src={amazon}
                alt="Amazon.com"
                className="w-24 mx-auto mb-6"
              />
            </div>
            <AmazonFieldset />
            <div className="w-full mt-4">
              <button className="bg-black text-white py-1 px-4 w-full md:w-[200px] mx-auto md:mx-6">
                SIGN IN
              </button>
            </div>
            <div className="flex justify-center items-center mt-4">
              <div className="text-red-600">
                <FiAlertCircle />
              </div>
              <p className="text-xs ml-2">Use Amazon account, not AWS</p>
            </div>
          </div>
          <div className="bg-white md:mt-6 p-6">
            <div className="text-center">
              <img
                src={awspartner}
                alt="Amazon.com"
                className="w-24 mx-auto mb-6 "
              />
            </div>

            <p>via APN Partner Central</p>

            <div className="w-full mt-4">
              <button className="bg-black text-white py-1 px-4 w-full md:w-[200px] mx-auto">
                SIGN IN
              </button>
            </div>
            <div className="border border-solid border-black"></div>
            <div className="flex justify-center items-center mt-4">
              <div className="text-red-600">
                <FiAlertCircle />
              </div>
              <p className="text-xs ml-2">Use Amazon account, not AWS</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full p-6 justify-center items-center flex border-t-gray-700 md:border-none">
          <p className="text-xs">
            Amazon employees{" "}
            <a href="" className="text-blue-800 underline">
              sign in here{" "}
            </a>
            (Amazon VPN required)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
