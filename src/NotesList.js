import React, { Component, Fragment } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Note from './Note';

class NotesList extends Component {
  render() {
    const { allNoteItems } = this.props.viewer;
    return (
      <Fragment>
        <h1>Notes</h1>
        {allNoteItems.edges.map(({ node }) => (
          <Note key={node.id} note={node} />
        ))}
      </Fragment>
    );
  }
}

export default createFragmentContainer(
  NotesList,
  graphql`
    fragment NotesList_viewer on Viewer {
      allNoteItems {
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
