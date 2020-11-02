import React from "react";
import Order from "./Order";

const Orders = () => {
   return (
      <div>
         <h1 className='orders'>Menu</h1>
         <div className='row'>
            <br />
            <Order name='Margherita' desc='A hugely popular margherita, with a deliciously tangy single cheese topping' img='https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg' />
            <Order name='Farm House' desc='Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes' img='https://www.dominos.co.in/files/items/Farmhouse.jpg' />
            <Order name='Tandoori paneer' desc='It is hot and spicy It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo' img='https://www.dominos.co.in/files/items/Paneer_Makhni.jpg' />

            <Order name='Mexican Green wave' desc='A hugely popular margherita, with a deliciously tangy single cheese topping' img='https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg' />
            <Order name='Double cheese Margherita' desc='A very popular margherita, with a whole lot of  cheese ' img='https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg' />

            <Order name='Peppy Paneer' desc='Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!' img='https://www.dominos.co.in/files/items/Peppy_Paneer.jpg' />
         </div>
      </div>
   );
};

export default Orders;
