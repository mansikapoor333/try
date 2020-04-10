import React, { Component } from 'react';
import { IconContext } from "react-icons";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mdShare from '@iconify/icons-ion/md-share';
import { FaBookmark } from 'react-icons/fa';
import Popup from "reactjs-popup";
import { EmailIcon, FacebookIcon, TwitterIcon } from "react-share";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import { Icon, InlineIcon } from '@iconify/react';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import Transition from 'react-transition-group/Transition';
// npm install --save-dev @iconify/react @iconify/icons-ion
import mdTrash from '@iconify/icons-ion/md-trash';
import Reusableheader from './Reusableheader';
import Spinner from './Spinner';




class Favorites extends Component {

  constructor(props) {
    super(props)
    console.log("sss",props)
    this.state = {
      showPopup: false,
      articles: [],
      // console.log(props.user)
      // console.log(this.props)
    }
  }

  componentDidMount() {

console.log("has", this.props.website)

    function loadFromLocalStorage() {
      try {
        const serializedState = localStorage.getItem("session");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
      } catch (e) {
        console.log(e);
        return undefined;
      }
    };

    this.setState({
      loading: false,
      articles: loadFromLocalStorage() || [],
      // values: values,
      // site: 'guardian'
    })

    // loadFromLocalStorage();
  }
  PopupExample123(article) {
    console.log("inside function" + article)
    return (<Popup modal closeOnDocumentClick trigger={<Icon icon={mdShare} size={130} style={{color:'black', cursor:'pointer' }} />} position="top right">
      {/* trigger={<button>Trigger</button>}  */}
      {close => (
        <div className="sharewindow" style={{ height: '100%', width: '100%' }}>
        <div style={{ width: '95%', fontSize: '20px', fontFamily: 'Times new roman' }}>
            {article.webTitle ? article.webTitle : article.headline.main}
          </div>
          <div style={{ marginTop: '5%', fontSize: '17px', fontFamily: 'Times New roman' }}>
          Share Via
          </div>
          <a className="close" onClick={close} style={{ marginRight: '3%', marginTop: '-21%' }}>
            &times;
          </a>

<div className="sharing1" style={{ marginTop: '6%' , marginLeft:'-67%'}}>
          <FacebookShareButton className='fbshare'
            url={article.webUrl}
            // quote="Guardian"
            hashtag="#CSCI_571_NewsApp"

          >
            <FacebookIcon size={52} round />
          </FacebookShareButton>
          </div>
  <div className="sharing2" style={{ marginTop: '-10%' }}>

          <TwitterShareButton
            url={article.webUrl}

            hashtags={["CSCI_571_NewsApp"]}



          >
            <TwitterIcon size={52} round />
          </TwitterShareButton>
          </div>

<div className="sharing3" style={{ marginTop: '-10%', marginLeft:'66%' }}>

          <EmailShareButton
            body={article.webUrl}
            openShareDialogOnClick={true}

            subject="#CSCI_571_NewsApp"


          >
            <EmailIcon size={52} round />
          </EmailShareButton>
        </div>
        </div>
      )
      }
    </Popup>)
  }

  // render() {
  //       return(
  //       <div>
  //           read
  //           {this.state.articles.length}
  //       </div>
  //       );
  //   }

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

  delete(article) {
    console.log("aaaccc", article)
    var abc = -1;
    var title = article.webTitle ? article.webTitle : article.headline.main;
    console.log(title, "title")
    var articles = this.state.articles
    for (var i = 0; i < this.state.articles.length; i++) {
      var titleg = this.state.articles[i].webTitle ? this.state.articles[i].webTitle : this.state.articles[i].headline.main
      console.log(titleg, "titleg")
      if (title === titleg) {
        abc = i
        console.log(abc, "abc")
        break;
      }


    }
    if (abc > -1) {
      articles.splice(abc, 1);

      localStorage.setItem('session', JSON.stringify(articles));
      this.setState({
        articles: articles,

      })
    }

// console.log("his", this.state.website)
//     if (this.props.values.website == 2) {
      // console.log("hello")
      // if(article.webTitle)
      // {
      if(title){
        console.log("aaa",article)
      toast(`Removing ${title}`, {
        transition: this.ZoomInAndOut,
        autoClose: 3000,
        className: css({ color: 'black' })
        // toast(this.state.article.webTitle)
      })}
    // }
    // else {
    //   // if(article.headline && article.headline.main){
    //   toast(`Removing ${article.headline.main}`, {
    //     transition: this.ZoomInAndOut,
    //     autoClose: 3000,
    //     className: css({ color: 'black' })

    //     // toast(this.state.article.headline.main)
    //   })
    // // }

    // }
  }


