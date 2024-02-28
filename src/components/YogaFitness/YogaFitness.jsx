import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./YogaFitness.scss";
import SliderImages from "../SliderImages/SliderImages";
import {Link} from "react-router-dom";
import YogaCategory from '../YogaCateogy/YogaCategory';
import { Navigate } from "react-router-dom";

const imgUrl1 = "https://www.collidu.com/media/catalog/product/img/a/a/aa5a8b4210a810b5b11ae421b7a5557cc3dff4530982b82d9e9f8a0633b9b795/benefits-of-physical-activity-slide1.png";
const imgUrl2 = "https://www.collidu.com/media/catalog/product/img/9/6/967c573fe8335a3f13271f644a4b4406c4dd419c08868fe4c755f15c20a898ab/benefits-of-physical-activity-slide2.png";
const imgUrl3 = "https://www.collidu.com/media/catalog/product/img/9/c/9c027b10a3fa3fe6b8db81e22828b4583436c34d7e45376245c38ee431eb64f9/benefits-of-physical-activity-slide3.png";


const YogaFitness = ({category}) => {

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {

    if (localStorage.getItem("token") !== null) {
      setauthenticated(true);
    }
  }, [authenticated]);

  if (localStorage.getItem("token") === null) {
    return <Navigate replace to="/login" />;
  } else{

  return (
    <>

        <div className="yoga-fitness-container">

        <SliderImages imageUrl1={imgUrl1} imageUrl2 = {imgUrl2} imageUrl3 = {imgUrl3} />

        <div className='yoga-category'>
        <button className='yoga-category-btn' >
          <Link className='yoga-category-link' to="/yoga-poses/sitting">Sitting Yoga Poses</Link>
        </button>
        <button className='yoga-category-btn'>
          <Link className='yoga-category-link' to="/yoga-poses/lying">Lying Yoga Poses</Link>
        </button>
        <button className='yoga-category-btn'>
          <Link className='yoga-category-link' to="/yoga-poses/standing">Standing Yoga Poses</Link>
        </button>
        </div>

        <YogaCategory category={category} />
        </div>
    </>
  )

  }
}

export default YogaFitness;
