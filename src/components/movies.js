import React from 'react';

export default (props) => {
    console.log('movie.props.info:', props.info);
    console.log('img?', props.info.id.label);
    const { info } = props;
return(

    <div>
        <img src={info['im:image'][2].label} />
        <h3>{ info['im:name'].label }</h3>
        <p> { info.summary.label } </p>
    </div>

  )
};