import React from "react";
// import AboutPage from "img/AboutPage.jpg";

const About = () => {
   return (
      <div>
         <div className='about'>
            <div className='container'>
               <div className='row'>
                  <div className='col-7'>
                     <h3>About us</h3>
                     <h1>Welcome to Pizza Hut</h1>
                     <p>
                        There’s nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. And definitely not the way we live life.
                        <br /> <br />
                        Around here, we don’t settle for anything less than food we’re proud to serve. And we don’t just clock in. <b>We’re the pizza company that lives life unboxed.</b>
                        We’re not for people who want to blend in: pushing boundaries is part of our heritage. We have more than 16,000 restaurants and 350,000 team members in more than 100 countries. Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop driving
                        ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.
                     </p>
                     <div className='about__btn'>
                        <a href='' className='btn '>
                           Read more 
                        </a>
                     </div>

                    
                  </div>
                  <div className='col-5'>
                        <img src='./AboutPage.jpg' alt='' className="about__img"/>
                     </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
