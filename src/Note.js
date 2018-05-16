import React, { Component, Fragment } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { format } from 'date-fns/esm';
import EditNote from './EditNote';

class Note extends Component {
  render() {
    const { note, toggleEditing, isEditing } = this.props;
    return (
      <div>
        {isEditing ? (
          <EditNote note={note} toggleEditing={toggleEditing} />
        ) : (
          <Fragment>
            <div>{note.text}</div>
            <div>{format(note.updatedAt, 'dd.MM.YYYY')}</div>
          </Fragment>
        )}
        <button onClick={() => toggleEditing(note.id)}>{isEditing ? 'Discard' : 'Edit'}</button>
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
