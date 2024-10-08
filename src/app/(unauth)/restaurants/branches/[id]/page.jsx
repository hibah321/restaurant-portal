"use client"
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import rest_images from '@/../public/images/restaurant'

//Components
import RestaurantIntro from "@/app/components/RestaurantIntro";
import Switcher from "@/app/components/common/Tabswitch/Switcher";
import BranchCard from "@/app/components/restaurants/details/Branch/BranchCard";
import Users from "@/app/components/restaurants/details/Members/Users";
import Promotions from "@/app/components/restaurants/details/Promotions/Promotions";
import floor from "@/app/components/restaurants/details/Floor/Floor";
import TabLayout from "@/app/components/common/Common Layout/TabLayout";
import AddPromotionModal from "@/app/components/restaurants/details/Promotions/AddPromotionModal";
import BranchesModal from "@/app/components/restaurants/details/Branch/BranchesModal";
import AddUserModal from "@/app/components/users/AddUser/AddUserModal";
import { getBranches } from "@/app/services/apiMethods";
import { set } from "react-hook-form";

const Branches = () => {
  const [activeTab, setactiveTab] = useState('Branches');
  const [isModalOpen, setIsModalOpen] = useState({branches: false, promotion: false, user: false});
  const [searchQuery, setSearchQuery] = useState(""); 
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(true);
  const { id } = useParams();
  // const restaurantBranches = branches[id];

  useEffect(()=>{
    setloading(true);
    getBranch();
    setloading(false);

  },[]);

  const getBranch = async () => {
    try {
      setloading(true);
      const branches = await getBranches(id);
      
        setdata(branches.data);
        setloading(false);
    } catch (error) {
      console.log('error', error);
      seterror(true);
    }
  }

  const handleOpenModal = (tab) => {
    setIsModalOpen({...isModalOpen, [tab]: true});
  };

  const handleCloseModal = (tab) => {
    setIsModalOpen({...isModalOpen, [tab]: false});
  };
  
  

  // const filteredBranches = restaurantBranches?.filter((branch) =>
  //   branch.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  // );



 
  // if (!restaurantBranches) {
  //   return <p>No branches found for this restaurant.</p>;
  // }


  const renderTab = () => {
    switch (activeTab) {
      case 'Branches':
        return (
          <>
            <TabLayout title={"Arcdian Cafe Branches"} btntext={"add_new"} inputPlaceholder={"branches"} onSearch={setSearchQuery}  onClick={()=>handleOpenModal('branches')} />
            <div className="flex flex-col gap-4">
              {loading && <p>Loading...</p>}
            {
             data?.map((branch) => (
                <BranchCard key={branch.id} id={branch.id} branch={branch} />
              ))
            }
              
              {isModalOpen['branches'] && <BranchesModal onClose={()=>handleCloseModal('branches')} isActive={isModalOpen['branches']} />}
            </div>
          </>) 
      case 'Promotions':
        return (
          <>
            <TabLayout title={"Promotions and Deals"} btntext={"add_new_promotion"} inputPlaceholder={"promotion"} onClick={()=>handleOpenModal('promotion')} />
            <Promotions />
            {isModalOpen['promotion'] && <AddPromotionModal onClose={()=>handleCloseModal('promotion')} />}
          </>
        )
      case 'Members':
        return (
          <>
            <TabLayout title={"Arcadian Cafe Packages Mall Users"} btntext={"add_new_user"} inputPlaceholder={"user"} onClick={()=>handleOpenModal('user')} />
            <Users />
            {isModalOpen['user'] && <AddUserModal onClose={()=>handleCloseModal('user')} />}
          </>
        )
      default:
        break;
    }
  }

  return (
    <div className="bg-bg-main scrollbar-none flex flex-col gap-y-5 p-6">
      <RestaurantIntro rest={rest_images} />
      <div className="flex">
        <Switcher className="" activeTab={activeTab} setactiveTab={setactiveTab} />
      </div>

      {
        renderTab()
      }
    </div>
  );
};

export default Branches;
