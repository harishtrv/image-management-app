import React from 'react';

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
            <label>Image Search: </label>
            <input type='text'
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}></input>
          </div>
        </form>
      </div>);
  }
}

export default SearchBar;