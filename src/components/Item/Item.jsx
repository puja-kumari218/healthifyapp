import React from 'react';
import "./Item.scss";

const Item = (props) => {

  return (
  <>
  <div className='item'>
    <div className='item-top'>
      <div className='item-head'>
        <h4>{props.name}</h4>
      </div>
      
      <div className='item-content'>
        
        <div className='item-info'>
          <span className='item-info-a'>{props.calories}</span>
          <span className='item-info-b'>Calories</span>
        </div>
        
        <div className='item-info'>
          <span className='item-info-a'>{props.carbs}</span>
          <span className='item-info-b'>Carbs</span>
        </div>
        
        <div className='item-info'>
          <span className='item-info-a'>{props.serve}</span>
          <span className='item-info-b'>Serve (grams)</span>
        </div>
        
      </div>
    </div>
    
    <div className='item-bottom'>
      
      <div className='item-row'>
        <div className='item-row-a'>Per serving</div>
        <div className='item-row-b'>{props.serve}g</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Calories</div>
        <div className='item-row-b'>{props.calories}</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Carbs</div>
        <div className='item-row-b'>{props.carbs}g</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Cholesterol</div>
        <div className='item-row-b'>{props.cholesterol}mg</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Saturated fats</div>
        <div className='item-row-b'>{props.fat_saturated}g</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Total fats</div>
        <div className='item-row-b'>{props.fat_total}g</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Fiber</div>
        <div className='item-row-b'>{props.fiber}g</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Protein</div>
        <div className='item-row-b'>{props.protein}g</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Potassium</div>
        <div className='item-row-b'>{props.potassium}mg</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Sodium</div>
        <div className='item-row-b'>{props.sodium}mg</div>
      </div>
      
      <div className='item-row'>
        <div className='item-row-a'>Sugar</div>
        <div className='item-row-b'>{props.sugar}g</div>
      </div>
      
    </div>
  </div>
  </>
  )
}

export default Item;
