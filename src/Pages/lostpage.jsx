import React, { useState } from "react";
import Lost from'../components/Lostcard';
import Search from "../components/search";

//images used
import wallet from '../assets/images/wallet.jpg';
import headphones from '../assets/images/headphones.jpg';
import keys from '../assets/images/keys.jpg';
import pendrive from '../assets/images/pendrive.jpg';
import airpods from '../assets/images/airpods.jpg';
import camera from '../assets/images/camera.jpg';
import watch from '../assets/images/watch.jpg';
import charger from '../assets/images/charger.jpg';


function LostPage() {
  const allLostItems = [
    {
      image: airpods,
      tag: "Airpods",
      description: "Lost my white near the college library. If someone finds it please email me.",
      date: "28/06/05",
      email: "xyz@gmail.com"
    },
    {
      image: headphones,
      tag: "Headphone",
      description: " I Lost my white wireless headphones near the college canteen. Might have left them on a bench.",
      date: "28/06/05",
      email: "xyz@gmail.com"
    },
    {
      image: charger,
      tag: "Charger",
      description: " I do not remember the exact location I lost it but if anyone finds it please report P.S It has a pink bow.",
      date: "28/06/05",
      email: "xyz@gmail.com"
    },
    {
      image: pendrive,
      tag: "Pendrive",
      description: " I left my pendrive in the computer lab today around 2:00pm and now it's missing if someone took it by mistake please email me.",
      date: "28/06/05",
      email: "xyz@gmail.com"
    },
    {
      image: wallet,
      tag: "Wallet",
      description: "Lost brown leather wallet near the college library. Contains ID card and some cash.",
      date: "28/06/05",
      email: "xyz@gmail.com"
    },
    {
      image: watch,
      tag: "Watch",
      description: " Lost my watch around the parking area.It's silver in color.",
      date: "28/06/05",
      email: "xyz@gmail.com"
    },
    {
      image: keys,
      tag: "Keys",
      description: "Bunch of silver keys went missing around the parking area.",
      date: "28/06/05",
      email: "xyz@gmail.com"
    },
    {
      image: camera,
      tag: "Camera",
      description: "Lost my camera near the concert ground at yesterday's fest.",
      date: "28/06/05",
      email: "xyz@gmail.com"
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = allLostItems.filter(item =>
    item.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      <div className="card1">
        {filteredItems.map((item, index) => (
          <Lost key={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default LostPage;
