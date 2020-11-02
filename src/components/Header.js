import React from "react";

const Header = () => {
   return (
      <div className='banner'>
         <div className='banner__content'>
            <div className='container'>
               <div className='banner__text'>
                  <h3>A pizza for everyone</h3>
                  <h1>Pizza Hut</h1>
                  <p>
                     What’s better than having a crispy melty pizza, you ask?
                     <br /> Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.
                  </p>
               </div>
            </div>
         </div>
         <div className='banner__btn'>
            <a href='' className='btn '>
               Order Now
            </a>
         </div>
      </div>
   );
};

export default Header;
