import React, { Component } from 'react';
// import Cards from './components/Detailedarticle';
import queryString from 'query-string';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EmailIcon, FacebookIcon, TwitterIcon } from "react-share";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import { IconContext } from "react-icons";
import { FaRegBookmark } from 'react-icons/fa';
import Reusableheader from './Reusableheader';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip'
import { css } from 'glamor';
import Transition from 'react-transition-group/Transition'
import commentBox from 'commentbox.io';
import Spinner from './Spinner';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';



class Detailedarticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false.id,
      article: {},
      descDiv: "collapse",
      color: "",
      values: {}



    };
    // console.log(this.props)
  }

  //   componentWillUpdate(){
  //   this.removeCommentBox = commentBox('5765659778613248-proj', {
  //     createBoxUrl(box_id, pageLocation) {
  //       return pageLocation.href
  //     }
  //   });
  // }

  // componentWillUnmount() {

  //   this.removeCommentBox();
  // }

  componentDidUpdate() {
    this.removeCommentBox = commentBox('5765659778613248-proj')
  }

  componentDidMount() {
    console.log("this.props", this.props);
    const values = queryString.parse(this.props.location.search)
    console.log('values', values) // "top"
    console.log(values.website)

    console.log("this.removeCommentBox", this.removeCommentBox);

    if (values.website == 2) {
      // console.log("true")
      {
        this.setState({ loading: true })
        // fetch("https://content.guardianapis.com/" + values.id + "?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all")
        // fetch(`http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com//otherguardian/${values}`)
        fetch(`http://localhost:8080/otherguardian2?id=${values.id}`)
          .then(response => response.json())
          .then(data => {
            console.log(data.response.content)
            this.setState({
              loading: false,
              article: data.response.content,
              values: values,
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
        console.log("calling this api")
        // fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("' + values.id + '")&api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O')
        // fetch(`http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com//othernewyork/${values}`)
        fetch(`http://localhost:8080/othernewyork2?id=${values.id}`)
          .then(response => response.json())
          .then(data => {
            console.log("data in false", data.response.docs)
            this.setState({
              loading: false,
              article: data.response.docs[0],
              values: values,
              site: 'ny'
            })
          }).catch(console.log)
      }
      // console.log("ny")
    }

    // if (website)
    // "im"
    // console.log("localStorage.getItem('state')",localStorage.getItem("state"));
    // if (localStorage.getItem("state") == "true"){
    //   this.setState({checked: true})
    // } else {
    //   this.setState({checked: false})
    // }

  }

  expandm = () => {
    this.setState({
      clicked: true,
      descDiv: "expand"

    })
  }

  expandl = () => {
    this.setState({
      clicked: false,
      descDiv: "collapse"
    })
  }



  // guardian
  PopupExample11(article) {
    console.log(article)
    return (
      <div style={{ marginTop: '3%', marginLeft: '62%' }}>


        <FacebookShareButton className='fbshare'
          url={article.webUrl}
          // quote="Guardian"
          hashtag="#CSCI_571_NewsApp"

        >
          <FacebookIcon size={28} round={true} data-tip data-for="Facebook" />
          <ReactTooltip id='Facebook' type='dark'>
            <span>Facebook</span>
          </ReactTooltip>
        </FacebookShareButton>


        <TwitterShareButton className='twshare'
          url={article.webUrl}

          hashtags={["CSCI_571_NewsApp"]}
        >
          <TwitterIcon size={28} round={true} data-tip data-for="Twitter" />
          <ReactTooltip id='Twitter' type='dark'>
            <span>Twitter</span>
          </ReactTooltip>
        </TwitterShareButton>


        <EmailShareButton className='emshare'
          body={article.webUrl}
          // openShareDialogOnClick={true}

          subject="#CSCI_571_NewsApp"
        >
          <EmailIcon size={28} round={true} data-tip data-for="Email" />
          <ReactTooltip id='Email' type='dark'>
            <span>Email</span>
          </ReactTooltip>
        </EmailShareButton>

        <IconContext.Provider value={{ color: this.state.color == "red" ? "red" : "blue", className: "global-class-name" }}>
          <div>
            <FaRegBookmark data-tip data-for="Bookmark" onClick={() => this.SaveDataToLocalStorage(article)} />
          </div>
          <ReactTooltip id='Bookmark' type='dark'>
            <span>Bookmark</span>
          </ReactTooltip>
        </IconContext.Provider>
      </div>
    )
  }
  ZoomInAndOut = ({ children, position, ...props }) => (
    <Transition
      {...props}
      onEnter={node => node.classList.add('zoomIn', 'animate')}
      onExit={node => {
        node.classList.remove('zoomIn', 'animate');
        node.classList.add('zoomOut', 'animate');
      }}
    >
      {children}
    </Transition>
  );

  SaveDataToLocalStorage(data) {
    {
      var a = [];

      a = JSON.parse(localStorage.getItem('session')) || [];

      a.push(data);

      // alert(a);  
      localStorage.setItem('session', JSON.stringify(a));
    }


    if (this.state.values.website == 2) {
      toast(`Saving ${this.state.article.webTitle}`, {
        transition: this.ZoomInAndOut,
        autoClose: 3000,
        className: css({ color: 'black' })
        // toast(this.state.article.webTitle)
      })
    }
    else {
      toast(`Saving ${this.state.article.headline.main}`, {
        transition: this.ZoomInAndOut,
        autoClose: 3000,
        className: css({ color: 'black' })

        // toast(this.state.article.headline.main)
      })

    }

    this.setState({
      color: "red"
    })


  }

  PopupExample12(article) {
    console.log(article)
    return (
      <div style={{ marginTop: '3%', marginLeft: '62%' }}>


        <FacebookShareButton className='fbshare'
          url={article.web_url}
          // quote="Guardian"
          hashtag="#CSCI_571_NewsApp"
        >
          <FacebookIcon size={28} round={true} data-tip data-for="Facebook" />
          <ReactTooltip id='Facebook' type='dark'>
            <span>Facebook</span>
          </ReactTooltip>
        </FacebookShareButton>


        <TwitterShareButton className='twshare'
          url={article.web_url}

          hashtags={["CSCI_571_NewsApp"]}
        >
          <TwitterIcon size={28} round={true} data-tip data-for="Twitter" />
          <ReactTooltip id='Twitter' type='dark'>
            <span>Twitter</span>
          </ReactTooltip>
        </TwitterShareButton>



        <EmailShareButton
          body={article.web_url}
          // openShareDialogOnClick={true}

          subject="#CSCI_571_NewsApp"
        >
          <EmailIcon size={28} round={true} data-tip data-for="Email" />
          <ReactTooltip id='Email' type='dark'>
            <span>Email</span>
          </ReactTooltip>
        </EmailShareButton>

        <IconContext.Provider value={{ color: this.state.color == "red" ? "red" : "blue", className: "global-class-name" }}>
          <div>
            <FaRegBookmark data-tip data-for="Bookmark" onClick={() => this.SaveDataToLocalStorage(article)} />
          </div>
          <ReactTooltip id='Bookmark' type='dark'>
            <span>Bookmark</span>
          </ReactTooltip>
        </IconContext.Provider>
      </div>
    )
  }





  // loadFromLocalStorage = () => {
  //   try {
  //     const serializedState = localStorage.getItem("article");
  //     if (serializedState === null) return undefined;
  //     return JSON.parse(serializedState);
  //   } catch (e) {
  //     console.log(e);
  //     return undefined;
  //   }
  // };
  // notify = () => {
  //   console.log("mansi")
  // if (this.state.values.website == 2) 
  // { toast(this.state.article.webTitle)
  // }
  // else { 
  //   toast(this.state.article.headline.main)}}

  detfirstimage(article){
    var i=0
    for(i=0; i< article.multimedia.length; i++){
      if(article.multimedia[i].width >= 2000){
        return "https://static01.nyt.com/" + article.multimedia[i].url 
        
      }
    }
  }

  render() {


    // const loadingspin = this.state.loading ? "" : ""
    // console.log('called render', this.state.values.website == 2)
    if (this.state.loading) {
      return <Spinner loading={this.state.loading} />
    }

    if (this.state.values.website == 2) {
      return (

        <div>

          {/* <button onClick={this.notify}></button> */}
          <ToastContainer align="center" hideProgressBar="true" position={toast.POSITION.TOP_CENTER}
          />

          <Reusableheader />

          {/* gua */}
          {

            this.state.article.blocks.main.elements["0"] && this.state.article.blocks.main.elements["0"].assets.length && this.state.article.webTitle && this.state.article.blocks.body[0].bodyTextSummary && this.state.article.webPublicationDate && this.state.article.sectionId &&

            <Card key={"cards" + this.state.article.id} className="card-style11" style={{ height: '80%', width: '97%', marginLeft: '23px', marginTop: '3%', boxShadow: '1px 1px 7px #8080804f' }} >
              {this.PopupExample11(this.state.article)}
              <div style={{ width: '96%', height: '90%' }}>
                <Card.Img style={{ width: '95%' }} src={this.state.article.blocks.main.elements["0"].assets[[this.state.article.blocks.main.elements["0"].assets.length - 1]] ? this.state.article.blocks.main.elements["0"].assets[[this.state.article.blocks.main.elements["0"].assets.length - 1]].file : "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"} />
              </div>
              <Card.Body>
                {/* <Link to={"/article?id=" + article.id + "&website=2"} > hafd</Link> */}


                <div style={{ marginBottom: '40%' }}>
                  <Card.Title className="cardgua-title11" style={{ marginTop: '-63%', textAlign: 'left', fontSize:'20px', fontStyle:'Times New roman', marginLeft:'26px' }}>{this.state.article.webTitle}</Card.Title>
                  <div className="dateishere" style={{ float: 'left' }}>
                    <Card.Text style={{marginLeft:'37px'}}>{this.state.article.webPublicationDate.split('T')[0]}</Card.Text>
                  </div>
                </div>
                <p className="col-vs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className={this.state.descDiv} style={{ height: '10%', marginTop: '23%' }}>
                    <Card.Text style={{ marginTop: '64%' }}>{this.state.article.blocks.body[0].bodyTextSummary}</Card.Text>
                  </div>
                </p>
                {!this.state.clicked && <MdExpandMore style={{ float: 'right', fontsize: '20px' }} onClick={this.expandm} />}
                {this.state.clicked && <MdExpandLess style={{ float: 'right', fontsize: '20px' }} onClick={this.expandl} />}
                {/* <Card.Text>{this.state.article.webPublicationDate}</Card.Text> */}
                {/* <Card.Text>{article.sectionId}</Card.Text> */}

                {/* {this.PopupExample11(this.state.article)} */}
                {/* card date */}

              </Card.Body>

            </Card>




          }
          <div className="commentbox" id={this.state.article.id} />

        </div>
      );
    } else {
      if (this.state.loading) {
        return <Spinner loading={this.state.loading} />
      }

      return (<div>
        <ToastContainer align="center" hideProgressBar="true" position={toast.POSITION.TOP_CENTER}
        />
        <Reusableheader />
        {/* ny */}
        {
          // this.state.article.abstract 

          this.state.article.headline && this.state.article.headline.main && this.state.article.pub_date && this.state.article.abstract && this.state.article.multimedia &&
          <Card key={"card-" + this.state.article.id} className="card-style12" style={{ height: '80%', width: '97%', marginLeft: '23px', marginTop: '3%', boxShadow: '1px 1px 7px #8080804f' }} >
            {this.PopupExample12(this.state.article)}
            <div style={{ width: '96%', height: '90%' }}>
            <Card.Img style={{ width: '95%' }}  src={this.state.article.multimedia && this.detfirstimage(this.state.article) ? this.detfirstimage(this.state.article) : "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"} />
            </div>
            <Card.Body>
            <div style={{ marginBottom: '40%' }}>
              <Card.Title style={{ marginTop: '-69%', textAlign: 'left', fontSize:'20px', fontStyle:'Times New roman', marginLeft:'26px' }}>{this.state.article.headline.main}</Card.Title>
              <div className="dateishere" style={{ float: 'left' }}>
              <Card.Text style={{marginLeft:'37px'}}>{this.state.article.pub_date.split('T')[0]}</Card.Text>
              </div>
              </div>
              <p className="col-vs-12 col-sm-12 col-md-12 col-lg-12">
                <div className={this.state.descDiv} style={{ height: '10%', marginTop: '23%' }}>
                  <Card.Text style={{ marginTop: '64%' }}>{this.state.article.abstract}</Card.Text>
                </div>
              </p>
              {!this.state.clicked && <MdExpandMore style={{ float: 'right', fontsize: '20px' }} onClick={this.expandm} />}
              {this.state.clicked && <MdExpandLess style={{ float: 'right', fontsize: '20px' }} onClick={this.expandl} />}
           
              {/* <Card.Text>{article.section}</Card.Text> */}
              {/* <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button> */}
             
              {/* card date */}

            </Card.Body>

          </Card>

        }
        <div className="commentbox" id={this.state.article.id} />
      </div>
      );

    }

  }


}



export default Detailedarticle

// new page
// redirect to new page after clicking the article
// store the article info in local Storage
// fetch article info from local Storage on new page

// localStorage
// JSON.parse
// JSON.stringify
// routing route='/article/article.title'


// if else fetch 
// if else render
// sharing