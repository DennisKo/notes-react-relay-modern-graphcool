import React, { Component } from 'react';
import EditNoteMutation from './Mutations/EditNoteMutation';

export default class EditNote extends Component {
  state = {
    text: this.props.note.text
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.note !== this.props.note) {
      this.setState({ text: nextProps.note.text });
    }
  }

  handleChange = event => {
    const text = event.target.value;
    this.setState({ text });
  };

  handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      this.handleUpdate();
    }
  };

  handleUpdate = () => {
    const { note, toggleEditing, viewerId } = this.props;
    EditNoteMutation(note.id, this.state.text, viewerId, () => toggleEditing(note.id));
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <input value={text} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}
