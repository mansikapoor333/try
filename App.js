import React, { Component, Fragment } from 'react';
// import './components/bootstrap.min.css';
import Select, { components } from 'react-select';
import Async from './components/Async';
import SwitchExample from './components/toggleswitch';
// import Toolbar from './components/Toolbar/Toolbar';
import './App.css';
import { Navbar, Nav, Form, FormControl, Card } from 'react-bootstrap';
import Cards from './components/Cards.js';
// import SocialShare from './components/SocialShare';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Politics from './components/Politics';
import World from './components/World';
import Business from './components/Business';
import Sports from './components/Sports';
import Technology from './components/Technology';
import Detailedarticle from './components/Detailedarticle';
import Cardsgua from './components/Cardsgua';
import { Redirect } from 'react-router';
import { FaRegBookmark } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Favorites from './components/Favorites';
import Spinner from './components/Spinner';

// import CommentBox from './components/CommentBox';
// import Comments from './components/Comments';

// import Popup from './components/Popup';


// function App() {
class App extends Component {
  constructor(props) {
    super(props)
    // this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      loading: false,
      articles: [],
      site: "",
      showPopup: false,
      // comments=[]
      // shareOpen: "closeShare",
      // toggleButtonText: "Share this"
    }
  }

  handleChange(checked) {
    // console.log(checked)
    // this.setState({
    //   loading: false,
    //   articles: [],
    // site:'xx
    // })
    if (checked === true) {
      // console.log("true")
      {
        this.setState({ loading: true })
        fetch("https://content.guardianapis.com/search?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&section=(sport|business|technology|politics)&show-blocks=all")
        // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/mainguardian")
        // fetch("http://localhost:8080/mainguardian")
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
        fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O")
        // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/mainnewyork")
        // fetch("http://localhost:8080/mainnewyork")
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
    console.log(this.props, "this.props");
    if (localStorage.getItem("state") == "true") {
      this.setState({ checked: true })


      fetch("https://content.guardianapis.com/search?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&section=(sport|business|technology|politics)&show-blocks=all")
      // fetch("http://localhost:8080/mainguardian")
      // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/mainguardian")
        .then(response => response.json())
        .then(data => {
          console.log("data",data);
          console.log("data.response.results",data.response.results, data);
          this.setState({
            loading: false,
            articles: data.response.results,
            site: 'guardian'

          })
        })
    } else {
      this.setState({ loading: false })
      // console.log("false")
      fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O")
      // fetch("http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/mainnewyork")
      // fetch("http://localhost:8080/mainnewyork")
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

  // handleAddComment(comment) {
  //   this.setState(prevState => {
  //     return {
  //       comments: prevState.comments.concat(comment)
  //     };
  //   });
  // }

  func(val) {
    console.log(val)
    // const history = useHistory();
    window.location.href = '/search' + "?val=" + val + '&website=' + this.state.site;
    // return <Redirect to='/search" + "?val=" + val + "?website=" + this.state.site' push={true} />
    // browserHistory.push("/search" + "?val=" + val + "?website=" + this.state.site);

    // console.log("gua")

  }




  render() {

    // const text = this.state.loading ? "" : ""
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact path='/' render={props => (
                <Fragment>

                  <Navbar className="navbar bg-primary" expand="lg">
                    <Async func={this.func.bind(this)}

                    />
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        {/* <Async func={this.func.bind(this)}

                        /> */}

                        {/* <Form inline>
                        <FormControl type="text" placeholder="Keyword" className="mr-sm-2" />

                      </Form> */}
                        <Nav.Link style={{fontFamily:'Georgia'}}> <Link to="/">Home </Link></Nav.Link>
                        {/* <Nav style={{ display: "flex", flexDirection: "row" }}> */}
                        <Nav.Link style={{fontFamily:'Georgia'}}> <Link to="/World">World </Link></Nav.Link>
                        <Nav.Link style={{fontFamily:'Georgia'}}> <Link to="/Politics">Politics </Link></Nav.Link>
                        <Nav.Link style={{fontFamily:'Georgia'}}> <Link to="/Business">Business </Link></Nav.Link>
                        <Nav.Link style={{fontFamily:'Georgia'}}> <Link to="/Technology">Technology </Link></Nav.Link>
                        <Nav.Link style={{fontFamily:'Georgia'}}><Link to="/Sports">Sports </Link></Nav.Link>



                        {/* </Nav> */}



                        {/* <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div style={{ marginLeft: "35%" }}>
                          <FaBookmark onClick={() => {
                            window.location.href = '/favorites';
                          }} />
                        </div>
                      </IconContext.Provider>

                      // <SwitchExample handler={this.handleChange.bind(this)} /> */}

                        {/* <p>{text}</p> */}
                      </Nav>
                      <Form inline style={{ float: 'right', marginLeft: '300px' }}>


                        <IconContext.Provider value={{ color: "white",size: '20px', className: "global-class-name" }}>
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

                  {console.log('render() parent', this.state.site)}
                  <Cards articles={this.state.articles} website={this.state.site == 'ny' ? 1 : 2} />
                  {/* <Spinner /> */}
                  {/* <Cardsgua /> */}
                  {/* <CommentBox />
                  <Comments comments={this.state.comments} />
                  <CommentBox handleAddComment={this.handleAddComment} /> */}




                </Fragment>
              )}
            />

            {/* <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button> */}



            <Route
              exact path='/World' render={() => <World />} />
            <Route
              exact path='/Politics' render={() => <Politics />} />
            <Route
              exact path='/Business' render={() => <Business />} />
            <Route
              exact path='/Technology' render={() => <Technology />} />
            <Route
              exact path='/Sports' render={() => <Sports />} />
            <Route
              exact path='/article' render={(props) => <Detailedarticle {...props} />} />

            <Route
              exact path='/search' render={(props) => <Cardsgua {...props} />} />

            <Route
              exact path='/favorites' render={(props) => <Favorites {...props} />}



            />




          </Switch>


        </div>
      </Router>
    );
  }
}

export default App


