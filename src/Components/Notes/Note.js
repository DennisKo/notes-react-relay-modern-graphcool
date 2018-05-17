import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import format from 'date-fns/format';
import EditNote from './EditNote';
import DeleteNoteMutation from './Mutations/DeleteNoteMutation';
import avatar from '../../images/avatar.png';

class Note extends Component {
  render() {
    const { note, toggleEditing, isEditing, viewerId } = this.props;
    return (
      <div className="note-container">
        <div className="note-content">
          <div className="avatar">
            <img src={avatar} alt="An avatar" />
          </div>
          {isEditing ? (
            <EditNote note={note} toggleEditing={toggleEditing} viewerId={viewerId} />
          ) : (
            <div className="note-text">{note.text}</div>
          )}
        </div>
        <div className="note-meta">
          <div className="note-options">
            <div onClick={() => toggleEditing(note.id)}>{isEditing ? 'Undo' : 'Edit'}</div>
            <div onClick={() => DeleteNoteMutation(note.id, viewerId, res => console.log(res))}>
              Delete
            </div>
          </div>
          <div className="note-timestamp">{format(note.updatedAt, 'DD.M.YYYY H:MM')}</div>
        </div>
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
