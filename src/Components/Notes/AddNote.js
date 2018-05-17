import React, { Component } from 'react';
import AddNoteMutation from './Mutations/AddNoteMutation';

class AddNote extends Component {
  state = {
    text: ''
  };

  handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    if (this.state.text !== '') {
      AddNoteMutation(this.state.text, this.props.viewerId, res => console.log(res));
    }

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
        <AddNoteButton handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
const AddNoteButton = ({ handleSubmit }) => (
  <button data-testid="addButton" onClick={handleSubmit}>
    Add Note
  </button>
);

export default AddNote;
