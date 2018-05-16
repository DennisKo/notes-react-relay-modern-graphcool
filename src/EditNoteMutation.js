import { commitMutation, graphql } from 'react-relay';
import environment from './Environment';

const mutation = graphql`
  mutation EditNoteMutation($input: UpdateNoteItemInput!) {
    updateNoteItem(input: $input) {
      noteItem {
        createdAt
        id
        text
        updatedAt
      }
    }
  }
`;

export default (id, text, viewerId, callback: Function) => {
  const input = {
    id,
    text,
    clientMutationId: 'default'
  };

  return commitMutation(environment, {
    mutation,
    variables: {
      input
    },
    onCompleted: res => {
      callback(res);
    },
    onError: err => err && callback(err)
  });
};
