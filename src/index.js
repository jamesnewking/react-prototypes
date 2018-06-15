import React from 'react';
import ReactDOM from 'react-dom';

let luckyNumber = function(){
    const randomNum = Math.floor(Math.random()*1001);
    return randomNum;
};

let userObj = {
    name: 'Cooper Dog',
    luckyNumber: luckyNumber
};

let greeting = function(name, luckynumber){
    return <div className="container">
        <h1>Howdy {name}!</h1>
        <h2 className="text-muted">Your lucky number is {luckynumber}!</h2>
    </div>
};

ReactDOM.render(
    greeting(userObj.name,userObj.luckyNumber()),
    document.getElementById('root')
);
