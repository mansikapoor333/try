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
import Reusableheader1 from './Reusableheader1';




class Favorites extends Component {

  constructor(props) {
    super(props)
    console.log("sss", props)
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
        console.log("call window", window)
        const serializedState = localStorage.getItem("session");
        console.log("state", serializedState)
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
    return (<Popup modal closeOnDocumentClick trigger={<Icon icon={mdShare} size={130} style={{ color: 'black', cursor: 'pointer' }} />} position="top right">
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

          <div className="sharing1" style={{ marginTop: '6%', marginLeft: '-67%' }}>
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

          <div className="sharing3" style={{ marginTop: '-10%', marginLeft: '66%' }}>

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
    if (title) {
      console.log("aaa", article)
      toast(`Removing ${title}`, {
        transition: this.ZoomInAndOut,
        autoClose: 3000,
        className: css({ color: 'black' })
        // toast(this.state.article.webTitle)
      })
    }
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
      console.log("dfg", this.state.articles.slice(0, 10))
      return (

        this.state.articles.length > 0 ?

          (<div className="asyncny Container fluid">

            <ToastContainer align="center" hideProgressBar="true" position={toast.POSITION.TOP_CENTER}
            />
            <Reusableheader1 />
            <div className="Fav" style={{ float: 'left', marginLeft: '3%', marginTop: '1%', fontSize: '29px', fontFamily: 'Georgia' }}>
              Favorites
          </div>
            {/* gua */}
            <div className="card-style78 row" style={{ marginTop: '5%', height: '18rem' }} >
              {this.state.articles.slice(0, 10).map((article, index) => (
                <div className='col-xs-12 col-md-6 col-lg-3' key={index}>
                  <Card
                    key={'cards' + index}
                    style={{ width: '96%', height: '92%', marginLeft: '6%', boxShadow: '2px 2px #b9b4b457' }}>
                    <div className='card-style'>
                      <Link to={'/article?id=' + article.id + '&website=2'}>
                        <div>
                          <Card.Img
                            className='cardgua-img row'
                            style={{
                              width: '92%',
                              marginLeft: '4%',
                              marginTop: '25%',
                              padding: '3% 3% 3% 3%',
                              border: 'solid 1px #ededed',
                            }}
                            src={
                              article.blocks &&
                                article.blocks.main.elements['0'].assets[[article.blocks.main.elements['0'].assets.length - 1]]
                                ? article.blocks.main.elements['0'].assets[[article.blocks.main.elements['0'].assets.length - 1]].file
                                : 'https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png'
                            }
                          />
                        </div>
                        <div>
                          <Card.Body style={{ color: 'black', textDecoration: 'none', cursor: 'pointer', textOverflow: 'ellipsis' }}>
                            <Card.Title className='cardgua-title'  style={{fontFamily:'Georgia' }}>
                              {article.webTitle ? article.webTitle : article.headline.main}
                            </Card.Title>
                            <div>
                            {article.hasOwnProperty('article.webTitle') ? 
                            (<Card.Title className='cardgua-source' style={{marginTop:'75%', marginLeft:'73%', backgroundColor:'#00003f', color:'white' }}>
                              GUARDIAN
                            </Card.Title>) : 
                            // {article.hasOwnProperty('article.headline.main') == "NYTIMES"}
                           (<Card.Title className='cardgua-source' style={{marginTop:'75%', marginLeft:'73%', backgroundColor:'#C0C0C0' }}>
                             NYTIMES
                           </Card.Title>)}
                           </div>
                           <div>
                            
                              {article.news_desk || article.sectionId == "world" &&
                                <Card.Text className="cardsgua-text" style={{ float: 'right', backgroundColor: '7B4DFE', marginRight:'30%', marginTop:'-11%' }} >{article.sectionId ? article.sectionId.toUpperCase() : article.news_desk.toUpperCase()}</Card.Text>}

                              {article.news_desk == "sports" || article.sectionId == "sport" &&
                                <Card.Text className="cardsgua-text" style={{ float: 'right', backgroundColor: '#F6C244', marginRight:'30%', marginTop:'-11%'  }} >{article.sectionId ? article.sectionId.toUpperCase() : article.news_desk.toUpperCase()}</Card.Text>}

                              {article.news_desk || article.sectionId == "technology" &&
                                <Card.Text className="cardsgua-text" style={{ float: 'right', backgroundColor: '#CEDC39', marginRight:'30%', marginTop:'-11%'  }} >{article.sectionId ? article.sectionId.toUpperCase() : article.news_desk.toUpperCase()}</Card.Text>}

                              {article.news_desk || article.sectionId == "business" &&
                                <Card.Text className="cardsgua-text" style={{ float: 'right', backgroundColor: '#4696EC' , marginRight:'30%', marginTop:'-11%' }} >{article.sectionId ? article.sectionId.toUpperCase() : article.news_desk.toUpperCase()}</Card.Text>}

                              {article.news_desk || article.sectionId == "politics" &&
                                <Card.Text className="cardsgua-text" style={{ float: 'right', backgroundColor: '#419488', marginRight:'30%', marginTop:'-11%'  }} >{article.sectionId ? article.sectionId.toUpperCase() : article.news_desk.toUpperCase()}</Card.Text>}

                              {!article.news_desk == "world"|| !article.sectionId == "world" && !article.news_desk == "sports" && !article.sectionId == "sport" && !article.news_desk == "technology" || !article.sectionId == "technology" && !article.news_desk == "business" || !article.sectionId == "business" && !article.news_desk == "politics" || !article.sectionId == "politics" &&
                                <Card.Text className="cardsgua-text" style={{ float: 'right', backgroundColor: '#6E757C', marginRight:'30%', marginTop:'-11%'  }} >HEALTH</Card.Text>} 


                          
                            <Card.Text className='cardsguaweb' style={{ float: 'left', marginTop: '-10%', fontStyle:'italic' }}>
                              {article.webPublicationDate ? article.webPublicationDate.split('T')[0] : article.pub_date.split('T')[0]}
                            </Card.Text>
                            </div>
                           
                          </Card.Body>
                        </div>
                      </Link>
                      <span style={{ position:'absolute', left:'87%', top:'12%' }}>
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
            <Reusableheader1 />
            You have no saved articles</div>
      );
    }



  }
}


export default Favorites;