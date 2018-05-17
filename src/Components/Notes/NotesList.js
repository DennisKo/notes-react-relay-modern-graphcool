import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Note from './Note';
import AddNote from './AddNote';
import './Notes.css';

export class NotesList extends Component {
  state = {
    editingId: ''
  };

  toggleEditing = noteId => {
    // note is already editing - exit editing mode
    if (this.state.editingId === noteId) {
      this.setState({ editingId: '' });
    } else {
      // enter editing mode
      this.setState({ editingId: noteId });
    }
  };

  render() {
    const { allNoteItems } = this.props.viewer;

    return (
      <div className="notes">
        <h1>You have {allNoteItems.edges.length} Notes!</h1>
        <div className="notes-list-container">
          <div className="notes-list">
            {allNoteItems.edges.map(({ node }) => (
              <Note
                isEditing={this.state.editingId === node.id}
                toggleEditing={this.toggleEditing}
                key={node.id}
                note={node}
                viewerId={this.props.viewer.id}
              />
            ))}
          </div>
        </div>
        <AddNote viewerId={this.props.viewer.id} />
      </div>
    );
  }
}

export default createFragmentContainer(
  NotesList,
  graphql`
    fragment NotesList_viewer on Viewer {
      id
      allNoteItems(last: 100, orderBy: createdAt_ASC)
        @connection(key: "NotesList_allNoteItems", filters: []) {
        edges {
          node {
            id
            ...Note_note
          }
        }
      }
    }
  `
);
