import React, { Component, Fragment } from 'react';
import Select from 'react-select';
// import asyncsearch from './components/async';
import SwitchExample from './toggleswitch';
// import Toolbar from './components/Toolbar/Toolbar';
import '../App.css';
import { Navbar, Nav, Form, FormControl, Card } from 'react-bootstrap';
import Cards from './Cards.js';
// import SocialShare from './components/SocialShare';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import { FaRegBookmark } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Async from './Async';


// function App() {
class World extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      articles: [],
      site: "",
      // shareOpen: "closeShare",
      // toggleButtonText: "Share this"
    }
  }

  handleChange(checked) {
    // console.log(checked)
    // this.setState({
    //   loading: false,
    //   articles: [],
    // site:'xxx'
    // })
    if (checked === true) {
      // console.log("true")
      {
        this.setState({ loading: true })
        fetch("https://content.guardianapis.com/world?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all")
        // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/otherguardian1/world")
        // fetch("http://localhost:8080/otherguardian1/world")
          .then(response => response.json())
          .then(data => {
            console.log(data.response.results)
            this.setState({
              loading: false,
              articles: data.response.results,
              site: 'guardian'
            })
          })
      }
      // console.log("gua")
    }
    else {
      {
        this.setState({ loading: true })
        // console.log("false")
        fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O")
        // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/othernewyork1/world")
        // fetch("http://localhost:8080/othernewyork1/world")
          .then(response => response.json())
          .then(data => {
            console.log("data in false", data.results)
            this.setState({
              loading: false,
              articles: data.results,
              site: 'ny'
            })
          })
      }
      // console.log("ny")
    }

    // this.setState({ checked });
    // console.log("abcc")
  }

  componentDidMount() {

    this.setState({ loading: true })
    if (localStorage.getItem("state") == "true"){
        // this.setState({checked: true})
        fetch("https://content.guardianapis.com/world?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all")
        // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/otherguardian1/world")
        // fetch("http://localhost:8080/otherguardian1/world")
        .then(response => response.json())
        .then(data => {
          console.log(data.response.results, data);
          this.setState({
            loading: false,
            articles: data.response.results,
            site: 'guardian'
  
          })
        })
        
      } else {
        // this.setState({checked: false})
        fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O")
        // fetch("hhttp://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/othernewyork1/world")
        // fetch("http://localhost:8080/othernewyork1/world")
          .then(response => response.json())
          .then(data => {
            console.log("data in false", data.results)
            this.setState({
              loading: false,
              articles: data.results,
              site: 'ny'
            })
          })
        
      }
   
  }


func(val) {
  console.log(val)
  // const history = useHistory();
  window.location.href = '/search' + "?val=" + val + '&website=' + this.state.site;
  // return <Redirect to='/search" + "?val=" + val + "?website=" + this.state.site' push={true} />
  // browserHistory.push("/search" + "?val=" + val + "?website=" + this.state.site);

  // console.log("gua")

}


  render() {
    
    if (this.state.loading) {
      return <Spinner loading={this.state.loading} />
  }

    return (
     
      <div className="App">
       
          
       <Navbar className="navbar bg-primary" expand="lg">
       <Async func={this.func.bind(this)}/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              {/* <Form inline>
            <FormControl type="text" placeholder="Keyword" className="mr-sm-2" />

          </Form> */}
              <Nav.Link style={{ fontFamily: 'Georgia' }}> <Link to="/">Home </Link></Nav.Link>
              {/* <Nav style={{ display: "flex", flexDirection: "row" }}> */}
              <Nav.Link style={{ fontFamily: 'Georgia' }}> <Link to="/World">World </Link></Nav.Link>
              <Nav.Link style={{ fontFamily: 'Georgia' }}> <Link to="/Politics">Politics </Link></Nav.Link>
              <Nav.Link style={{ fontFamily: 'Georgia' }}> <Link to="/Business">Business </Link></Nav.Link>
              <Nav.Link style={{ fontFamily: 'Georgia' }}> <Link to="/Technology">Technology </Link></Nav.Link>
              <Nav.Link style={{ fontFamily: 'Georgia' }}><Link to="/Sports">Sports </Link></Nav.Link>
            </Nav>
            <Form inline style={{ float: 'right', marginLeft: '300px' }}>


              <IconContext.Provider value={{ color: "white", size: '20px', className: "global-class-name" }}>
                <div style={{ marginLeft: "-25%" }}>
                  <FaRegBookmark onClick={() => {
                    window.location.href = '/favorites';
                  }} />
                </div>
              </IconContext.Provider>

              <SwitchExample handler={this.handleChange.bind(this)} />
            </Form>


          </Navbar.Collapse>
        </Navbar>
        
        <Cards articles={this.state.articles} website={this.state.site == 'ny' ? 1 : 2} />

    
        










      </div>
     
    );
  }
}

export default World


