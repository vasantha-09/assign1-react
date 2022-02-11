// import  neccesary dependendies
import React from 'react';
import ReactDom from 'react-dom';
import Bird from './Bird.js';

import './styles.css';
import Logo from './images/sparrow-png.png';

// component
function Sparrow(){
    return(
        <img src={Logo} alt="" />
    )
}
 
//show it to the user
ReactDom.render(
    < div className='b'>
    <div className='box'>
   <Sparrow/>
    <Bird/>
    </div>
    </div>,
//to show
    document.getElementById('root')
)