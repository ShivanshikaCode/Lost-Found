import React, { useState } from 'react';
import '../components/report.css'

function ReportItem() {
  const [formData, setFormData] = useState({
  tag:'',
description:'',
date:'',
email:'',
image:null,
});

function handleChange(e){
    const {name,value,files}=e.target;
    setFormData(prev => ({...prev, [name] : files? files[0]:value}));
}

 function handleSubmit(e) {
    e.preventDefault();
    console.log(formData); 
    
    alert('Item reported successfully!');
    // reset form
    setFormData({
      tag: '',
      description: '',
      date: '',
      email: '',
      image: null,
    });
  }

return(<div className='report-container'>
    <h2>Report Item</h2>
    <form className='form' onSubmit={handleSubmit}>
        <input
        type='text'
        name='tag'
        value={formData.tag}
        placeholder="Item name or tag (e.g., Wallet)"
         onChange={handleChange}
        />

        <textarea
        name='description'
        value={formData.description}
        placeholder='Describe where/how you lost it or Found it'
         onChange={handleChange}/>

        <input
        name='date'
        type='date'
        value={formData.date}
         onChange={handleChange}/>

        <input
        name='email'
        type='email'
        placeholder="Your contact email"
        value={formData.email}
         onChange={handleChange}/>

        <input
        type='file'
        name= 'image'
         onChange={handleChange}/>

         <button type='submit'>Report</button>
    </form>
    </div>
)};

export default ReportItem