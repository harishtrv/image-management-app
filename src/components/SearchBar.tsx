import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

class SearchBar extends React.Component<{ runOnSubmit: Function }, { text: string }>{
  state = { text: '' }
  onFormSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    this.props.runOnSubmit(this.state.text);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div >
            <label>
              <AiOutlineSearch className="absolute h-10 w-5" />
            </label>
            <input type='text'
              className="h-10 w-96 pr-8 pl-5 rounded z-0 bg-amber-100 focus:shadow focus:outline-none"
              placeholder="Search anything..."
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}></input>
          </div>
        </form>
      </div>);
  }
}

export default SearchBar;