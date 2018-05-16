import React, { Component } from 'react';
import AddNoteMutation from './AddNoteMutation';

export default class AddNote extends Component {
  state = {
    text: ''
  };

  handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    AddNoteMutation(this.state.text, this.props.viewerId, res => console.log(res));

    // reset input
    this.setState({
      text: ''
    });
  };

  handleChange = event => {
    const text = event.target.value;

    this.setState({
      text
    });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Press Enter to submit"
        />
      </div>
    );
  }
}
