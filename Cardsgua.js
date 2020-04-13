
import React, { Component } from 'react';
// import {useHistory} from 'react-router-dom';
import { browserHistory } from 'react-router'
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../App.css';
import Reusableheader from './Reusableheader';
import ReactTooltip from 'react-tooltip';
import Popup from "reactjs-popup";
import { EmailIcon, FacebookIcon, TwitterIcon } from "react-share";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import { Icon, InlineIcon } from '@iconify/react';
import mdShare from '@iconify/icons-ion/md-share';
import Spinner from './Spinner';





class Cardsgua extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showPopup: false,
            articles: [],
            // console.log(props.user)
            // console.log(this.props)
        }
    }


    func(val) {
        // console.log("val",val);
        // const history = useHistory();
        if (this.state.site == 'guardian') {
            this.setState({ loading: true })
            fetch("https://content.guardianapis.com/search?q=" + val + "&api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all")
            // fetch(`http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/otherguardian/${val}`)
            // fetch(`http://localhost:8080/otherguardian/${val}`)
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

        else {

            this.setState({ loading: true })
            // console.log("false")
            fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + val + "&api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O")
            // fetch(`http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/othernewyork/${val}`)
            // fetch(`http://localhost:8080/othernewyork/${val}`)
                .then(response => response.json())
                .then(data => {
                    console.log("data in false", data.response.docs)
                    this.setState({
                        loading: false,
                        articles: data.response.docs,
                        site: 'ny'
                    })
                })

            // console.log("ny")
        }

    }

    componentDidMount() {
        // console.log("this.props", this.props);
        const values = queryString.parse(this.props.location.search)
        console.log(values) // "top"
        // console.log(values.website)

        if (values.website == "guardian") {
            // console.log("true")
            {
                this.setState({ loading: true })
                fetch("https://content.guardianapis.com/search?q=" + values.val + "&api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all")
                // fetch(`http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/otherguardian3/${values.val}`)
                // fetch(`http://localhost:8080/otherguardian3/${values.val}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.response.results)
                        this.setState({
                            loading: false,
                            articles: data.response.results,
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
                fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + values.val + "&api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O")
                // fetch(`http://mansihw8-envtoday.eba-jhye5r7y.us-east-1.elasticbeanstalk.com/othernewyork3/${values.val}`)
                // fetch(`http://localhost:8080/othernewyork3/${values.val}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log("data in false", data.response.docs)
                        this.setState({
                            loading: false,
                            articles: data.response.docs,
                            values: values,
                            site: 'ny'
                        })
                    })
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
    // render() {
    //     return(
    //     <div>
    //         read
    //     </div>
    //     );
    // }

    PopupExample101(article) {
        console.log(article)
        return (<div className="pop1" style={{marginTop:'-74%', marginLeft:'80%'}}>
        <Popup modal closeOnDocumentClick trigger={<Icon icon={mdShare} style={{ color: 'black', cursor: 'pointer' }} />} position="top right">
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

                    <div className="sharing1" style={{ marginTop: '6%', marginLeft: '-67%' }}>
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
                    <div className="sharing3" style={{ marginTop: '-10%', marginLeft: '66%' }}>
                        <EmailShareButton
                            body={article.url}
                            openShareDialogOnClick={true}

                            subject="#CSCI_571_NewsApp"


                        >
                            <EmailIcon size={52} round />
                        </EmailShareButton>
                    </div>
                </div>
            )
            }
        </Popup>
        </div>)
    }

    PopupExample102(article) {
        console.log(article)
        return (<div className="pop2" style={{marginTop:'-83%', marginLeft:'80%'}}>
        <Popup modal closeOnDocumentClick trigger={<Icon icon={mdShare} style={{ color: 'black', cursor: 'pointer' }} />} position="top right">
            {/* trigger={<button>Trigger</button>}  */}
            {close => (
                <div className="sharewindow" style={{ height: '100%', width: '100%' }}>
                    <div style={{ width: '95%', fontSize: '20px', fontFamily: 'Times new roman' }}>
                        {article.headline.main}
                    </div>
                    <div style={{ marginTop: '5%', fontSize: '17px', fontFamily: 'Times New roman' }}>
                        Share Via
                    </div>
                    <a className="close" onClick={close} style={{ marginRight: '3%', marginTop: '-21%' }}>
                        &times;
              </a>

                    <div className="sharing1" style={{ marginTop: '6%', marginLeft: '-67%' }}>
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
                    <div className="sharing3" style={{ marginTop: '-10%', marginLeft: '66%' }}>
                        <EmailShareButton
                            body={article.url}
                            openShareDialogOnClick={true}

                            subject="#CSCI_571_NewsApp"


                        >
                            <EmailIcon size={52} round />
                        </EmailShareButton>
                    </div>
                </div>
            )
            }
        </Popup>
        </div>)
    }

    firstimages(article) {
        var i = 0
        for (i = 0; i < article.multimedia.length; i++) {
            if (article.multimedia[i].width >= 2000) {
                return "https://static01.nyt.com/" + article.multimedia[i].url

            }
        }
    }

    render() {
        if (this.state.loading) {
            return <Spinner loading={this.state.loading} />
        }

        if (this.state.site == 'guardian') {
            return (
                <div className="asyncgua Container fluid" >

                    <Reusableheader />
                    <div className="Fav" style={{ float: 'left', marginLeft: '3%', marginTop: '1%', fontSize: '29px', fontFamily: 'Times New Roman', fontWeight:'bold' }}>
                        Results
          </div>


                    {/* gua */}
                    <div className="card-style78 row" style={{ marginTop: '5%', height: '18rem' }} >
                        {this.state.articles.slice(0, 10).map((article, index) => (




                            article.blocks.main && article.blocks.main.elements["0"] && article.blocks.main.elements["0"].assets.length && article.webTitle && article.blocks.body[0].bodyTextSummary && article.webPublicationDate && article.sectionId &&
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                <Card key={"cards" + index} style={{ width: '95%', height: '98%', marginLeft: '1%', boxShadow: '2px 2px #b9b4b457' }}  >
                                    <div className="card-style">
                                        {/* <div className="p-3" > */}
                                        <Link to={"/article?id=" + article.id + "&website=2"} >

                                            <div>
                                                <Card.Img className="cardgua-img row" style={{ width: '92%', marginLeft: '3%', marginTop: '25%', padding: '3% 3% 3% 3%', border: 'solid 1px #ededed' }} src={article.blocks.main.elements["0"].assets[[article.blocks.main.elements["0"].assets.length - 1]] ? article.blocks.main.elements["0"].assets[[article.blocks.main.elements["0"].assets.length - 1]].file : "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"} />
                                            </div>
                                            <div>
                                                <Card.Body style={{ color: 'black', textDecoration: 'none', cursor: 'pointer', textOverflow: 'ellipsis', marginTop:'-4%' }} >
                                                    <Card.Title className="cardgua-title" style={{fontFamily:'Serif' }}>{article.webTitle}</Card.Title>
                                                    {/* <Link to={"/article?id="+ article.id + "&website=2"} > hafd</Link> */}
                                                    {/* <Card.Title className="cardgua-title" style={{ marginLeft: '50px', marginTop: '-30px' }}>{article.webTitle}</Card.Title> */}
                                                    {/* <Card.Text className="summary">{article.blocks.body[0].bodyTextSummary}</Card.Text> */}
                                                    <Card.Text style={{ float: 'left', marginTop: '2%' , fontStyle:'italic'}}>{article.webPublicationDate.split('T')[0]}</Card.Text>
                                                    {/* <Card.Text>{article.sectionId.toUpperCase()}</Card.Text> */}

                                                    <div>
                                                        {article.sectionId == "world" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '7B4DFE' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                                                        {article.sectionId == "sport" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#F6C244' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                                                        {article.sectionId == "technology" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#CEDC39' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                                                        {article.sectionId == "business" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#95C3F4' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                                                        {article.sectionId == "politics" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#419488' }} >{article.sectionId.toUpperCase()}</Card.Text>}

                                                        {!article.sectionId == "world" && !article.sectionId == "sport" && !article.sectionId == "technology" && !article.sectionId == "business" && !article.sectionId == "politics" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#D3D3D3' }} >NONE</Card.Text>}


                                                    </div>


                                                    {/* {this.PopupExample(article)} */}
                                                    {/* card date */}

                                                </Card.Body>
                                            </div>

                                        </Link>
                                        {/* </div > */}
                                        {this.PopupExample101(article)}
                                    </div>
                                </Card>
                            </div>

                        ))}

                    </div>



                </div >



            );
        } else {
            if (this.state.loading) {
                return <Spinner loading={this.state.loading} />
            }

            {
                return (

                    <div className="asyncny Container fluid">

                        <Reusableheader />
                        <div className="Fav" style={{ float: 'left', marginLeft: '3%', marginTop: '1%', fontSize: '29px', fontFamily: 'Times New Roman', fontWeight:'bold'}}>
                            Results
          </div>


                        {/* ny */}
                        <div className="card-style78 row" style={{ marginTop: '5%', height: '18rem' }} >
                            {this.state.articles.slice(0, 10).map((article, index) => (

                                // <Link to={"/article?id="+ article.url + "&website=1"} className={'linksd'} > {

                                article && article.headline && article.headline.main && article.pub_date && article.news_desk &&
                                // article &&
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                    <Card key={"card-" + index} style={{ width: '95%', height: '98%', marginLeft: '5%', boxShadow: '2px 2px #b9b4b457' }}  >
                                        <div className="card-style">
                                            <Link to={"/article?id=" + article.web_url + "&website=1"} className={'linksd'} >
                                                <div>
                                                    <Card.Img className="cardgua-img row" style={{ width: '92%', marginLeft: '4%', marginTop: '25%', padding: '3% 3% 3% 3%', border: 'solid 1px #ededed' }} src={article.multimedia && this.firstimages(article) ? this.firstimages(article) : "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg"} />
                                                </div>
                                                {/* src="https://static01.nyt.com/"+ article.multimedia["0"].url */}
                                                <div>
                                                    <Card.Body style={{ color: 'black', textDecoration: 'none', cursor: 'pointer', textOverflow: 'ellipsis', marginTop:'-1%' }}>
                                                        {/* {article.multimedia.url + "Url"} */}
                                                        {/* <Link to={"/article?id="+ article.url + "&website=1"} > safd</Link> */}
                                                        {/* console.log(articles.multimedia.url) */}
                                                        <Card.Title style={{fontFamily:'Serif', marginTop:'-98%' }}>{article.headline.main}</Card.Title>
                                                        {/* <Card.Text>{article.abstract}</Card.Text> */}
                                                        {/* <Card.Text>{article.published_date.TextSummary}</Card.Text> */}


                                                        <Card.Text style={{ float: 'left', marginTop: '7%', fontStyle:'italic' }}>{article.pub_date.split('T')[0]}</Card.Text>
                                                        {/* <Card.Text>{article.news_desk}</Card.Text> */}
                                                        {/* <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button> */}
                                                        {/* {this.PopupExample1(article)} */}
                                                        {/* card date */}


                                                    <div>
                                                        {article.news_desk == "world" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '7B4DFE' }} >{article.news_desk.toUpperCase()}</Card.Text>}

                                                        {article.news_desk == "sports" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#F6C244' }} >{article.news_desk.toUpperCase()}</Card.Text>}

                                                        {article.news_desk== "technology" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#CEDC39' }} >{article.news_desk.toUpperCase()}</Card.Text>}

                                                        {article.news_desk == "business" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#95C3F4' }} >{article.news_desk.toUpperCase()}</Card.Text>}

                                                        {article.news_desk == "politics" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#419488' }} >{article.news_desk.toUpperCase()}</Card.Text>}

                                                        {!article.news_desk == "world" && !article.news_desk == "sports" && !article.news_desk == "technology" && !article.news_desk == "business" && !article.news_desk == "politics" &&
                                                            <Card.Text style={{ float: 'right', backgroundColor: '#D3D3D3' }} >NONE</Card.Text>}


                                                    </div>

                                                    </Card.Body>
                                                </div>
                                            </Link>

                                            {this.PopupExample102(article)}
                                        </div>
                                    </Card>

                                </div>

                            ))}

                        </div>
                    </div>


                );

            }

        }
    }
}

export default Cardsgua;