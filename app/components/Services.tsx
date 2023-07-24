import React from "react";
import services_1 from '../../assets/services_1.png'
import services_2 from '../../assets/services_2.png'
import services_3 from '../../assets/services_3.png'
import services_4 from '../../assets/services_4.png'
import services_5 from '../../assets/services_5.png'
import services_6 from '../../assets/services_6.png'
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-4">
      <div className="text-5xl font-bold py-4">Our Services</div>
      <div className="text-2xl text-[#515151]">
        We provide services for all types of businesses. We aim to meet the
        needs of pet owners and ensure health and happiness of furry friends.
      </div>
      <div className="flex items-center justify-center text-left my-10 flex-wrap">
        <ServiceCard
          image={services_1}
          title="Pet Care"
          description="Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested 
                    especially reasonable off one. "
        />
        <ServiceCard
          image={services_2}
          title="Pet Care"
          description="Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested 
                    especially reasonable off one. "
        />
        <ServiceCard
          image={services_3}
          title="Pet Care"
          description="Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested 
                    especially reasonable off one. "
        />
        <ServiceCard
          image={services_4}
          title="Pet Care"
          description="Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested 
                    especially reasonable off one. "
        />
        <ServiceCard
          image={services_5}
          title="Pet Care"
          description="Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested 
                    especially reasonable off one. "
        />
        <ServiceCard
          image={services_6}
          title="Pet Care"
          description="Unpacked now declared put you confined daughter improved. Celebrated imprudence few interested 
                    especially reasonable off one. "
        />
      </div>
    </div>
  );
};

export default Services;
