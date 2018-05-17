import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../../../Environment';

const mutation = graphql`
  mutation AddNoteMutation($input: CreateNoteItemInput!) {
    createNoteItem(input: $input) {
      noteItem {
        createdAt
        id
        text
        updatedAt
      }
    }
  }
`;

export default (text, viewerId, callback: Function) => {
  const input = {
    text,
    clientMutationId: 'default'
  };

  return commitMutation(environment, {
    mutation,
    variables: {
      input
    },
    updater: store => {
      const payload = store.getRootField('createNoteItem');
      const newNote = payload.getLinkedRecord('noteItem');
      const viewer = store.get(viewerId);
      const conn = ConnectionHandler.getConnection(viewer, 'NotesList_allNoteItems');
      const newEdge = ConnectionHandler.createEdge(store, conn, newNote, 'NoteItemEdge');
      ConnectionHandler.insertEdgeAfter(conn, newEdge);
    },
    onCompleted: res => {
      callback(res);
    },
    onError: err => err && callback(err)
  });
};
