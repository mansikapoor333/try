import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

class SwitchExample extends Component {
    constructor(props) {
      super(props);
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
      this.handler = this.props.handler;
      console.log(this.props)
    }
   
    handleChange(checked) {
      this.setState({ checked });
      this.handler(checked);
      localStorage.setItem('state', checked);
    }

    componentDidMount() {
      console.log("ocalStorage.getItem('state')",localStorage.getItem("state"));
      if (localStorage.getItem("state") == "true"){
        this.setState({checked: true})
      } else {
        this.setState({checked: false})
      }
      
          
    }

    
   
    render() {
      return (
        <label>
          
          <span style={{marginTop:'10px', display:'flex'}}>
            <p style={{marginTop:'2%', marginRight:'7%', color:'white', fontSize:'17px'}}>NYTimes</p>
          <Switch offColor ='#D3D3D3' onColor ='#339fff' uncheckedIcon={false} checkedIcon={false}  onChange={this.handleChange} checked={this.state.checked} />
          <p style={{marginLeft:'12%', marginTop:'1%', color:'white', fontSize:'19px'}}>Guardian</p>
          </span>{/* <span>NYTimes</span> */}
        </label>
      );
    }
  }
export default SwitchExample;











