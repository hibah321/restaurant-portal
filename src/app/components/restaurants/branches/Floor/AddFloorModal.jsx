"use client";
import React, { useEffect, useRef, useState} from "react";
import { useRouter } from "next/navigation";
import SimpleInput from "./SimpleInput";
import SimpleTextarea from './SimpleTextrea'
import FileUpload from "@/app/components/common/FormElements/ImageUpload";

const AddUserModal = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
//   const fileInputRef = useRef(null);
  const router = useRouter();
  const handleNextBtn = (e) => {
    e.preventDefault()
    router.push("/en/floor")
  }

  useEffect(() => {
    setIsModalOpen(true);
    return () => setIsModalOpen(false);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div
        className={`w-full max-w-3xl h-screen bg-[#F2F4F7] flex flex-col justify-between transition-transform duration-300
          ${isModalOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
      <div className="w-full max-w-3xl h-screen bg-[#F2F4F7] flex flex-col justify-between transition-transform duration-300 translate-x-0">
        {/* Modal Header */}
        <div className="font-semibold text-[#15223C] bg-white w-full p-4 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl">Add a New User</h2>
          <button className="text-xl" onClick={handleModalClose}>
            {/* //<X /> */} X
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 flex-grow ">
          
            <div className="bg-white rounded-lg  p-4 space-y-4 mt-4 flex flex-col gap-4">
                <SimpleInput
                 label="Floor Name"
                placeholder="Enter name"/>

                <SimpleTextarea 
                 label="Description"
                placeholder="Enter Short Description"
                />
                <FileUpload 
                title="Gallery"
                />
            
            </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white p-4 flex justify-end space-x-4">
          <button
            className="px-4 py-2 w-1/2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
            onClick={handleModalClose}
          >
            Save as Draft
          </button>
          <button className="px-4 py-2 w-1/2 text-white bg-primary-blue rounded-lg hover:bg-blue-600"
          onClick={handleNextBtn}
          >
            Next
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddUserModal;



    