import React from "react";

const Order = ({ name, desc, img }) => {
   return (
      <div className='col-4'>
         <div class='card'>
            <img class={img} src={img} alt='Card image cap'></img>
            <div class='card-body'>
               <h5 class='card-title'> {name}</h5>
               <p class='card-text'>{desc}</p>
               <a href='#' class='btn'>
                  Buy now
               </a>
            </div>
         </div>
      </div>
   );
};

export default Order;
