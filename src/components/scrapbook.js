import React from 'react';
import './scrapbook.css';
//import one from './images/1.jpg';
import imageData from './image_data';
import ScrapImages from './scrapbook_images';

function Scrapbook(){
    const images = imageData.map(function(item, index){
        return <ScrapImages key={index} about={item}/>
    });

    return (
      <div className="scrapbook-container">
          {images}

      </div>

    );
}

export default Scrapbook;