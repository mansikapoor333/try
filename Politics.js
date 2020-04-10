import React, { Component, Fragment } from 'react';
import Select from 'react-select';
// import asyncsearch from './components/async';
import SwitchExample from './toggleswitch';
// import Toolbar from './components/Toolbar/Toolbar';
import '../App.css';
import { Navbar, Nav, Form, FormControl, Card } from 'react-bootstrap';
import Cards from './Cards.js';
// import SocialShare from './c/SocialShare';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


// function App() {
class Politics extends Component {
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
        // fetch("https://content.guardianapis.com/politics?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all")
        // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/otherguardian/politics")
        fetch("http://localhost:8080/otherguardian1/politics")
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
        // fetch("https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O")
        // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/othernewyork/politics")
        fetch("http://localhost:8080/othernewyork1/politics")
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
        // fetch("https://content.guardianapis.com/politics?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all")
        // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/otherguardian/politics")
        fetch("http://localhost:8080/otherguardian1/politics")
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
        // fetch("https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O")
        // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/othernewyork/politics")
        fetch("http://localhost:8080/othernewyork1/politics")
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

//   shareOpenToggle() {
//     if (this.state.shareOpen==="closeShare") {
//         this.setState({
//             shareOpen: "openShare",
//             toggleButtonText: "Hide sharing options"
//         });
//     }else {
//         this.setState({
//             shareOpen: "closeShare",
//             toggleButtonText: "Share this"
//         });
//     }   
// }
  render() {
    const text = this.state.loading ? "" : ""
    return (
      
      <div className="App">
        
         

        <Navbar className="nv" bg="primary" variant="dark">
          {/* <asyncsearch /> */}

          <Form inline>
            <FormControl type="text" placeholder="Keyword" className="mr-sm-2" />

          </Form>
          <Navbar.Brand> <Link to = "/">Home </Link></Navbar.Brand>
          <Nav style={{ display: "flex", flexDirection: "row" }}>
            <Link to = "/">World </Link>
           <Link to = "/">Politics </Link>
            <Link to = "/">Business </Link>
            <Link to = "/">Technology </Link>
            <Link to = "/">Sports </Link>
            {/* <Nav.Link> <Link to = "/" > Home </Link></Nav.Link> */}
          </Nav>

          <SwitchExample handler={this.handleChange.bind(this)} />

          <p>{text}</p>



        </Navbar>
        
        <Cards articles={this.state.articles} website={this.state.site == 'ny' ? 1 : 2} />

     
       









      </div>
    
    );
  }
}

export default Politics


