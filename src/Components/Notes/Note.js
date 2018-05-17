import React, { Component, Fragment } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import format from 'date-fns/format';
import EditNote from './EditNote';
import DeleteNoteMutation from './Mutations/DeleteNoteMutation';

class Note extends Component {
  render() {
    const { note, toggleEditing, isEditing, viewerId } = this.props;
    return (
      <div className="note-container">
        {isEditing ? (
          <EditNote note={note} toggleEditing={toggleEditing} viewerId={viewerId} />
        ) : (
          <div className="note-content">
            <div className="note-text">{note.text}</div>
            <div className="note-timestamp">{format(note.updatedAt, 'DD.MM.YYYY')}</div>
          </div>
        )}
        <button onClick={() => toggleEditing(note.id)}>{isEditing ? 'Discard' : 'Edit'}</button>
        <button onClick={() => DeleteNoteMutation(note.id, viewerId, res => console.log(res))}>
          Delete
        </button>
      </div>
    );
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
