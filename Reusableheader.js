import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Card } from 'react-bootstrap';
import { FaRegBookmark } from 'react-icons/fa';
import { IconContext } from "react-icons";
// import SocialShare from './components/SocialShare';
import Async from './Async';
import { Link } from 'react-router-dom';
import Cardsgua from './Cardsgua';
import Spinner from './Spinner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SwitchExample from './toggleswitch';
import Cards from './Cards.js';
import Politics from './Politics';
import World from './World';
import Business from './Business';
import Sports from './Sports';
import Technology from './Technology';
import Detailedarticle from './Detailedarticle';
import Favorites from './Favorites';




class Reusableheader extends Component {
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

  func(val) {
    console.log("value is", val)
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

    // const text = this.state.loading ? "" : ""
    return (

      <div className="App">

        {/* <Route
            exact path='/' render={props => ( */}
        <Fragment>

          <Navbar className="navbar bg-primary" expand="lg">
            <Async func={this.func.bind(this)}

            />

            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                {/* <Form inline>
                      <FormControl type="text" placeholder="Keyword" className="mr-sm-2" />

                    </Form> */}
                <Nav.Link> <Link to="/">Home </Link></Nav.Link>
                {/* <Nav style={{ display: "flex", flexDirection: "row" }}> */}
                <Nav.Link> <Link to="/World">World </Link></Nav.Link>
                <Nav.Link> <Link to="/Politics">Politics </Link></Nav.Link>
                <Nav.Link> <Link to="/Business">Business </Link></Nav.Link>
                <Nav.Link> <Link to="/Technology">Technology </Link></Nav.Link>
                <Nav.Link><Link to="/Sports">Sports </Link></Nav.Link>



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


                <IconContext.Provider value={{ color: "white", className: "global-class-name1234" }}>
                  <div style={{ marginLeft: "35%" }}>
                    <FaRegBookmark onClick={() => {
                      window.location.href = '/favorites';
                    }} />
                  </div>
                </IconContext.Provider>

                {/* <SwitchExample handler={this.handleChange.bind(this)} /> */}
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



        {/* <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button> */}


        {/* 
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



          /> */}







      </div>

    );
  }

}

export default Reusableheader;