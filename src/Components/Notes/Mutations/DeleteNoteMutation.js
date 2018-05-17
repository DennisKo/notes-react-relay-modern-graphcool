import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation DeleteNoteMutation($input: DeleteNoteItemInput!) {
    deleteNoteItem(input: $input) {
      deletedId
    }
  }
`;

export default (id, viewerId, callback: Function) => {
  const input = {
    id,
    clientMutationId: 'default'
  };

  return commitMutation(environment, {
    mutation,
    variables: {
      input
    },
    updater: store => {
      const payload = store.getRootField('deleteNoteItem');
      const deletedId = payload.getValue('deletedId');
      const viewer = store.get(viewerId);
      const conn = ConnectionHandler.getConnection(viewer, 'NotesList_allNoteItems');

      ConnectionHandler.deleteNode(conn, deletedId);
    },
    onCompleted: res => {
      callback(res);
    },
    onError: err => err && callback(err)
  });
};
