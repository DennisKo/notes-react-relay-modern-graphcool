import React, { Component, Fragment } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { format } from 'date-fns/esm';
import EditNote from './EditNote';
import DeleteNoteMutation from './DeleteNoteMutation';

class Note extends Component {
  render() {
    const { note, toggleEditing, isEditing, viewerId } = this.props;
    return (
      <div>
        {isEditing ? (
          <EditNote note={note} toggleEditing={toggleEditing} viewerId={viewerId} />
        ) : (
          <Fragment>
            <div>{note.text}</div>
            <div>{format(note.updatedAt, 'dd.MM.YYYY')}</div>
          </Fragment>
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
