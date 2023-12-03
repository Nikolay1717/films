import { Component } from "react";
import { AddSelection } from "./AddSelection";

class Search extends Component {
  state = {
    search: '',
    type: 'all'
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.cb(this.state.search, this.state.type);
    }
  }

  handleType = (event) => {
    console.log(`search ${event.target.value}`);
    this.setState(
      () => ({type: event.target.value}),
      () => (this.props.cb(this.state.search, this.state.type))
    );
  }

  render() {
    const {search, type} = this.state;
    return <div className="row search">
      <div className="col s12">
        <div className="input-field">
          <input 
            className="validate" 
            placeholder="search" 
            type="search"
            value={search}
            onChange={(e) => this.setState({search: e.target.value})}
            onKeyDown={this.handleKey}
          />
          <button 
            className="btn btn-search purple darken-4"
            onClick={() => this.props.cb(search, type)}
          >
            Search
          </button>
          <AddSelection type={type} cb={this.handleType}/>
        </div>
      </div>
    </div>
  }
}

export { Search }