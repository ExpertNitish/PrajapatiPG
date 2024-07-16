import React from 'react'
import './FeaturesItem.css'

const amenities = [
  {
    name: "AC / Non-AC Rooms",
    description: "Choose between air-conditioned and non-air-conditioned rooms to suit your comfort and budget.",
    image: './air-conditioner.png'
  },
  {
    name: "Single and Sharing Rooms",
    description: "Enjoy privacy in single rooms or the camaraderie of sharing with roommates in our cozy accommodations.",
    image: "./interior-design.png"
  },
  {
    name: "WiFi Zone",
    description: "Stay connected with our dedicated WiFi zone, ensuring uninterrupted access for work, study, or entertainment.",
    image: './wifi.png'
  },
  {
    name: "Washing Machine Facilities",
    description: "Convenient on-site laundry facilities to keep your clothes fresh and clean, saving you time for other activities.",
    image: "./laundry-machine.png"
  },
  {
    name: "CCTV Surveillance",
    description: "Our CCTV surveillance system provides a secure living environment, prioritizing your safety and peace of mind.",
    image: './cctv.png'
  },
  {
    name: "RO Water (Cold/Hot)",
    description: "Stay hydrated with our RO water facility, offering refreshing cold water and hot water for your daily needs.",
    image: './water-filter.png'
  },
  {
    name: "Homemade Food",
    description: "Enjoy nutritious and delicious homemade meals prepared with care, ensuring your satisfaction and well-being.",
    image: './pie.png' 
  },
  {
    name: "Seven Days Open",
    description: "Enjoy the convenience of our seven-day open policy, giving you flexibility to access our facilities any day of the week.",
    image: "./sevendaysopen.png"
  }
];


const FeatureItem = () => {
  return (
    <div className='featureitem'>
      {amenities.map((item, index) => {
        return (
          <>
          <div className="items-features">
          <img src={item.image}/>
          <h5>{item.name}</h5>
          <p>{item.description}</p>
          </div>
          </>
          
        )
      })}
    </div>
  )
}

export default FeatureItem
