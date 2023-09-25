// // import React from "react";
// // import awsLogo from "../../asserts/aws_logo.png";
// // import { GoLinkExternal } from "react-icons/go";

// // const Footer = () => {
// //   return (
// //     <div className="pt-8 mt-8">
// //       <div className="flex items-center justify-center flex-wrap">
// //         <a
// //           href="/"
// //           className="flex items-center justify-center md:justify-start"
// //         >
// //           <img
// //             src={awsLogo}
// //             alt="AWS Training and Certification Logo"
// //             className="h-7 w-10"
// //           />
// //           <p className="w-20 text-sm">training and certification</p>
// //         </a>
// //         <div className="flex items-center justify-center md:flex-grow">
// //           <div className="md:flex gap-20">
// //             <div className="flex-col items-center justify-center m-5">
// //               <h2 className="font-bold">Site Map</h2>
// //               <ul>
// //                 <li>
// //                   <a href="/">AWS Skill Builder</a>
// //                 </li>
// //                 <li>
// //                   <a href="/">Certification</a>
// //                 </li>
// //                 <li>
// //                   <a href="/">Support</a>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="flex-col items-center justify-center m-5">
// //               <h2 className="font-bold">Resources</h2>
// //               <ul>
// //                 <li>
// //                   <a
// //                     href="/"
// //                     className="flex justify-center items-center gap-2"
// //                   >
// //                     Training Overview <GoLinkExternal size={10} />{" "}
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="/"
// //                     className="flex justify-center items-center gap-2"
// //                   >
// //                     Learning Paths <GoLinkExternal size={10} />
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="/"
// //                     className="flex justify-center items-center gap-2"
// //                   >
// //                     Exam Study Guides <GoLinkExternal size={10} />
// //                   </a>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Footer;

// import React from "react";
// import awsLogo from "../../asserts/aws_logo.png";
// import { GoLinkExternal } from "react-icons/go";

// const Footer = () => {
//   return (
//     <div className="pt-8 mt-8">
//       <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
//         <a
//           href="/"
//           className="flex items-center justify-center md:justify-start ml-20"
//         >
//           <img
//             src={awsLogo}
//             alt="AWS Training and Certification Logo"
//             className="h-7 w-10"
//           />
//           <p className="w-20 text-sm">training and certification</p>
//         </a>
//         <div className="flex items-center justify-center md:flex-grow">
//           <div className="md:flex gap-20">
//             <div className="flex-col items-center justify-center m-5">
//               <h2 className="font-bold">Site Map</h2>
//               <ul>
//                 <li>
//                   <a href="/">AWS Skill Builder</a>
//                 </li>
//                 <li>
//                   <a href="/">Certification</a>
//                 </li>
//                 <li>
//                   <a href="/">Support</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex-col items-center justify-center m-5">
//               <h2 className="font-bold">Resources</h2>
//               <ul>
//                 <li>
//                   <a
//                     href="/"
//                     className="flex justify-center items-center gap-2"
//                   >
//                     Training Overview <GoLinkExternal size={10} />{" "}
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="flex justify-center items-center gap-2"
//                   >
//                     Learning Paths <GoLinkExternal size={10} />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="flex justify-center items-center gap-2"
//                   >
//                     Exam Study Guides <GoLinkExternal size={10} />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="m-20 flex justify-between">
//         <div className="text-xs ">
//           <ul className="flex gap-1">
//             <li className="flex justify-center items-center gap-1">
//               <a href="/">Legal</a>
//               <p>|</p>
//             </li>
//             <li className="flex justify-center items-center gap-1">
//               <a href="/">Privacy</a>
//               <p>|</p>
//             </li>
//             <li className="flex justify-center items-center gap-1">
//               <a href="/" className="text-blue-600">
//                 Cookie Preferences
//               </a>
//               <p>|</p>
//             </li>
//             <li>
//               <a href="/">Third-party license notices</a>
//             </li>
//           </ul>
//         </div>
//         <p className="text-xs">
//           &copy; 2023, Amazon Web Services, Inc. or its affiliates. All rights
//           reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import awsLogo from "../../asserts/aws_logo.png";
import { GoLinkExternal } from "react-icons/go";

const Footer = () => {
  return (
    <div className="pt-8 mt-8 ">
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
        <a
          href="/"
          className="flex items-center justify-center md:justify-start mb-4 md:mb-0 md:ml-10"
        >
          <img
            src={awsLogo}
            alt="AWS Training and Certification Logo"
            className="h-7 w-10"
          />
          <p className="w-20 text-sm">training and certification</p>
        </a>
        <div className="flex items-center justify-center md:flex-grow">
          <div className="md:flex flex-col md:flex-row gap-4">
            <div className="flex-col items-center justify-center m-2 md:m-5">
              <h2 className="font-bold text-center md:text-left">Site Map</h2>
              <ul className="text-center md:text-left">
                <li>
                  <a href="/">AWS Skill Builder</a>
                </li>
                <li>
                  <a href="/">Certification</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
              </ul>
            </div>
            <div className="flex-col items-center justify-center m-2 md:m-5">
              <h2 className="font-bold text-center md:text-left">Resources</h2>
              <ul className="text-center md:text-left">
                <li>
                  <a
                    href="/"
                    className="flex justify-center items-center gap-2"
                  >
                    Training Overview <GoLinkExternal size={10} />{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="flex justify-center items-center gap-2"
                  >
                    Learning Paths <GoLinkExternal size={10} />
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="flex justify-center items-center gap-2"
                  >
                    Exam Study Guides <GoLinkExternal size={10} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mx-4 md:mx-20 mb-10 md:flex md:justify-between ">
        <div className="text-xs text-center md:text-left">
          <ul className="flex  md:flex-row gap-1">
            <li className="flex justify-center items-center gap-1">
              <a href="/">Legal</a>
              <p>|</p>
            </li>
            <li className="flex justify-center items-center gap-1">
              <a href="/">Privacy</a>
              <p>|</p>
            </li>
            <li className="flex justify-center items-center gap-1">
              <a href="/" className="text-blue-600">
                Cookie Preferences
              </a>
              <p>|</p>
            </li>
            <li>
              <a href="/">Third-party license notices</a>
            </li>
          </ul>
        </div>
        <p className="text-xs text-center md:text-left mt-2">
          &copy; 2023, Amazon Web Services, Inc. or its affiliates. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
