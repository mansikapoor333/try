import React, { Component } from "react";
import { Search, Dropdown } from "semantic-ui-react";
import _ from "lodash";
// import logo from "./logo.svg";
// import SelectedResult from "./SelectedResult";
// import "./App.css";

class Async extends Component {
  state = { results: [], name: "" };

  handleSearchChange = async (event, value ) => {
      console.log(value)
    try {
      const response = await fetch(
        `https://api.cognitive.microsoft.com/bing/v7.0/suggestions?mkt=en-US&q=${value.searchQuery}`,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "97da7f4798184ae3a9ae9c1dc45db96f"
          }
        }
      );
      const data = await response.json();
      const resultsRaw = data.suggestionGroups[0].searchSuggestions;
      const results = resultsRaw.map(result => ({ title: result.displayText, url: result.url }));
      this.setState({ results });
      console.log(this.state.results)
    } catch (error) {
      console.error(`Error fetching search ${value}`);
    }
  };

    handleSch = (event, { value }) => {
        console.log('item selected is :', value)
        this.setState({ name: value });
        localStorage.setItem('searhkey',value);
        this.props.func(value)
    }

componentDidMount(){
  
  // if(localStorage.getItem('searhkey')){
  //   console.log("localStorage.getItem('searhkey')",localStorage.getItem('searhkey'));
  //   this.setState({ name: localStorage.getItem('searhkey') });
  // }
  // console.log(this.state.name,"his.state.name");
}

  render() {
    return (
      <div>
        <Dropdown id="stay"
                style={{ width: '250px' }}
                onSearchChange={_.debounce(this.handleSearchChange, 1000, {
                    leading: true
                })}
                placeholder="Select data schema"
                clearable
                fluid
                selection
                options={this.state.results.map(ds => {
                    return {
                        key: ds.title,
                        text: ds.title,
                        value: ds.title
                    }
                })}
                value={this.state.name}
                placeholder='Enter Keyword...' fluid search selection
                onChange={this.handleSch}


            />
        {/* <SelectedResult result={this.state.selectedResult} /> */}
      </div>
    );
  }
}

export default Async;