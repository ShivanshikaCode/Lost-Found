import React, { useState } from "react";
import Lost from'../components/Lostcard';
import Search from "../components/search";

//images used
import wallet1 from '../assets/images/wallet1.jpg';
import keys1 from '../assets/images/keys1.jpg';
import glasses from '../assets/images/glasses.jpg';
import bracelet from '../assets/images/bracelet.jpg';
import bottle from '../assets/images/bottle.jpg';
import camera from '../assets/images/camera.jpg';
import watch1 from '../assets/images/watch1.jpg';
import earphones from '../assets/images/earphones.jpg';

function FoundPage(){
const AllFoundItems = [
  {
    image: glasses,
    tag: "Glasses",
    description: "Discovered a pair of prescription glasses left behind on a table in the library’s quiet zone.",
    date: "27/06/05",
    email: "xyz@gmail.com"
  },
  {
    image: bracelet,
    tag: "Bracelet",
    description: "Found a delicate bracelet near the college canteen while walking back from class.",
    date: "25/06/05",
    email: "xyz@gmail.com"
  },
  {
    image: bottle,
    tag: "Bottle",
    description: "I found this bottle in the sports ground with no one claiming the ownership.",
    date: "28/06/05",
    email: "xyz@gmail.com"
  },
  {
    image: earphones,
    tag: "Earphones",
    description: "Found these earphones near computer lab today around 2:00pm.",
    date: "28/06/05",
    email: "xyz@gmail.com"
  },
  {
    image: wallet1,
    tag: "Wallet",
    description: "Spotted a brown wallet lying unattended on the roadside near the main gate.",
    date: "28/06/05",
    email: "xyz@gmail.com"
  },
  {
    image: watch1,
    tag: "Watch",
    description: "Found a watch in the lecture hall.",
    date: "28/06/05",
    email: "xyz@gmail.com"
  },
  {
    image: keys1,
    tag: "Keys",
    description: "Found a bunch of silver keys around the parking area.",
    date: "28/06/05",
    email: "xyz@gmail.com"
  },
  {
    image: camera,
    tag: "Camera",
    description: "Found this camera lying near the canteen area.",
    date: "28/06/05",
    email: "xyz@gmail.com"
  }
];

const [searchTerm, setSearchTerm] = useState("");

const filteredItems= AllFoundItems.filter(item =>
item.tag.toLowerCase().includes(searchTerm.toLowerCase()));

return(<>
     <Search setSearchTerm={setSearchTerm}/>
<div className="card1">
{filteredItems.map((item,index)=> (<Lost key={index} {...item}/>))}
</div>
</>
);      
        
}

export default FoundPage