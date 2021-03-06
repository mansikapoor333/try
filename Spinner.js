import React from "react";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import '../App.css';
import Loading from './Loading.js';


// {
//     "presets": ["@babel/preset-react", "@babel/preset-env"],
//     "plugins": ["emotion"]
// }
const override = css`
  display: block;
  margin: 400px auto 0px auto;
  border-color: red;
  padding-top: 50%;
  
`;

class Spinner extends React.Component {
    render() {
        return (
            <div className="sweet-loading">
                <BounceLoader
                    css={override}
                    size={60}
                    color={"blue"}
                    loading={this.props.loading}
                />
               
            </div>
            //  <Loading />
        );
    }
}

export default Spinner;