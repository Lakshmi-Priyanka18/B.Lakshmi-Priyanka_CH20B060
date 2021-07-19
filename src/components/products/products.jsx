import React from 'react';
import './products.css';

import Card from './card.jsx';
var products=[{
    name:"Cup Cake",
    src:"https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg",
    discription:"These cupcakes are for the true chocolate lovers! Both melted chocolate and chocolate chips get mixed into the cupcake batter. They are  moist, light, and so delicious!"
},
{
    name:"Choco Lava Cake",
    src:"https://kirbiecravings.com/wp-content/uploads/2020/05/lava-cake.jpg",
    discription:"Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert's liquid chocolate center, and it is also known as chocolate moelleux, chocolate lava cake, or simply lava cake.",
    },
{
    name:"Pastries",
    src:"https://previews.123rf.com/images/sarsmis/sarsmis1708/sarsmis170800022/83490706-a-slice-of-rainbow-cake-decorated-with-fresh-berries-and-flowers-for-holiday.jpg",
    discription:"Pastries are likely to appear in a single and familiar shape. If we observe, the most common shapes of cakes include round, rectangular, square shapes, and triangular. On the other hand, pastries appear in a triangle or rectangular shape. When it comes to flavours, they both stand on an equal front. Earlier, pastries had limited options, due to minimum use of ingredients."
    },
{
    name:"Birthday Cakes",
    src:"https://i.pinimg.com/originals/cf/85/19/cf85196b1c4eb6313bb85124318fdffe.jpg",
    discription:"A birthday cake is a cake eaten as part of a birthday celebration. Birthday cakes are often layer cakes with frosting served with small lit candles on top representing the celebrant's age. Variations include cupcakes, cake pops, pastries, and tarts."
    },
{
    name:"Cookies",
    src:"https://images.media-allrecipes.com/userphotos/8515120.jpg",
    discription:"A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar, egg, and some type of oil, fat, or butter. It may include other ingredients such as raisins, oats, chocolate chips, nuts, etc."
}]
function product(){
    return(
        <div class="pro" >
        {products.map(function func(i) {return (<Card name={i.name} discription={i.discription} src={i.src}/> ) })}
        </div>
        
    );
}
export default product;