import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../Environment';
import NotesList from './NotesList';

const NotesQuery = graphql`
  query NotesQuery {
    viewer {
      ...NotesList_viewer
    }
  }
`;

class Notes extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={NotesQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <NotesList viewer={props.viewer} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default Notes;
