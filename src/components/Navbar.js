import React from "react";

const Navbar = () => {
   return (
      <div>
         <div className='navbar'>
            <div className='navbar__text'>
               <ul className='navbar__ul'>
                  <li>
                     <a href=''>Home</a>
                  </li>
                  <li>
                     <a href=''>Menu</a>
                  </li>
                  <li>
                     <a href=''>Shop</a>
                  </li>
                  <li>
                     <a href=''>News</a>
                  </li>
                  <li>
                     <a href=''>Contact</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
