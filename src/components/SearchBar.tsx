import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface stateType{
  text: string;
}
class SearchBar extends React.Component<{ runOnSubmit: (text: string) => Promise<void> }>{
  state: stateType = { text: '' }
  onFormSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    this.props.runOnSubmit(this.state.text);
  }

  render() {
    return (
      <div className='pt-2 pb-2 pl-5 m-3'>
        <form onSubmit={this.onFormSubmit}>
          <div >
            <label>
              <AiOutlineSearch className="absolute h-10 w-5" />
            </label>
            <input type='text'
              className="h-10 w-32 sm:w-64 pr-8 pl-5 rounded z-0 bg-amber-100 focus:shadow focus:outline-none"
              placeholder="Search here..."
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}></input>
          </div>
        </form>
      </div>);
  }
}

export default SearchBar;