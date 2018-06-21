import React from 'react';
import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';
import five from './images/5.jpg';
import six from './images/6.jpg';
import seven from './images/7.jpg';
import eight from './images/8.jpg';
//left: '5%', transform: 'rotate(-10deg)'
//left: '40%', transform: 'rotate(6deg)'
export default [{
    src : one,
    style: {left: '5%', transform: 'rotate(-10deg)'}
    },
    {
        src : two,
        style: {left: '40%', transform: 'rotate(6deg)'}
    },
    {
        src : three,
        style: {right: '15%',
            transform: 'rotate(-9deg)'}
    },
    {
        src : four,
        style: {left: '8%',
            top: '28%',
            transform: 'rotate(8deg)'}
    },
    {
        src : five,
        style: {left: '37%',
            top: '25%',
            transform: 'rotate(-12deg)'}
    },
    {
        src : six,
        style: {right: '12%',
            top: '26%',
            transform: 'rotate(10deg)'}
    },
    {
        src : seven,
        style: {left: '25%',
            top: '48%',
            transform: 'rotate(-5deg)'}
    },
    {
        src : eight,
        style: {right: '25%',
            top: '52%',
            transform: 'rotate(16deg)'}
    }
];