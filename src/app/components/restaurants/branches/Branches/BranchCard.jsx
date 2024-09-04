import React from "react";
import Image from "next/image";
import images from "../../../../../../public/images/index";
import Tags from "../../Tags";

import { LuFileEdit,LuTrash2,LuMapPin  } from "react-icons/lu";
import Rate from "@/app/components/Rating";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
const BranchCard = ({ branch, id }) => {
  const router = useRouter();
  const locale = router.locale

  const handleClick = () => {
    router.push(`${locale}/details`)
  }
  return (
    <div onClick={handleClick} className="relative flex flex-col w-[85%] sm:w-full mx-auto  sm:flex-row border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <Image
          src={images.branch}
          alt="Restaurant Logo"
          layout="responsive"
          className="object-cover max-w-80 max-h-[215px] md:max-w-64 "

        />
        
     
      <div className="flex flex-col p-4 w-full">
        <div className="flex justify-between flex-row">
          <div>
            <h2 className="text-base md:text-xl  font-medium">
              Arcadian Cafe
            </h2>
            <div className="flex flex-col">
              <div className="flex justify-start items-center  text-gray-80 text-sm lg:text-base">
              <LuMapPin className="text-gray-80 text-sm lg:text-base" />
              <div className="flex flex-wrap">
              <p>Packages Mall,</p>
              <p>Lahore</p>
              </div>
              </div>
              <p className="text-gray-80 font-normal text-sm md:text-base">$$$</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 justify-start ">
            <button className=" text-blue-500 max-h-[40px]   rounded-lg border border-blue-500">
            <span className="flex gap-2 items-center py-1 lg:py-2 px-1 lg:px-3 text-sm lg:text-base">
              <LuFileEdit  className=" text-sm  lg:text-lg" /> Modify</span>
            </button>
            <button className=" text-blue-500 max-h-[40px]   rounded-lg border border-red-500">
            <span className="flex gap-2 items-center py-1 lg:py-2 px-1 lg:px-3 text-sm lg:text-base text-red-500"><LuTrash2 
             className=" text-sm lg:text-lg"  />Delete</span>
            </button>
          </div>
        </div>

          <div className="flex flex-col h-full gap-2 justify-between mt-4 ">
            <div className="flex flex-row gap-2">
              <Tags Text="Free Wifi" />
            </div>
            <Rate rating={3} />
          </div>
      </div>
    </div>
  );
};

export default BranchCard;

{
  /* */
}
