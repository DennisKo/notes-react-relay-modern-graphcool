import React, { Component, Fragment } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Note from './Note';
import AddNote from './AddNote';

class NotesList extends Component {
  render() {
    const { allNoteItems } = this.props.viewer;
    return (
      <Fragment>
        <h1>Notes</h1>
        {allNoteItems.edges.map(({ node }) => <Note key={node.id} note={node} />)}
        <AddNote viewerId={this.props.viewer.id} />
      </Fragment>
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
