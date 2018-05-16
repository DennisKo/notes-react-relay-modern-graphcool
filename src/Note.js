import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Note extends Component {
  render() {
    const { note } = this.props;
    return <div>{note.text}</div>;
  }
}

export default createFragmentContainer(
  Note,
  graphql`
    fragment Note_note on NoteItem {
      id
      text
      createdAt
      updatedAt
    }
  `
);
