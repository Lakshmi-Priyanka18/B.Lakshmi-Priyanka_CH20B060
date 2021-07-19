import React from 'react';
import './card.css';

function Card(props){
return(
<div class="card" >
        <img class="image" src={props.src} />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.discription}</p>
          <a href="#" class="btn btn-primary">Order</a>
        </div>
        </div>
);
}

export default Card;