import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import Search from "../Search/Search";
import "./Basket.scss";
import SliderImages from "../SliderImages/SliderImages";
import { Navigate } from "react-router-dom";

const imgUrl1 =
  "https://www.collidu.com/media/catalog/product/img/c/d/cd875d1dc95933ff23ca9df2024be427649cb4099e4b68b0e91b53ff951b5a9e/balanced-diet-slide1.png";
const imgUrl2 =
  "https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/d/f/df93175692df1de8153f776d51fd86b903b6b9e92bd0c08d9d2aeef0b766ba49/balanced-diet-mc-slide1.png";
const imgUrl3 =
  "https://www.collidu.com/media/catalog/product/img/d/4/d4d7fe9ff2c9b267b597f498d1e9acca10744a9b08b7fc9e3f8cf7a1ea445985/balanced-diet-slide5.png";

const Basket = () => {
  const [items, setItems] = useState([]);
  const [foodItem, setFoodItem] = useState("");
  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {

    if (localStorage.getItem("token") !== null) {
      setauthenticated(true);
      const fetchDetails = async () => {
      let foodSearched = foodItem;

      await axios
        .get(
          `https://api.calorieninjas.com/v1/nutrition?query=${foodSearched}`,
          {
            headers: {
              "X-Api-Key": "hW0nPXoI867n6vDfXE9s1A==ADrbiKlTA8NCRNKH",
            },
          }
        )
        .then((response) => {
          //  console.log(response.data.items);
          setItems(response.data.items);

          //  console.log(items);
        })
        .catch((error) => console.log(error.message));
    };

    fetchDetails();
    }
  
  }, [authenticated, foodItem]);


  if (localStorage.getItem("token") === null) {
    return <Navigate replace to="/login" />;
  } else{

  const fetchItems = () => {
    axios
      .get(`https://api.calorieninjas.com/v1/nutrition?query=${foodItem}`, {
        headers: {
          "X-Api-Key": "9AWK9Jt/hdW4RBKFSPPApQ==zDIOA8e7Ci1fw8hJ",
        },
      })
      .then((response) => {
        //  console.log(response.data.items);
        setItems(response.data.items);
      })
      .catch((error) => console.log(error.message));
  };

  const getItems = () => {
    let foodlist = [];

    items.map((item, index) => {
      return foodlist.push(
        <Item
          key={index}
          name={item.name}
          calories={item.calories}
          carbs={item.carbohydrates_total_g}
          serve={item.serving_size_g}
          cholesterol={item.cholesterol_mg}
          fat_saturated={item.fat_saturated_g}
          fat_total={item.fat_total_g}
          fiber={item.fiber_g}
          potassium={item.potassium_mg}
          protein={item.protein_g}
          sodium={item.sodium_mg}
          sugar={item.sugar_g}
        />
      );
    });

    return foodlist;
  };

  let allItems = getItems();

  const storeValue = (searchValue) => {
    setFoodItem(searchValue);
    fetchItems();
    // console.log(foodItem)
  };

  const storeClick = () => {
    fetchItems();
    console.log("click");
  };

  return (
    <>
      <SliderImages
        imageUrl1={imgUrl1}
        imageUrl2={imgUrl2}
        imageUrl3={imgUrl3}
      />
      <div className="basket">

        <h1>Calorie Finder</h1>
        <p>Check the Amount of Nutrients in food item</p>
        <Search
          sendValue={storeValue}
          sendEnter={storeClick}
          sendClick={storeClick}
        />

        <div className="items">
          {allItems.length === 0 ? (
            <div className="error">
              No food found... <img src="https://cdn-icons-png.flaticon.com/128/2805/2805947.png" className="food-basket" />
            </div>
          ) : (
            allItems
          )}
        </div>
      </div>
    </>
  )};
};

export default Basket;
