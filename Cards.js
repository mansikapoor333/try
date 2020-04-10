import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Popup from './Popup';
import Popup from "reactjs-popup";
import { EmailIcon, FacebookIcon, TwitterIcon } from "react-share";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import { Icon, InlineIcon } from '@iconify/react';
import mdShare from '@iconify/icons-ion/md-share';
import { Link } from 'react-router-dom';
import '../App.css';





class Cards extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showPopup: false
      // console.log(props.user)
      // console.log(this.props)
    }
  }

  componentWillUpdate() {
    // console.log(this.props.articles)
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


  // guardian
  PopupExample(article) {
    console.log("inside function" + article)
    return (<Popup modal closeOnDocumentClick trigger={<Icon icon={mdShare} size={130} style={{ position: 'absolute', right: '34.5%', marginTop: '30px' }} />} >
      {/* trigger={<button>Trigger</button>}  */}
      {close => (
        <div className="sharewindow" style={{ height: '100%', width: '100%' }}>
          <div style={{ width: '95%', fontSize: '20px', fontFamily: 'Times new roman' }}>
            {article.webTitle}

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
              // openShareDialogOnClick={true}

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


  // newyork
  PopupExample1(article) {
    console.log(article)
    return (<Popup modal closeOnDocumentClick trigger={<Icon icon={mdShare} size={130} style={{ position: 'absolute', right: '34.5%', marginTop: '30px' }} />} position="top right">
      {/* trigger={<button>Trigger</button>}  */}
      {close => (
        <div className="sharewindow" style={{ height: '100%', width: '100%' }}>
          <div style={{ width: '95%', fontSize: '20px', fontFamily: 'Times new roman' }}>
            {article.title}
            </div>
            <div style={{ marginTop: '5%', fontSize: '20px', fontFamily: 'Times New roman' }}>
              Share Via
          </div>
            <a className="close" onClick={close} style={{ marginRight: '1%', marginTop: '-22%' }}>
              &times;
          </a>

          <div className="sharing1" style={{ marginTop: '6%' , marginLeft:'-67%'}}>
            <FacebookShareButton className='fbshare'
              url={article.url}
              // quote="Guardian"
              hashtag="#CSCI_571_NewsApp"

            >
              <FacebookIcon size={52} round />
            </FacebookShareButton>
            </div>

            <div className="sharing2" style={{ marginTop: '-10%' }}>
            <TwitterShareButton
              url={article.url}

              hashtags={["CSCI_571_NewsApp"]}



            >
              <TwitterIcon size={52} round />
            </TwitterShareButton>
            </div>

            <div className="sharing3" style={{ marginTop: '-10%', marginLeft:'66%' }}>

            <EmailShareButton
              body={article.url}
              // openShareDialogOnClick={true}

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

  // detailed article
  saveToLocalStorage = article => {
    try {
      const serializedState = JSON.stringify(article);
      localStorage.setItem("article", serializedState);
      console.log("serializedState")

    } catch (e) {
      console.log(e);
    }
  };

  firstimage(article) {
    var i = 0
    for (i = 0; i < article.multimedia.length; i++) {
      if (article.multimedia[i].width >= 2000) {
        return article.multimedia[i].url

      }
    }
  }



  render() {
    console.log('render()', this.props.website)

    if (this.props.website == 2) {
      return (<div>
        {/* gua */}
        {/* <div className="row">  */}
        {this.props.articles.slice(0, 10).map((article, index) => (


article.blocks.main && article.blocks.main.elements["0"] && article.blocks.main.elements["0"].assets.length && article.webTitle && article.blocks.body[0].bodyTextSummary && article.webPublicationDate && article.sectionId &&

          <Card key={"cards" + index} style={{ height: '292px', width: '97%', marginLeft: '21px', marginBottom: '20px', boxShadow: '4px 4px #b9b4b457', padding: '10px', marginTop: '2%' }} >
            <div>
              <Link to={"/article?id=" + article.id + "&website=2"} className={'linksd'} >


                <div style={{ width: '20%' }}>
                  <Card.Img className="cardgua-img" height="250px" width="100px" style={{ marginLeft: '-3px', float: 'left', marginTop: '-30%', padding: '3% 3% 3% 3%', border: 'solid 1px #ededed' }} src={article.blocks.main.elements["0"].assets[[article.blocks.main.elements["0"].assets.length - 1]] ? article.blocks.main.elements["0"].assets[[article.blocks.main.elements["0"].assets.length - 1]].file : "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"} />
                </div>
                <div style={{ marginTop: '10%', height: '20%', marginLeft: '2%' }}>
                  <Card.Body className="bodygua" style={{ marginTop: '-30px', marginLeft: '238px' }} >
                    {/* <Link to={"/article?id="+ article.id + "&website=2"} > hafd</Link> */}
                    <Card.Title className="cardgua-title" style={{ marginTop: '-9%', display: 'flex' }} >{article.webTitle}</Card.Title>
                    <Card.Text className="summary">{article.blocks.body[0].bodyTextSummary}</Card.Text>
                    <div>
                      <Card.Text style={{ float: 'left' }} >{article.webPublicationDate.split('T')[0]}</Card.Text>
                    </div>
                    <div>
                      {article.sectionId == "world" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '7B4DFE' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                      {article.sectionId == "sport" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#F6C244' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                      {article.sectionId == "technology" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#CEDC39' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                      {article.sectionId == "business" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#4696EC' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                      {article.sectionId == "politics" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#419488' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                      {article.sectionId == "" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#6E757C' }} >{"HEALTH"}</Card.Text>}


                    </div>

                    {/* {this.PopupExample(article)} */}
                    {/* card date */}

                  </Card.Body>
                </div>

              </Link>
            </div>

            {this.PopupExample(article)}
          </Card>


        ))}
        {/* </div> */}
      </div>
      );
    } else {
      return (<div>

        {/* ny */}
        {/* {console.log('render()',this.props.articles)} */}
        {this.props.articles.slice(0, 10).map((article, index) => (


          // article && article.title && article.published_date.TextSummary && article.abstract && article.section && article.multimedia && article.multimedia[0] &&
          article &&
          <Card key={"card-" + index} style={{ height: '292px', width: '97%', marginLeft: '21px', marginBottom: '20px', boxShadow: '4px 4px #b9b4b457', padding: '10px', marginTop: '2%' }} >
            <div>
              <Link to={"/article?id=" + article.url + "&website=1"} className={'linksd'} >
                <div style={{ width: '20%' }}>
                  <Card.Img height="250px" width="100px" style={{ marginLeft: '-3px', float: 'left', marginTop: '-30%', padding: '3% 3% 3% 3%', border: 'solid 1px #ededed' }} src={article.multimedia && this.firstimage(article) ? this.firstimage(article) : "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"} />
                </div>
                <div style={{ marginTop: '10%', height: '20%', marginLeft: '2%' }}>
                  <Card.Body style={{ marginTop: '-30px', marginLeft: '238px' }}>
                    {/* {article.multimedia.url + "Url"} */}
                    {/* <Link to={"/article?id="+ article.url + "&website=1"} > safd</Link> */}
                    {/* console.log(articles.multimedia.url) */}
                    <Card.Title style={{ marginTop: '-9%', display: 'flex' }}>{article.title}</Card.Title>
                    <Card.Text className="summary1" >{article.abstract}</Card.Text>
                    {/* <Card.Text>{article.published_date.TextSummary}</Card.Text> */}
                    <div>
                      <Card.Text style={{ float: 'left' }}>{article.published_date.split('T')[0]}</Card.Text>
                    </div>
                    <div>
                      {/* <Card.Text style={{ float: 'right' }}>{article.section.toUpperCase()}</Card.Text> */}
                      {article.section == "world" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '7B4DFE' }} >{article.section.toUpperCase()}</Card.Text>}

                      {article.section == "sport" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#F6C244' }} >{article.section.toUpperCase()}</Card.Text>}

                      {article.section == "technology" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#CEDC39' }} >{article.section.toUpperCase()}</Card.Text>}

                      {article.section == "business" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#4696EC' }} >{article.section.toUpperCase()}</Card.Text>}

                      {article.section == "politics" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#419488' }} >{article.section.toUpperCase()}</Card.Text>}

                      {article.section == "" &&
                        <Card.Text style={{ float: 'right', backgroundColor: '#6E757C' }} >{"HEALTH"}</Card.Text>}
                    </div>
                    {/* <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button> */}

                    {/* card date */}

                  </Card.Body>
                </div>

              </Link>
            </div>
            {this.PopupExample1(article)}
          </Card>

        ))}

      </div>
      );

    }

  }

  // <Switch>
  //       <Redirect from='/old-path' to='/article/article.title' />
  //       <Route path='/article/article.title'>
  //         <Place />
  //       </Route>
  //     </Switch>


}
export default Cards;