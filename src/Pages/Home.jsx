import React from 'react';
import Card from '../components/Dashboard';
import Lost from'../components/Lostcard';
import{Link} from 'react-router-dom';
import '../components/card.css'

//images used
import wallet from '../assets/images/wallet.jpg';
import headphones from '../assets/images/headphones.jpg';
import keys from '../assets/images/keys.jpg';
import pendrive from '../assets/images/pendrive.jpg';
import lost from '../assets/images/lost.png';
import found from '../assets/images/found.png';
import help from '../assets/images/help.png';


//Home Page
function Home() {
  return(<>
<div className='card-cont'>

<Link to="/lost" className='link'>
<Card 
image={lost}
title= "Lost Items "
subtitle="1206 total reports"
/> </Link>

<Link to="/found" className='link'>
<Card
image={found}
title= "Found Items"
subtitle="1034 found by users"/>
</Link>

<Link to="/support" className='link'>
<Card
image={help}
title= "Need Support?"
subtitle="Click here to contact"/>
</Link>

</div>


<div><h1 style={{fontSize: '1.5rem',fontWeight: '500',textAlign: 'center',margin: '1rem',}}>Recently Lost Items</h1></div>

<div className='card1'>
<Lost
image={wallet}
tag="Wallet"
description="Lost brown leather wallet near the college library. Contains ID card, some cash, and bank cards."
date="28/06/05"
email="xyz@gmail.com"/>


<Lost
image={headphones}
tag="Headphone"
description=" I Lost  my white wireless headphones near the college canteen.
 Might have left them on a bench."
 date="28/06/05" 
email="xyz@gmail.com"/>

<Lost
image={keys}
tag="keys"
description=" bunch of silver keys went missing around the parking area.. 
Includes a bike key and a small red keychain tag."
date="28/06/05"
email="xyz@gmail.com"/>

<Lost
image={pendrive}
tag="Pendrive"
description=" I left my pendrive in the computer lab today around 2:00pm and now it's missing if someone took it by mistake please email me "
date="28/06/05"
email="xyz@gmail.com"/> </div>

</>
  );
}

export default Home