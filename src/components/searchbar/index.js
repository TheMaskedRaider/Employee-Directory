import React from "react";

function Searchbar(props){
    return(
        <form className="search">
    <div className="form-group search-widget">
    <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Search for employees."
          id="employee"
        />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
    </div>
        </form>
    )
}

export default Searchbar;