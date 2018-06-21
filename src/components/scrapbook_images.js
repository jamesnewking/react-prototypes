import React from 'react';

// function Scrapbook_images(){
//     console.log('Props: ', props);
//     return(
//         <div>SOME text</div>
//
//     );
// };
//
// export default Scrapbook_images;

export default props => {
    console.log('scrapbook image props:', props);
    const { src,style } = props.about;

    return <img src={src} style={style} className='scrapbook-image'/>
}