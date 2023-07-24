import React from "react";
import PetCollectionsCard from "./PetCollectionCard";
import image from "../../assets/image.png";
import {ChevronRight} from 'react-feather'
import pet_1 from '../../assets/pet_1.png'
import pet_2 from '../../assets/pet_2.png'
import pet_3 from '../../assets/pet_3.png'
import pet_4 from '../../assets/pet_4.png'
import pet_5 from '../../assets/pet_5.png'
import pet_6 from '../../assets/pet_6.png'
import pet_7 from '../../assets/pet_7.png'
import pet_8 from '../../assets/pet_8.png'

const PetCollections = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-4 flex-wrap self-center">
      <div className="text-5xl font-bold py-4">Pet Collections</div>
      <div className="text-2xl text-[#515151]">
        "We aim to meet the needs of pet owners and ensure health and happiness
        of furry friends."
      </div>
      <div className="flex items-center justify-center text-left my-10 flex-wrap">
        <PetCollectionsCard image={pet_1} name="Dog" gender="Male" age="20" />
        <PetCollectionsCard image={pet_2} name="Dog" gender="Male" age="20" />
        <PetCollectionsCard image={pet_3} name="Dog" gender="Male" age="20" />
        <PetCollectionsCard image={pet_4} name="Dog" gender="Male" age="20" />
        <PetCollectionsCard image={pet_5} name="Dog" gender="Male" age="20" />
        <PetCollectionsCard image={pet_6} name="Dog" gender="Male" age="20" />
        <PetCollectionsCard image={pet_7} name="Dog" gender="Male" age="20" />
        <PetCollectionsCard image={pet_8} name="Dog" gender="Male" age="20" />
      </div>
      <div className="bg-[#007FFF] rounded-full w-48 text-lg text-white flex items-center justify-around h-16 my-16">
          View All 
          <div className=" p-1 bg-white rounded-full">
            <ChevronRight color="#007FFF" />
          </div>
        </div>
    </div>
  );
};

export default PetCollections;
