import React, { Component } from 'react';
// import Popup from './components/Popup';
import './Popup.css';
 

class Popup extends Component {  

    constructor(props) {
        super(props);
        
      }
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{this.props.text}</h1>  
<button onClick={this.props.closePopup}>close me</button>  
</div>  
// </div>  
);  
}  
}  

export default Popup;