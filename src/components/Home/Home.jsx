import React from 'react';
import SliderImages from "../SliderImages/SliderImages";
import "./Home.scss";


const imgUrl1 = "https://www.shutterstock.com/image-vector/healty-symbol-vector-260nw-580212442.jpg";
const imgUrl2 = "https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg";
const imgUrl3 = "https://www.healthkart.com/connect/wp-content/uploads/2021/05/Banner-6.png";

const Home = () => {
  return (
    <>
      <SliderImages imageUrl1={imgUrl1} imageUrl2 = {imgUrl2} imageUrl3 = {imgUrl3} />

      <div className='home-container'>
      <div className='physical-health-container'>
        <h1>Importance of Physical Health?</h1>
        <img src="https://www.shelden-healthcare.co.uk/media/wysiwyg/physical-exercise-benefits.png" alt="" />
      </div>

      <div className='mental-health-container'>
        <h1>Importance of Mental Health?</h1>  
          <img src="https://www.sassysisterstuff.com/wp-content/uploads/2022/02/Spiritual-Dimension-of-Health-2-1024x683.jpg" alt="" />
      </div>

      <div className='balanced-diet-container'>
        <h1>Importance of Balanced Diet</h1>
        <img src="https://concordialm.org/wp-content/uploads/2018/03/Healthy_Eating_Habits_for_Seniors.png"  alt="" />
      </div> 
        
      </div>
    
    </>
  
  )
}

export default Home;
