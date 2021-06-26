import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API.js";
import Searchbar from "../searchbar";


class Table extends Component {
    state = {
        search: "",
        results: [],
        sort: "desc"
    };

    componentDidMount() {
        console.log('I have mounted!')
        API.getRandomEmployee()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(res.data.results)
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value});
        console.log(this.state.search)
    };

searchFilter= item =>  this.state.search ?
    `${item.name.first}${item.name.last}`.toLowerCase().includes(this.state.search.toLowerCase()):true

sortToggle= () => {
    this.setState({ sort: this.state.sort == "desc" ? "asc": "desc"});
    console.log(this.state.sort)

};


    render() {
        console.log(this.state.results.filter(item => item.name.first === this.state.search))

        return (
            <div>
                <Searchbar
                    handleInputChange={this.handleInputChange}
                />


                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col md-2">Profile Image</th>
                            <th scope="col md-2" onClick={this.sortToggle}>First {this.state.sort === 'desc' ? "▼": "▲"}</th>
                            <th scope="col md-2">Last</th>
                            <th scope="col md-2">Phone#</th>
                            <th scope="col md-2">Email</th>
                            <th scope="col md-2">DOB</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            this.state.results.filter(this.searchFilter).sort((a,b)=> this.state.sort ==="desc" ? a.name.first.localeCompare(b.name.first): b.name.first.localeCompare(a.name.first)).map(item =>
                                <tr>
                                    <td ><img src={item.picture.thumbnail} className="square" alt="thumbnail" /></td>
                                    <td >{item.name.first}</td>
                                    <td >{item.name.last}</td>
                                    <td >{item.phone}</td>
                                    <td >{item.email}</td>
                                    <td>{item.dob.date}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Table;