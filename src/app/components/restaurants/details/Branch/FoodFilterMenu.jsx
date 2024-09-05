"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import images from "../../../../../../public/images/index"
//Components

import FilterButton from "../../../common/filters/FilterButton";
import PriceRangeSlider from "./filter/PriceRangeSlider";
import FoodCategoryButton from "./filter/FoodCategoryButton";
import Button from "../../../common/filters/Button";

const FilterDropdown = () => {

    const t = useTranslations("FilterDropdown");
    const cuisines = ['French', 'Italian'];
    const foodCategories = ['Chicken', 'Beef', 'Mutton', 'Fish'];
    
   const [isOpen, setIsOpen] = useState(false);
   const toggleDropDown = () => {
    setIsOpen(!isOpen)
   }

    //testing button

    const handleClick = () => {
        alert("Button Clicked")
    }


    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className=" min-h-10 inline-flex justify-between items-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs md:text-sm lg:text-base xl:text-lg font-medium text-gray-80 hover:bg-gray-50 "
                >
                    <Image src={images.filter} alt="" className="mr-2" />
                    <span>{t("filter")}</span>
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className={`absolute right-0 z-10 mt-2 w-[375px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isOpen ? 'transform scale-y-100 opacity-100' : 'transform scale-y-0 opacity-0'}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        <button
                            // onClick={() => handleFilterSelect(filter)}
                            className="w-[375px] px-4 py-2 text-sm text-black  text-left"
                        >
                            <div className="flex flex-col justify-between h-full gap-4">
                                <div className="flex flex-row justify-between items-center">
                                    <h1 className="font-medium text-base">Filters</h1>
                                    <RxCross2 
                                    onClick={toggleDropDown}
                                    />
                                </div>
                            </div>
                            <h2>Price Range</h2>
                            {/* Slidder */}
                            <div className="flex flex-col items-center justify-center gap-4">
                                <PriceRangeSlider />
                                <div className="w-[334px] border-b-2 border-dotted border-gray-400 mx-4" />
                            </div>
                            {/* Slidder Ends */}

                            <h2>
                                Cuisine
                            </h2>
                            <div className="flex flex-col justify-center items-center gap-3">

                                <div className="flex flex-row space-x-2 p-4 justify-start">
                                    {cuisines.map((cuisine) => (
                                        <FilterButton key={cuisine} name={cuisine} />
                                    ))}
                                </div>

                                {/* Dotted Line     */}
                                <div className="w-[334px] border-b-2 border-dotted border-gray-400 mx-4" />
                                {/* Dotted Line Ends */}
                                <div className="flex flex-row gap-1">

                                    {
                                        foodCategories.map((foodCategory) => (
                                            <FoodCategoryButton key={foodCategory} name={foodCategory} />
                                        ))

                                    }
                                </div>
                                {/* Dotted Line     */}
                                <div className="w-[334px] border-b-2 border-dotted border-gray-400 mx-4" />
                                {/* Dotted Line Ends */}
                                <div className="flex flex-row gap-2">
                                    <Button text="Clear All" onClick={handleClick} type="outlined" />
                                    <Button text="Apply" onClick={toggleDropDown} />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
