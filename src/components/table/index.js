import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API.js";


class Table extends Component {
    state = {
      search: "",
      results: [],
      sort: ""
    };

    componentDidMount() {
        API.getRandomEmployee()
          .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
          console.log(this.state.results)
      }

      render(){
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
      }
    
}

export default Table;