  render() {
    if (this.state.loading) {
      return <Spinner loading={this.state.loading} />
    }
    

    {
      return (
        this.state.articles.length > 0 ?
        
      (<div className="asyncny Container fluid">

        <ToastContainer align="center" hideProgressBar="true" position={toast.POSITION.TOP_CENTER}
        />
          <Reusableheader />
          <div className="Fav" style={{float:'left', marginLeft:'3%', marginTop:'1%', fontSize:'29px', fontFamily:'Times New Roman'}}>
          Favorites
          </div>
        {/* gua */}
        <div className="card-style78 row" style={{marginTop:'5%', height:'18rem'}} >
          {this.state.articles.slice(0, 10).map((article, index) => (
            //  <Link to={"/article?id="+ article.id + "&website=2"} className={'linksd'} > {

            // article.blocks.main.elements["0"] && article.blocks.main.elements["0"].assets.length && article.webTitle && article.blocks.body[0].bodyTextSummary && article.webPublicationDate && article.sectionId &&
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Card key={"cards" + index} style={{width:'96%', height:'109%', marginLeft:'1%', boxShadow: '2px 2px #b9b4b457'}}  >
              <div className="card-style">
                <Link to={"/article?id=" + article.id + "&website=2"} >
                  <div>
                    <Card.Img className="cardgua-img row" style={{width:'92%', marginLeft:'4%', marginTop:'25%', padding: '3% 3% 3% 3%', border: 'solid 1px #ededed'}} src={article.blocks && article.blocks.main.elements["0"].assets[[article.blocks.main.elements["0"].assets.length - 1]] ? article.blocks.main.elements["0"].assets[[article.blocks.main.elements["0"].assets.length - 1]].file : "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"} />
                  </div>
                  <div>
                    <Card.Body style={{color:'black', textDecoration:'none', cursor:'pointer', textOverflow:'ellipsis' }}>

                      <Card.Title className="cardgua-title" >{article.webTitle ? article.webTitle : article.headline.main}</Card.Title>
                      <Card.Title className="cardgua-source" >{article.hasOwnProperty('article.webTitle')? 'GUARDIAN' : 'NYTIMES'}</Card.Title>
                      {/* <Card.Text className="summary">{article.blocks && article.blocks.body[0].bodyTextSummary ? article.blocks.body[0].bodyTextSummary : article.abstract}</Card.Text> */}
                      <Card.Text className="cardsguaweb"style={{float:'left', marginTop:'2%'}} >{article.webPublicationDate ? article.webPublicationDate.split('T')[0] : article.pub_date.split('T')[0]}</Card.Text>


                      {/* <Card.Text className="cardsgua-text" >{article.sectionId}</Card.Text> */}

                      {/* {this.PopupExample(article)} */}
                      {/* card date */}
                      {/* <IconContext.Provider value={{ color: "blue", className: "global-class-name1" }}>
                <div>
                  <FaBookmark onClick={() => this.delete(article)} />
                </div>
              </IconContext.Provider> */}

                     
                    </Card.Body>

                  </div>
                 
                </Link>
                <span style={{marginLeft:'47%'}}>
                {this.PopupExample123(article)}
                <Icon icon={mdTrash} onClick={() => this.delete(article)} />
                </span>
              </div>
            </Card>
            </div>


          ))}

        </div>
      </div>
      )

      : <div>
         <Reusableheader />
         You have no saved articles</div>
      );
    }
  
  

  }
  }


export default Favorites;